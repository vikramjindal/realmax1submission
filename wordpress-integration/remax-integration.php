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
require_once plugin_dir_path(__FILE__) . 'remax-custom-post-types.php';
require_once plugin_dir_path(__FILE__) . 'remax-rest-api.php';
require_once plugin_dir_path(__FILE__) . 'remax-webhooks.php';

