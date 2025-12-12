<?php
/**
 * DIRECT FIX for Marketing Services
 * Upload to WordPress root and visit ONCE
 */

require_once('wp-load.php');

// Remove the existing hook if it exists
remove_action('init', 'remax_register_custom_post_types');

// Register directly with error handling
function remax_fix_marketing_services() {
    $result = register_post_type('remax_marketing_service', array(
        'labels' => array(
            'name' => 'Marketing Services',
            'singular_name' => 'Marketing Service',
            'add_new' => 'Add New Service',
            'add_new_item' => 'Add New Marketing Service',
            'edit_item' => 'Edit Marketing Service',
            'new_item' => 'New Marketing Service',
            'view_item' => 'View Marketing Service',
            'search_items' => 'Search Marketing Services',
            'not_found' => 'No marketing services found',
            'not_found_in_trash' => 'No marketing services found in Trash'
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'rest_base' => 'marketing-services',
        'menu_icon' => 'dashicons-admin-tools',
        'supports' => array('title', 'thumbnail', 'editor'),
        'menu_position' => 26
    ));
    
    if (is_wp_error($result)) {
        return $result;
    }
    return true;
}

// Register it now
add_action('init', 'remax_fix_marketing_services', 5);

// Force it to run immediately
remax_fix_marketing_services();

// Flush rewrite rules
flush_rewrite_rules();
delete_option('rewrite_rules');

echo "<h1>Marketing Services Fix Applied</h1>";

if (post_type_exists('remax_marketing_service')) {
    echo "<p style='color:green; font-size:18px;'>✓ SUCCESS! remax_marketing_service is now registered!</p>";
    echo "<p><strong>Next steps:</strong></p>";
    echo "<ol>";
    echo "<li>Go to <strong>Settings → Permalinks</strong> and click <strong>Save Changes</strong></li>";
    echo "<li>Check WordPress sidebar - 'Marketing Services' should appear</li>";
    echo "<li>Test REST API: <a href='" . home_url('/wp-json/wp/v2/marketing-services') . "' target='_blank'>Click here</a></li>";
    echo "<li><strong>DELETE THIS FILE</strong> after confirming it works</li>";
    echo "</ol>";
} else {
    echo "<p style='color:red; font-size:18px;'>✗ Still not registered. There may be a conflict.</p>";
    echo "<p>Please run <code>debug-register.php</code> to see detailed error information.</p>";
}

