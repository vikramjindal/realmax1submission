<?php
/**
 * REMAX Excellence - Custom Post Types
 * 
 * This file registers custom post types for the REMAX website:
 * - Agents (for carousel)
 * - Team Members
 * - Testimonials
 * - Page Sections
 * 
 * Place this file in your WordPress theme's functions.php or as a plugin
 */

// Register Custom Post Types
function remax_register_custom_post_types() {
    
    // 1. Agents (for homepage carousel)
    register_post_type('remax_agent', array(
        'labels' => array(
            'name' => 'Agents',
            'singular_name' => 'Agent',
            'add_new' => 'Add New Agent',
            'add_new_item' => 'Add New Agent',
            'edit_item' => 'Edit Agent',
            'new_item' => 'New Agent',
            'view_item' => 'View Agent',
            'search_items' => 'Search Agents',
            'not_found' => 'No agents found',
            'not_found_in_trash' => 'No agents found in Trash'
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true, // Enable REST API
        'rest_base' => 'agents',
        'menu_icon' => 'dashicons-groups',
        'supports' => array('title', 'thumbnail', 'editor'),
        'menu_position' => 20
    ));

    // 2. Team Members
    register_post_type('remax_team', array(
        'labels' => array(
            'name' => 'Team Members',
            'singular_name' => 'Team Member',
            'add_new' => 'Add New Team Member',
            'add_new_item' => 'Add New Team Member',
            'edit_item' => 'Edit Team Member',
            'new_item' => 'New Team Member',
            'view_item' => 'View Team Member',
            'search_items' => 'Search Team Members',
            'not_found' => 'No team members found',
            'not_found_in_trash' => 'No team members found in Trash'
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'rest_base' => 'team-members',
        'menu_icon' => 'dashicons-businessperson',
        'supports' => array('title', 'thumbnail', 'editor'),
        'menu_position' => 21
    ));

    // 3. Testimonials
    register_post_type('remax_testimonial', array(
        'labels' => array(
            'name' => 'Testimonials',
            'singular_name' => 'Testimonial',
            'add_new' => 'Add New Testimonial',
            'add_new_item' => 'Add New Testimonial',
            'edit_item' => 'Edit Testimonial',
            'new_item' => 'New Testimonial',
            'view_item' => 'View Testimonial',
            'search_items' => 'Search Testimonials',
            'not_found' => 'No testimonials found',
            'not_found_in_trash' => 'No testimonials found in Trash'
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'rest_base' => 'testimonials',
        'menu_icon' => 'dashicons-format-quote',
        'supports' => array('title', 'editor'),
        'menu_position' => 22
    ));

    // 4. Page Sections (for homepage sections)
    register_post_type('remax_section', array(
        'labels' => array(
            'name' => 'Page Sections',
            'singular_name' => 'Page Section',
            'add_new' => 'Add New Section',
            'add_new_item' => 'Add New Section',
            'edit_item' => 'Edit Section',
            'new_item' => 'New Section',
            'view_item' => 'View Section',
            'search_items' => 'Search Sections',
            'not_found' => 'No sections found',
            'not_found_in_trash' => 'No sections found in Trash'
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'rest_base' => 'sections',
        'menu_icon' => 'dashicons-layout',
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_position' => 23
    ));
}
add_action('init', 'remax_register_custom_post_types');

// Add custom meta boxes for additional fields
function remax_add_meta_boxes() {
    // Agent meta box
    add_meta_box(
        'remax_agent_meta',
        'Agent Information',
        'remax_agent_meta_callback',
        'remax_agent',
        'normal',
        'high'
    );

    // Team member meta box
    add_meta_box(
        'remax_team_meta',
        'Team Member Information',
        'remax_team_meta_callback',
        'remax_team',
        'normal',
        'high'
    );

    // Testimonial meta box
    add_meta_box(
        'remax_testimonial_meta',
        'Testimonial Information',
        'remax_testimonial_meta_callback',
        'remax_testimonial',
        'normal',
        'high'
    );

    // Section meta box
    add_meta_box(
        'remax_section_meta',
        'Section Information',
        'remax_section_meta_callback',
        'remax_section',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'remax_add_meta_boxes');

// Agent meta box callback
function remax_agent_meta_callback($post) {
    wp_nonce_field('remax_agent_meta', 'remax_agent_meta_nonce');
    
    $agent_name = get_post_meta($post->ID, '_remax_agent_name', true);
    $agent_order = get_post_meta($post->ID, '_remax_agent_order', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="remax_agent_name">Agent Name</label></th>';
    echo '<td><input type="text" id="remax_agent_name" name="remax_agent_name" value="' . esc_attr($agent_name) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_agent_order">Display Order</label></th>';
    echo '<td><input type="number" id="remax_agent_order" name="remax_agent_order" value="' . esc_attr($agent_order ? $agent_order : '0') . '" class="small-text" /><p class="description">Lower numbers appear first</p></td>';
    echo '</tr>';
    echo '</table>';
}

// Team member meta box callback
function remax_team_meta_callback($post) {
    wp_nonce_field('remax_team_meta', 'remax_team_meta_nonce');
    
    $team_role = get_post_meta($post->ID, '_remax_team_role', true);
    $team_phone = get_post_meta($post->ID, '_remax_team_phone', true);
    $team_email = get_post_meta($post->ID, '_remax_team_email', true);
    $team_instagram = get_post_meta($post->ID, '_remax_team_instagram', true);
    $team_linkedin = get_post_meta($post->ID, '_remax_team_linkedin', true);
    $team_order = get_post_meta($post->ID, '_remax_team_order', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="remax_team_role">Role</label></th>';
    echo '<td><input type="text" id="remax_team_role" name="remax_team_role" value="' . esc_attr($team_role) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_team_phone">Phone</label></th>';
    echo '<td><input type="text" id="remax_team_phone" name="remax_team_phone" value="' . esc_attr($team_phone) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_team_email">Email</label></th>';
    echo '<td><input type="email" id="remax_team_email" name="remax_team_email" value="' . esc_attr($team_email) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_team_instagram">Instagram URL</label></th>';
    echo '<td><input type="url" id="remax_team_instagram" name="remax_team_instagram" value="' . esc_attr($team_instagram) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_team_linkedin">LinkedIn URL</label></th>';
    echo '<td><input type="url" id="remax_team_linkedin" name="remax_team_linkedin" value="' . esc_attr($team_linkedin) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_team_order">Display Order</label></th>';
    echo '<td><input type="number" id="remax_team_order" name="remax_team_order" value="' . esc_attr($team_order ? $team_order : '0') . '" class="small-text" /></td>';
    echo '</tr>';
    echo '</table>';
}

// Testimonial meta box callback
function remax_testimonial_meta_callback($post) {
    wp_nonce_field('remax_testimonial_meta', 'remax_testimonial_meta_nonce');
    
    $testimonial_role = get_post_meta($post->ID, '_remax_testimonial_role', true);
    $testimonial_rating = get_post_meta($post->ID, '_remax_testimonial_rating', true);
    $testimonial_order = get_post_meta($post->ID, '_remax_testimonial_order', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="remax_testimonial_role">Role/Title</label></th>';
    echo '<td><input type="text" id="remax_testimonial_role" name="remax_testimonial_role" value="' . esc_attr($testimonial_role) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_testimonial_rating">Rating (1-5)</label></th>';
    echo '<td><input type="number" id="remax_testimonial_rating" name="remax_testimonial_rating" value="' . esc_attr($testimonial_rating ? $testimonial_rating : '5') . '" min="1" max="5" class="small-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_testimonial_order">Display Order</label></th>';
    echo '<td><input type="number" id="remax_testimonial_order" name="remax_testimonial_order" value="' . esc_attr($testimonial_order ? $testimonial_order : '0') . '" class="small-text" /></td>';
    echo '</tr>';
    echo '</table>';
    echo '<p><strong>Note:</strong> The testimonial content should be entered in the main content editor above.</p>';
}

// Section meta box callback
function remax_section_meta_callback($post) {
    wp_nonce_field('remax_section_meta', 'remax_section_meta_nonce');
    
    $section_type = get_post_meta($post->ID, '_remax_section_type', true);
    $section_subtitle = get_post_meta($post->ID, '_remax_section_subtitle', true);
    $section_order = get_post_meta($post->ID, '_remax_section_order', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="remax_section_type">Section Type</label></th>';
    echo '<td>';
    echo '<select id="remax_section_type" name="remax_section_type" class="regular-text">';
    $types = array(
        'hero' => 'Hero Section',
        'partner' => 'Trusted Partner Section',
        'performers' => 'Top Performers Section',
        'features' => 'Features Section',
        'realtors' => 'For Realtors Section',
        'testimonials' => 'Testimonials Section'
    );
    foreach ($types as $value => $label) {
        echo '<option value="' . esc_attr($value) . '" ' . selected($section_type, $value, false) . '>' . esc_html($label) . '</option>';
    }
    echo '</select>';
    echo '</td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_section_subtitle">Subtitle</label></th>';
    echo '<td><input type="text" id="remax_section_subtitle" name="remax_section_subtitle" value="' . esc_attr($section_subtitle) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_section_order">Display Order</label></th>';
    echo '<td><input type="number" id="remax_section_order" name="remax_section_order" value="' . esc_attr($section_order ? $section_order : '0') . '" class="small-text" /></td>';
    echo '</tr>';
    echo '</table>';
}

// Save meta box data
function remax_save_meta_boxes($post_id) {
    // Check nonces and permissions
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;

    // Save Agent meta
    if (isset($_POST['remax_agent_meta_nonce']) && wp_verify_nonce($_POST['remax_agent_meta_nonce'], 'remax_agent_meta')) {
        if (isset($_POST['remax_agent_name'])) {
            update_post_meta($post_id, '_remax_agent_name', sanitize_text_field($_POST['remax_agent_name']));
        }
        if (isset($_POST['remax_agent_order'])) {
            update_post_meta($post_id, '_remax_agent_order', intval($_POST['remax_agent_order']));
        }
    }

    // Save Team meta
    if (isset($_POST['remax_team_meta_nonce']) && wp_verify_nonce($_POST['remax_team_meta_nonce'], 'remax_team_meta')) {
        if (isset($_POST['remax_team_role'])) {
            update_post_meta($post_id, '_remax_team_role', sanitize_text_field($_POST['remax_team_role']));
        }
        if (isset($_POST['remax_team_phone'])) {
            update_post_meta($post_id, '_remax_team_phone', sanitize_text_field($_POST['remax_team_phone']));
        }
        if (isset($_POST['remax_team_email'])) {
            update_post_meta($post_id, '_remax_team_email', sanitize_email($_POST['remax_team_email']));
        }
        if (isset($_POST['remax_team_instagram'])) {
            update_post_meta($post_id, '_remax_team_instagram', esc_url_raw($_POST['remax_team_instagram']));
        }
        if (isset($_POST['remax_team_linkedin'])) {
            update_post_meta($post_id, '_remax_team_linkedin', esc_url_raw($_POST['remax_team_linkedin']));
        }
        if (isset($_POST['remax_team_order'])) {
            update_post_meta($post_id, '_remax_team_order', intval($_POST['remax_team_order']));
        }
    }

    // Save Testimonial meta
    if (isset($_POST['remax_testimonial_meta_nonce']) && wp_verify_nonce($_POST['remax_testimonial_meta_nonce'], 'remax_testimonial_meta')) {
        if (isset($_POST['remax_testimonial_role'])) {
            update_post_meta($post_id, '_remax_testimonial_role', sanitize_text_field($_POST['remax_testimonial_role']));
        }
        if (isset($_POST['remax_testimonial_rating'])) {
            update_post_meta($post_id, '_remax_testimonial_rating', intval($_POST['remax_testimonial_rating']));
        }
        if (isset($_POST['remax_testimonial_order'])) {
            update_post_meta($post_id, '_remax_testimonial_order', intval($_POST['remax_testimonial_order']));
        }
    }

    // Save Section meta
    if (isset($_POST['remax_section_meta_nonce']) && wp_verify_nonce($_POST['remax_section_meta_nonce'], 'remax_section_meta')) {
        if (isset($_POST['remax_section_type'])) {
            update_post_meta($post_id, '_remax_section_type', sanitize_text_field($_POST['remax_section_type']));
        }
        if (isset($_POST['remax_section_subtitle'])) {
            update_post_meta($post_id, '_remax_section_subtitle', sanitize_text_field($_POST['remax_section_subtitle']));
        }
        if (isset($_POST['remax_section_order'])) {
            update_post_meta($post_id, '_remax_section_order', intval($_POST['remax_section_order']));
        }
    }
}
add_action('save_post', 'remax_save_meta_boxes');

