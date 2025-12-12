<?php
/**
 * Test Carousel Speed Endpoint
 * Upload to WordPress root and visit to test
 */

require_once('wp-load.php');

echo "<h1>Carousel Speed Test</h1>";

// Check if function exists
if (function_exists('remax_get_carousel_speed')) {
    echo "<p style='color:green;'>✓ Function remax_get_carousel_speed() exists</p>";
} else {
    echo "<p style='color:red;'>✗ Function remax_get_carousel_speed() NOT found</p>";
}

// Check if option exists
$speed = get_option('remax_carousel_speed', 15);
echo "<p>Current carousel speed setting: <strong>{$speed} seconds</strong></p>";

// Test REST API endpoint
echo "<h2>REST API Test</h2>";
$url = home_url('/wp-json/remax/v1/carousel-speed');
echo "<p>Endpoint: <a href='{$url}' target='_blank'>{$url}</a></p>";

$response = wp_remote_get($url);
if (is_wp_error($response)) {
    echo "<p style='color:red;'>✗ Error: " . $response->get_error_message() . "</p>";
} else {
    $status = wp_remote_retrieve_response_code($response);
    $body = wp_remote_retrieve_body($response);
    echo "<p>Status: <strong>{$status}</strong></p>";
    echo "<p>Response: <pre>" . esc_html($body) . "</pre></p>";
    
    if ($status === 200) {
        $data = json_decode($body, true);
        if (isset($data['speed'])) {
            echo "<p style='color:green;'>✓ Endpoint working! Speed: {$data['speed']} seconds</p>";
        }
    } else {
        echo "<p style='color:red;'>✗ Endpoint returned error status {$status}</p>";
        echo "<p><strong>Fix:</strong> Make sure remax-settings.php is uploaded and plugin is activated</p>";
    }
}

// Check if settings file is loaded
echo "<h2>Plugin File Check</h2>";
$settings_file = WP_PLUGIN_DIR . '/wordpress-integration/remax-settings.php';
if (file_exists($settings_file)) {
    echo "<p style='color:green;'>✓ Settings file exists: <code>{$settings_file}</code></p>";
} else {
    echo "<p style='color:red;'>✗ Settings file NOT found: <code>{$settings_file}</code></p>";
    echo "<p>Expected location: <code>wp-content/plugins/wordpress-integration/remax-settings.php</code></p>";
}

// Check if plugin is active
echo "<h2>Plugin Status</h2>";
$active_plugins = get_option('active_plugins', array());
$plugin_active = false;
foreach ($active_plugins as $plugin) {
    if (strpos($plugin, 'remax') !== false || strpos($plugin, 'wordpress-integration') !== false) {
        $plugin_active = true;
        echo "<p style='color:green;'>✓ Plugin is active: <code>{$plugin}</code></p>";
        break;
    }
}
if (!$plugin_active) {
    echo "<p style='color:red;'>✗ REMAX Integration plugin is NOT active</p>";
}

