<?php
/**
 * Force Register Marketing Services
 * 
 * Upload this to WordPress root and visit it ONCE to force register the post type
 * Then delete this file
 */

require_once('wp-load.php');

echo "<h1>Force Register Marketing Services</h1>";

// Check if function exists
if (!function_exists('remax_register_custom_post_types')) {
    echo "<p style='color:red;'>✗ Function remax_register_custom_post_types() not found!</p>";
    echo "<p>Make sure the plugin files are loaded correctly.</p>";
    exit;
}

// Force register
echo "<p>Registering custom post types...</p>";
remax_register_custom_post_types();

// Check if it's now registered
if (post_type_exists('remax_marketing_service')) {
    echo "<p style='color:green;'>✓ remax_marketing_service is now REGISTERED!</p>";
    
    // Flush rewrite rules
    flush_rewrite_rules();
    delete_option('rewrite_rules');
    
    echo "<p style='color:green;'>✓ Rewrite rules flushed!</p>";
    echo "<p><strong>Next steps:</strong></p>";
    echo "<ol>";
    echo "<li>Go to WordPress Admin → Settings → Permalinks and click 'Save Changes'</li>";
    echo "<li>Check the sidebar - 'Marketing Services' should appear</li>";
    echo "<li>Test: <a href='" . home_url('/wp-json/wp/v2/marketing-services') . "'>REST API</a></li>";
    echo "<li><strong>DELETE THIS FILE</strong> after you're done</li>";
    echo "</ol>";
} else {
    echo "<p style='color:red;'>✗ Still not registered. There may be a PHP error.</p>";
    echo "<p>Check WordPress debug log for errors.</p>";
}

