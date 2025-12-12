<?php
/**
 * Plugin Verification Script
 * 
 * Upload this to your WordPress root directory and access it to verify
 * that the REMAX Integration plugin is working correctly.
 * 
 * URL: https://backend.joinremaxex.com/verify-plugin.php
 */

// Load WordPress
require_once('wp-load.php');

header('Content-Type: text/html; charset=utf-8');
?>
<!DOCTYPE html>
<html>
<head>
    <title>REMAX Plugin Verification</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 900px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        h1 { color: #d32f2f; }
        h2 { color: #333; border-bottom: 2px solid #d32f2f; padding-bottom: 10px; }
        .success { color: green; font-weight: bold; }
        .error { color: red; font-weight: bold; }
        .info { background: #e3f2fd; padding: 10px; border-left: 4px solid #2196f3; margin: 10px 0; }
        pre { background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto; }
        ul { line-height: 1.8; }
        code { background: #f5f5f5; padding: 2px 6px; border-radius: 3px; }
    </style>
</head>
<body>
<div class="container">
    <h1>🔍 REMAX Integration Plugin Verification</h1>

    <?php
    // Check if plugin file exists
    $plugin_file = WP_PLUGIN_DIR . '/remax-integration/remax-integration.php';
    $plugin_exists = file_exists($plugin_file);
    
    echo "<h2>1. Plugin File Check</h2>";
    if ($plugin_exists) {
        echo "<p class='success'>✓ Plugin file exists at: <code>{$plugin_file}</code></p>";
    } else {
        echo "<p class='error'>✗ Plugin file NOT found at: <code>{$plugin_file}</code></p>";
        echo "<p class='info'>Expected location: <code>wp-content/plugins/remax-integration/remax-integration.php</code></p>";
    }
    
    // Check if plugin is active
    echo "<h2>2. Plugin Activation Status</h2>";
    $active_plugins = get_option('active_plugins', array());
    $plugin_active = false;
    $plugin_path = '';
    
    foreach ($active_plugins as $plugin) {
        if (strpos($plugin, 'remax') !== false) {
            $plugin_active = true;
            $plugin_path = $plugin;
            break;
        }
    }
    
    if ($plugin_active) {
        echo "<p class='success'>✓ Plugin is ACTIVE: <code>{$plugin_path}</code></p>";
    } else {
        echo "<p class='error'>✗ Plugin is NOT ACTIVE</p>";
        echo "<p class='info'>Go to <strong>Plugins → Installed Plugins</strong> and activate <strong>REMAX Integration</strong></p>";
    }
    
    // Check if functions are loaded
    echo "<h2>3. Function Availability</h2>";
    $functions_to_check = array(
        'remax_register_custom_post_types',
        'remax_register_rest_fields',
    );
    
    foreach ($functions_to_check as $func) {
        if (function_exists($func)) {
            echo "<p class='success'>✓ Function exists: <code>{$func}()</code></p>";
        } else {
            echo "<p class='error'>✗ Function NOT found: <code>{$func}()</code></p>";
        }
    }
    
    // Check registered post types
    echo "<h2>4. Custom Post Types Registration</h2>";
    $expected_post_types = array(
        'remax_agent',
        'remax_team',
        'remax_testimonial',
        'remax_marketing',
        'remax_event',
        'remax_training',
        'remax_marketing_service', // This is the one we're checking
        'remax_section',
    );
    
    $registered_types = get_post_types(array('public' => true), 'names');
    
    foreach ($expected_post_types as $post_type) {
        if (post_type_exists($post_type)) {
            $post_type_obj = get_post_type_object($post_type);
            $rest_base = isset($post_type_obj->rest_base) ? $post_type_obj->rest_base : 'N/A';
            $show_in_rest = $post_type_obj->show_in_rest ? 'Yes' : 'No';
            
            echo "<p class='success'>✓ <strong>{$post_type}</strong> is registered</p>";
            echo "<ul>";
            echo "<li>REST Base: <code>{$rest_base}</code></li>";
            echo "<li>Show in REST: <code>{$show_in_rest}</code></li>";
            echo "<li>Label: <code>{$post_type_obj->label}</code></li>";
            echo "</ul>";
        } else {
            $highlight = ($post_type === 'remax_marketing_service') ? ' <strong style="color:red;">[THIS IS THE PROBLEM]</strong>' : '';
            echo "<p class='error'>✗ <strong>{$post_type}</strong> is NOT registered{$highlight}</p>";
        }
    }
    
    // Test REST API endpoints
    echo "<h2>5. REST API Endpoint Test</h2>";
    $endpoints_to_test = array(
        'agents' => '/wp-json/wp/v2/agents',
        'marketing-services' => '/wp-json/wp/v2/marketing-services',
        'events' => '/wp-json/wp/v2/events',
    );
    
    foreach ($endpoints_to_test as $name => $endpoint) {
        $url = home_url($endpoint);
        $response = wp_remote_get($url, array('timeout' => 10));
        
        if (is_wp_error($response)) {
            echo "<p class='error'>✗ <strong>{$name}</strong>: Error - " . $response->get_error_message() . "</p>";
        } else {
            $status = wp_remote_retrieve_response_code($response);
            $body = wp_remote_retrieve_body($response);
            
            if ($status === 200) {
                $data = json_decode($body, true);
                $count = is_array($data) ? count($data) : 'N/A';
                echo "<p class='success'>✓ <strong>{$name}</strong>: Status {$status} - <a href='{$url}' target='_blank'>{$url}</a> ({$count} items)</p>";
            } else {
                echo "<p class='error'>✗ <strong>{$name}</strong>: Status {$status} - <a href='{$url}' target='_blank'>{$url}</a></p>";
                if ($status === 404) {
                    echo "<p class='info'>404 means the endpoint doesn't exist. The custom post type is not registered or rewrite rules need flushing.</p>";
                }
            }
        }
    }
    
    // Recommendations
    echo "<h2>6. Recommendations</h2>";
    echo "<ul>";
    
    if (!$plugin_exists) {
        echo "<li class='error'><strong>Action Required:</strong> Upload the plugin files to <code>wp-content/plugins/remax-integration/</code></li>";
    }
    
    if (!$plugin_active) {
        echo "<li class='error'><strong>Action Required:</strong> Activate the REMAX Integration plugin in WordPress admin</li>";
    }
    
    if (!post_type_exists('remax_marketing_service')) {
        echo "<li class='error'><strong>Action Required:</strong> The Marketing Services post type is not registered. Try:</li>";
        echo "<ol>";
        echo "<li>Deactivate the REMAX Integration plugin</li>";
        echo "<li>Wait 2 seconds</li>";
        echo "<li>Activate it again</li>";
        echo "<li>Go to <strong>Settings → Permalinks</strong> and click <strong>Save Changes</strong></li>";
        echo "<li>Refresh this page</li>";
        echo "</ol>";
    }
    
    if (post_type_exists('remax_marketing_service')) {
        echo "<li class='success'>✓ Everything looks good! You should see 'Marketing Services' in your WordPress admin sidebar.</li>";
    }
    
    echo "</ul>";
    ?>
    
    <hr>
    <p><small>Generated at: <?php echo date('Y-m-d H:i:s'); ?></small></p>
</div>
</body>
</html>

