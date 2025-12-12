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

    // 4. Marketing Materials (for marketing page carousel)
    register_post_type('remax_marketing', array(
        'labels' => array(
            'name' => 'Marketing Materials',
            'singular_name' => 'Marketing Material',
            'add_new' => 'Add New Material',
            'add_new_item' => 'Add New Marketing Material',
            'edit_item' => 'Edit Marketing Material',
            'new_item' => 'New Marketing Material',
            'view_item' => 'View Marketing Material',
            'search_items' => 'Search Marketing Materials',
            'not_found' => 'No marketing materials found',
            'not_found_in_trash' => 'No marketing materials found in Trash'
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'rest_base' => 'marketing-materials',
        'menu_icon' => 'dashicons-format-image',
        'supports' => array('title', 'thumbnail', 'editor'),
        'menu_position' => 24
    ));

    // 5. Events (for events page)
    register_post_type('remax_event', array(
        'labels' => array(
            'name' => 'Events',
            'singular_name' => 'Event',
            'add_new' => 'Add New Event',
            'add_new_item' => 'Add New Event',
            'edit_item' => 'Edit Event',
            'new_item' => 'New Event',
            'view_item' => 'View Event',
            'search_items' => 'Search Events',
            'not_found' => 'No events found',
            'not_found_in_trash' => 'No events found in Trash'
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'rest_base' => 'events',
        'menu_icon' => 'dashicons-calendar-alt',
        'supports' => array('title', 'thumbnail', 'editor'),
        'menu_position' => 23
    ));

    // 6. Past Events (for events page highlights)
    register_post_type('remax_past_event', array(
        'labels' => array(
            'name' => 'Past Events',
            'singular_name' => 'Past Event',
            'add_new' => 'Add New Past Event',
            'add_new_item' => 'Add New Past Event',
            'edit_item' => 'Edit Past Event',
            'new_item' => 'New Past Event',
            'view_item' => 'View Past Event',
            'search_items' => 'Search Past Events',
            'not_found' => 'No past events found',
            'not_found_in_trash' => 'No past events found in Trash'
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'rest_base' => 'past-events',
        'menu_icon' => 'dashicons-calendar',
        'supports' => array('title', 'thumbnail', 'editor'),
        'menu_position' => 24
    ));

    // 7. Training Materials (for training page carousel)
    register_post_type('remax_training', array(
        'labels' => array(
            'name' => 'Training Materials',
            'singular_name' => 'Training Material',
            'add_new' => 'Add New Material',
            'add_new_item' => 'Add New Training Material',
            'edit_item' => 'Edit Training Material',
            'new_item' => 'New Training Material',
            'view_item' => 'View Training Material',
            'search_items' => 'Search Training Materials',
            'not_found' => 'No training materials found',
            'not_found_in_trash' => 'No training materials found in Trash'
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'rest_base' => 'training-materials',
        'menu_icon' => 'dashicons-welcome-learn-more',
        'supports' => array('title', 'thumbnail', 'editor'),
        'menu_position' => 25
    ));

    // 8. Page Sections (for homepage sections)
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

    // Marketing material meta box
    add_meta_box(
        'remax_marketing_meta',
        'Marketing Material Information',
        'remax_marketing_meta_callback',
        'remax_marketing',
        'normal',
        'high'
    );

    // Event meta box
    add_meta_box(
        'remax_event_meta',
        'Event Information',
        'remax_event_meta_callback',
        'remax_event',
        'normal',
        'high'
    );

    // Past Event meta box
    add_meta_box(
        'remax_past_event_meta',
        'Past Event Information',
        'remax_past_event_meta_callback',
        'remax_past_event',
        'normal',
        'high'
    );

    // Training material meta box
    add_meta_box(
        'remax_training_meta',
        'Training Material Information',
        'remax_training_meta_callback',
        'remax_training',
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

// Marketing material meta box callback
function remax_marketing_meta_callback($post) {
    wp_nonce_field('remax_marketing_meta', 'remax_marketing_meta_nonce');
    
    $marketing_order = get_post_meta($post->ID, '_remax_marketing_order', true);
    $marketing_image_url = get_post_meta($post->ID, '_remax_marketing_image_url', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="remax_marketing_image_url">Image URL (Optional)</label></th>';
    echo '<td>';
    echo '<input type="url" id="remax_marketing_image_url" name="remax_marketing_image_url" value="' . esc_url($marketing_image_url) . '" class="regular-text" />';
    echo '<p class="description">If you want to use an external image URL instead of featured image. Leave empty to use featured image.</p>';
    echo '</td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_marketing_order">Display Order</label></th>';
    echo '<td><input type="number" id="remax_marketing_order" name="remax_marketing_order" value="' . esc_attr($marketing_order ? $marketing_order : '0') . '" class="small-text" /><p class="description">Lower numbers appear first</p></td>';
    echo '</tr>';
    echo '</table>';
    echo '<p><strong>Note:</strong> Set a Featured Image for this marketing material. The image will be used in the carousel.</p>';
}

// Event meta box callback
function remax_event_meta_callback($post) {
    wp_nonce_field('remax_event_meta', 'remax_event_meta_nonce');
    
    $event_date = get_post_meta($post->ID, '_remax_event_date', true);
    $event_time = get_post_meta($post->ID, '_remax_event_time', true);
    $event_location = get_post_meta($post->ID, '_remax_event_location', true);
    $event_attendees = get_post_meta($post->ID, '_remax_event_attendees', true);
    $event_type = get_post_meta($post->ID, '_remax_event_type', true);
    $event_type_color = get_post_meta($post->ID, '_remax_event_type_color', true);
    $event_order = get_post_meta($post->ID, '_remax_event_order', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="remax_event_date">Event Date</label></th>';
    echo '<td><input type="text" id="remax_event_date" name="remax_event_date" value="' . esc_attr($event_date) . '" class="regular-text" placeholder="e.g., December 15, 2024" /><p class="description">Format: Month Day, Year (e.g., December 15, 2024)</p></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_event_time">Event Time</label></th>';
    echo '<td><input type="text" id="remax_event_time" name="remax_event_time" value="' . esc_attr($event_time) . '" class="regular-text" placeholder="e.g., 6:00 PM - 9:00 PM" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_event_location">Location</label></th>';
    echo '<td><input type="text" id="remax_event_location" name="remax_event_location" value="' . esc_attr($event_location) . '" class="regular-text" placeholder="e.g., Downtown Toronto" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_event_attendees">Expected Attendees</label></th>';
    echo '<td><input type="text" id="remax_event_attendees" name="remax_event_attendees" value="' . esc_attr($event_attendees) . '" class="regular-text" placeholder="e.g., 50+" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_event_type">Event Type</label></th>';
    echo '<td>';
    echo '<select id="remax_event_type" name="remax_event_type" class="regular-text">';
    echo '<option value="Networking"' . selected($event_type, 'Networking', false) . '>Networking</option>';
    echo '<option value="Education"' . selected($event_type, 'Education', false) . '>Education</option>';
    echo '<option value="Conference"' . selected($event_type, 'Conference', false) . '>Conference</option>';
    echo '<option value="Workshop"' . selected($event_type, 'Workshop', false) . '>Workshop</option>';
    echo '<option value="Seminar"' . selected($event_type, 'Seminar', false) . '>Seminar</option>';
    echo '</select>';
    echo '</td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_event_type_color">Type Color</label></th>';
    echo '<td>';
    echo '<select id="remax_event_type_color" name="remax_event_type_color" class="regular-text">';
    echo '<option value="red"' . selected($event_type_color, 'red', false) . '>Red</option>';
    echo '<option value="blue"' . selected($event_type_color, 'blue', false) . '>Blue</option>';
    echo '</select>';
    echo '<p class="description">Color for the event type badge</p>';
    echo '</td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_event_order">Display Order</label></th>';
    echo '<td><input type="number" id="remax_event_order" name="remax_event_order" value="' . esc_attr($event_order ? $event_order : '0') . '" class="small-text" /><p class="description">Lower numbers appear first</p></td>';
    echo '</tr>';
    echo '</table>';
    echo '<p><strong>Note:</strong> The event description should be entered in the main content editor above. The title will be used as the event title.</p>';
}

// Past Event meta box callback
function remax_past_event_meta_callback($post) {
    wp_nonce_field('remax_past_event_meta', 'remax_past_event_meta_nonce');
    
    $past_event_date = get_post_meta($post->ID, '_remax_past_event_date', true);
    $past_event_attendees = get_post_meta($post->ID, '_remax_past_event_attendees', true);
    $past_event_highlights = get_post_meta($post->ID, '_remax_past_event_highlights', true);
    $past_event_order = get_post_meta($post->ID, '_remax_past_event_order', true);
    
    // Highlights stored as newline-separated string
    $highlights_text = is_array($past_event_highlights) 
        ? implode("\n", $past_event_highlights) 
        : ($past_event_highlights ? $past_event_highlights : '');
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="remax_past_event_date">Event Date</label></th>';
    echo '<td><input type="text" id="remax_past_event_date" name="remax_past_event_date" value="' . esc_attr($past_event_date) . '" class="regular-text" placeholder="e.g., October 2024" /><p class="description">Format: Month Year (e.g., October 2024)</p></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_past_event_attendees">Attendees</label></th>';
    echo '<td><input type="text" id="remax_past_event_attendees" name="remax_past_event_attendees" value="' . esc_attr($past_event_attendees) . '" class="regular-text" placeholder="e.g., 150+" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_past_event_highlights">Event Highlights</label></th>';
    echo '<td>';
    echo '<textarea id="remax_past_event_highlights" name="remax_past_event_highlights" rows="6" class="large-text">' . esc_textarea($highlights_text) . '</textarea>';
    echo '<p class="description">Enter each highlight on a new line. For example:<br>Keynote from industry leader<br>Speed networking sessions<br>Award ceremony<br>Live entertainment</p>';
    echo '</td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_past_event_order">Display Order</label></th>';
    echo '<td><input type="number" id="remax_past_event_order" name="remax_past_event_order" value="' . esc_attr($past_event_order ? $past_event_order : '0') . '" class="small-text" /><p class="description">Lower numbers appear first</p></td>';
    echo '</tr>';
    echo '</table>';
    echo '<p><strong>Note:</strong> Set a Featured Image for this past event. The image will be displayed in the highlights section.</p>';
}

// Training material meta box callback
function remax_training_meta_callback($post) {
    wp_nonce_field('remax_training_meta', 'remax_training_meta_nonce');
    
    $training_order = get_post_meta($post->ID, '_remax_training_order', true);
    $training_image_url = get_post_meta($post->ID, '_remax_training_image_url', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="remax_training_image_url">Image URL (Optional)</label></th>';
    echo '<td>';
    echo '<input type="url" id="remax_training_image_url" name="remax_training_image_url" value="' . esc_url($training_image_url) . '" class="regular-text" />';
    echo '<p class="description">If you want to use an external image URL instead of featured image. Leave empty to use featured image.</p>';
    echo '</td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="remax_training_order">Display Order</label></th>';
    echo '<td><input type="number" id="remax_training_order" name="remax_training_order" value="' . esc_attr($training_order ? $training_order : '0') . '" class="small-text" /><p class="description">Lower numbers appear first</p></td>';
    echo '</tr>';
    echo '</table>';
    echo '<p><strong>Note:</strong> Set a Featured Image for this training material. The image will be used in the carousel.</p>';
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

    // Save Marketing meta
    if (isset($_POST['remax_marketing_meta_nonce']) && wp_verify_nonce($_POST['remax_marketing_meta_nonce'], 'remax_marketing_meta')) {
        if (isset($_POST['remax_marketing_image_url'])) {
            update_post_meta($post_id, '_remax_marketing_image_url', esc_url_raw($_POST['remax_marketing_image_url']));
        }
        if (isset($_POST['remax_marketing_order'])) {
            update_post_meta($post_id, '_remax_marketing_order', intval($_POST['remax_marketing_order']));
        }
    }

    // Save Event meta
    if (isset($_POST['remax_event_meta_nonce']) && wp_verify_nonce($_POST['remax_event_meta_nonce'], 'remax_event_meta')) {
        if (isset($_POST['remax_event_date'])) {
            update_post_meta($post_id, '_remax_event_date', sanitize_text_field($_POST['remax_event_date']));
        }
        if (isset($_POST['remax_event_time'])) {
            update_post_meta($post_id, '_remax_event_time', sanitize_text_field($_POST['remax_event_time']));
        }
        if (isset($_POST['remax_event_location'])) {
            update_post_meta($post_id, '_remax_event_location', sanitize_text_field($_POST['remax_event_location']));
        }
        if (isset($_POST['remax_event_attendees'])) {
            update_post_meta($post_id, '_remax_event_attendees', sanitize_text_field($_POST['remax_event_attendees']));
        }
        if (isset($_POST['remax_event_type'])) {
            update_post_meta($post_id, '_remax_event_type', sanitize_text_field($_POST['remax_event_type']));
        }
        if (isset($_POST['remax_event_type_color'])) {
            update_post_meta($post_id, '_remax_event_type_color', sanitize_text_field($_POST['remax_event_type_color']));
        }
        if (isset($_POST['remax_event_order'])) {
            update_post_meta($post_id, '_remax_event_order', intval($_POST['remax_event_order']));
        }
    }

    // Save Past Event meta
    if (isset($_POST['remax_past_event_meta_nonce']) && wp_verify_nonce($_POST['remax_past_event_meta_nonce'], 'remax_past_event_meta')) {
        if (isset($_POST['remax_past_event_date'])) {
            update_post_meta($post_id, '_remax_past_event_date', sanitize_text_field($_POST['remax_past_event_date']));
        }
        if (isset($_POST['remax_past_event_attendees'])) {
            update_post_meta($post_id, '_remax_past_event_attendees', sanitize_text_field($_POST['remax_past_event_attendees']));
        }
        if (isset($_POST['remax_past_event_highlights'])) {
            // Store highlights as newline-separated string
            $highlights = sanitize_textarea_field($_POST['remax_past_event_highlights']);
            update_post_meta($post_id, '_remax_past_event_highlights', $highlights);
        }
        if (isset($_POST['remax_past_event_order'])) {
            update_post_meta($post_id, '_remax_past_event_order', intval($_POST['remax_past_event_order']));
        }
    }

    // Save Training meta
    if (isset($_POST['remax_training_meta_nonce']) && wp_verify_nonce($_POST['remax_training_meta_nonce'], 'remax_training_meta')) {
        if (isset($_POST['remax_training_image_url'])) {
            update_post_meta($post_id, '_remax_training_image_url', esc_url_raw($_POST['remax_training_image_url']));
        }
        if (isset($_POST['remax_training_order'])) {
            update_post_meta($post_id, '_remax_training_order', intval($_POST['remax_training_order']));
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

    // Save Marketing meta
    if (isset($_POST['remax_marketing_meta_nonce']) && wp_verify_nonce($_POST['remax_marketing_meta_nonce'], 'remax_marketing_meta')) {
        if (isset($_POST['remax_marketing_image_url'])) {
            update_post_meta($post_id, '_remax_marketing_image_url', esc_url_raw($_POST['remax_marketing_image_url']));
        }
        if (isset($_POST['remax_marketing_order'])) {
            update_post_meta($post_id, '_remax_marketing_order', intval($_POST['remax_marketing_order']));
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

