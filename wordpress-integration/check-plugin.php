<?php
/**
 * Quick Plugin Check
 * Upload this to WordPress root and visit it
 */

require_once('wp-load.php');

echo "<h1>Plugin Check</h1>";

// Check both possible folder names
$folders = ['wordpress-integration', 'remax-integration'];
$found = false;

foreach ($folders as $folder) {
    $plugin_file = WP_PLUGIN_DIR . '/' . $folder . '/remax-integration.php';
    if (file_exists($plugin_file)) {
        echo "<p style='color:green;'>✓ Found plugin at: <code>{$plugin_file}</code></p>";
        $found = true;
        
        // Check if plugin is active
        $plugin_path = $folder . '/remax-integration.php';
        $active_plugins = get_option('active_plugins', array());
        
        if (in_array($plugin_path, $active_plugins)) {
            echo "<p style='color:green;'>✓ Plugin is ACTIVE</p>";
        } else {
            echo "<p style='color:red;'>✗ Plugin is NOT ACTIVE</p>";
            echo "<p>Go to Plugins → Installed Plugins and activate 'REMAX Integration'</p>";
        }
        
        // Check if Marketing Services post type exists
        if (post_type_exists('remax_marketing_service')) {
            echo "<p style='color:green;'>✓ remax_marketing_service is REGISTERED</p>";
        } else {
            echo "<p style='color:red;'>✗ remax_marketing_service is NOT registered</p>";
            echo "<p><strong>Fix:</strong> Deactivate and reactivate the plugin, then go to Settings → Permalinks and click Save Changes</p>";
        }
        
        break;
    }
}

if (!$found) {
    echo "<p style='color:red;'>✗ Plugin file not found in either location</p>";
    echo "<p>Expected locations:</p><ul>";
    foreach ($folders as $folder) {
        echo "<li><code>" . WP_PLUGIN_DIR . "/{$folder}/remax-integration.php</code></li>";
    }
    echo "</ul>";
}

// Test REST API
echo "<h2>REST API Test</h2>";
$url = home_url('/wp-json/wp/v2/marketing-services');
$response = wp_remote_get($url);

if (is_wp_error($response)) {
    echo "<p style='color:red;'>Error: " . $response->get_error_message() . "</p>";
} else {
    $status = wp_remote_retrieve_response_code($response);
    if ($status === 200) {
        echo "<p style='color:green;'>✓ REST API working: <a href='{$url}'>{$url}</a></p>";
    } else {
        echo "<p style='color:red;'>✗ REST API returned status {$status}</p>";
        echo "<p>URL: <a href='{$url}'>{$url}</a></p>";
    }
}

