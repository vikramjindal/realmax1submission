<?php
/**
 * Plugin Name: REMAX Integration
 * Description: Headless CMS integration for REMAX Excellence Next.js website
 * Version: 1.0.0
 * Author: REMAX Excellence
 * 
 * This plugin creates custom post types and REST API endpoints
 * for the REMAX Excellence Next.js frontend.
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Load plugin files
$plugin_dir = plugin_dir_path(__FILE__);

if (file_exists($plugin_dir . 'remax-custom-post-types.php')) {
    require_once $plugin_dir . 'remax-custom-post-types.php';
} else {
    error_log('REMAX Integration: remax-custom-post-types.php not found!');
}

if (file_exists($plugin_dir . 'remax-rest-api.php')) {
    require_once $plugin_dir . 'remax-rest-api.php';
} else {
    error_log('REMAX Integration: remax-rest-api.php not found!');
}

if (file_exists($plugin_dir . 'remax-webhooks.php')) {
    require_once $plugin_dir . 'remax-webhooks.php';
} else {
    error_log('REMAX Integration: remax-webhooks.php not found!');
}

// Force register post types immediately (not just on activation)
add_action('init', function() {
    if (function_exists('remax_register_custom_post_types')) {
        remax_register_custom_post_types();
    }
}, 0); // Priority 0 to run early

// Flush rewrite rules on plugin activation
function remax_flush_rewrite_rules() {
    // Make sure the function exists before calling
    if (function_exists('remax_register_custom_post_types')) {
        remax_register_custom_post_types();
    }
    flush_rewrite_rules();
    // Force rewrite rules to be regenerated
    delete_option('rewrite_rules');
}
register_activation_hook(__FILE__, 'remax_flush_rewrite_rules');

// Flush rewrite rules on plugin deactivation
function remax_deactivate_flush() {
    flush_rewrite_rules();
    delete_option('rewrite_rules');
}
register_deactivation_hook(__FILE__, 'remax_deactivate_flush');

