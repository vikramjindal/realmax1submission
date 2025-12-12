<?php
/**
 * Temporary Diagnostic File for Marketing Services
 * 
 * Upload this file to your WordPress root directory and access it via:
 * https://backend.joinremaxex.com/test-marketing-services.php
 * 
 * This will help diagnose why Marketing Services isn't appearing
 */

// Load WordPress
require_once('wp-load.php');

echo "<h1>Marketing Services Diagnostic</h1>";

// Check if post type is registered
$post_types = get_post_types(array('public' => true), 'objects');

echo "<h2>Registered Custom Post Types:</h2>";
echo "<ul>";
foreach ($post_types as $post_type) {
    if (strpos($post_type->name, 'remax_') === 0) {
        echo "<li><strong>{$post_type->name}</strong> - {$post_type->label}";
        echo "<br>REST Base: " . ($post_type->rest_base ?? 'Not set');
        echo "<br>Show in REST: " . ($post_type->show_in_rest ? 'Yes' : 'No');
        echo "</li>";
    }
}
echo "</ul>";

// Check specifically for marketing_service
if (post_type_exists('remax_marketing_service')) {
    echo "<p style='color: green;'><strong>✓ remax_marketing_service is registered!</strong></p>";
    
    $post_type_obj = get_post_type_object('remax_marketing_service');
    echo "<h3>Post Type Details:</h3>";
    echo "<pre>";
    print_r($post_type_obj);
    echo "</pre>";
} else {
    echo "<p style='color: red;'><strong>✗ remax_marketing_service is NOT registered!</strong></p>";
    echo "<p>This means the plugin file isn't loading correctly or there's a PHP error.</p>";
}

// Test REST API endpoint
echo "<h2>REST API Test:</h2>";
$rest_url = home_url('/wp-json/wp/v2/marketing-services');
echo "<p>Endpoint: <a href='{$rest_url}' target='_blank'>{$rest_url}</a></p>";

$response = wp_remote_get($rest_url);
if (is_wp_error($response)) {
    echo "<p style='color: red;'>Error: " . $response->get_error_message() . "</p>";
} else {
    $status = wp_remote_retrieve_response_code($response);
    $body = wp_remote_retrieve_body($response);
    echo "<p>Status Code: <strong>{$status}</strong></p>";
    echo "<p>Response: <pre>" . esc_html($body) . "</pre></p>";
}

// Check if plugin is active
echo "<h2>Plugin Status:</h2>";
if (is_plugin_active('remax-integration/remax-integration.php')) {
    echo "<p style='color: green;'>✓ REMAX Integration plugin is ACTIVE</p>";
} else {
    echo "<p style='color: red;'>✗ REMAX Integration plugin is NOT ACTIVE</p>";
    echo "<p>Active plugins:</p><ul>";
    $active_plugins = get_option('active_plugins');
    foreach ($active_plugins as $plugin) {
        if (strpos($plugin, 'remax') !== false) {
            echo "<li>{$plugin}</li>";
        }
    }
    echo "</ul>";
}

// Check for PHP errors
echo "<h2>PHP Error Check:</h2>";
$error_log = ini_get('error_log');
if ($error_log) {
    echo "<p>Error log location: {$error_log}</p>";
} else {
    echo "<p>Error log: Not configured</p>";
}

echo "<hr>";
echo "<p><strong>Next Steps:</strong></p>";
echo "<ol>";
echo "<li>If remax_marketing_service is NOT registered, check WordPress debug log for PHP errors</li>";
echo "<li>Deactivate and reactivate the REMAX Integration plugin</li>";
echo "<li>Go to Settings → Permalinks and click 'Save Changes'</li>";
echo "<li>Check that all PHP files are uploaded correctly</li>";
echo "</ol>";

