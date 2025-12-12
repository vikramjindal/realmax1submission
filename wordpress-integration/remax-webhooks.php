<?php
/**
 * REMAX Excellence - Webhook Handler
 * 
 * This file sends webhooks to Next.js when content is updated
 * Place your Next.js webhook URL in wp-config.php as:
 * define('REMAX_WEBHOOK_URL', 'https://your-nextjs-site.com/api/webhooks/wordpress');
 */

// Send webhook when any custom post type is saved
function remax_send_webhook($post_id, $post, $update) {
    // Only send for our custom post types
    $custom_post_types = array('remax_agent', 'remax_team', 'remax_testimonial', 'remax_section', 'remax_marketing', 'remax_event');
    
    if (!in_array($post->post_type, $custom_post_types) && $post->post_type !== 'post') {
        return;
    }

    // Skip autosaves and revisions
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (wp_is_post_revision($post_id)) {
        return;
    }

    // Only send for published posts
    if ($post->post_status !== 'publish') {
        return;
    }

    // Get webhook URL from config or use default
    $webhook_url = defined('REMAX_WEBHOOK_URL') ? REMAX_WEBHOOK_URL : '';
    
    if (empty($webhook_url)) {
        return; // No webhook URL configured
    }

    // Prepare webhook payload
    $payload = array(
        'action' => $update ? 'updated' : 'created',
        'post_type' => $post->post_type,
        'post_id' => $post_id,
        'timestamp' => current_time('mysql'),
        'site_url' => get_site_url()
    );

    // Send webhook
    $response = wp_remote_post($webhook_url, array(
        'method' => 'POST',
        'timeout' => 5,
        'redirection' => 5,
        'httpversion' => '1.0',
        'blocking' => false, // Don't wait for response
        'headers' => array(
            'Content-Type' => 'application/json',
            'X-WordPress-Webhook' => 'true'
        ),
        'body' => json_encode($payload),
        'cookies' => array()
    ));

    // Log webhook (optional, for debugging)
    if (defined('WP_DEBUG') && WP_DEBUG) {
        error_log('REMAX Webhook sent: ' . print_r($payload, true));
    }
}

// Hook into save_post for all post types
add_action('save_post', 'remax_send_webhook', 10, 3);

// Also send webhook when posts are deleted
function remax_send_delete_webhook($post_id) {
    $post = get_post($post_id);
    
    if (!$post) {
        return;
    }

    $custom_post_types = array('remax_agent', 'remax_team', 'remax_testimonial', 'remax_section', 'remax_marketing', 'remax_event');
    
    if (!in_array($post->post_type, $custom_post_types) && $post->post_type !== 'post') {
        return;
    }

    $webhook_url = defined('REMAX_WEBHOOK_URL') ? REMAX_WEBHOOK_URL : '';
    
    if (empty($webhook_url)) {
        return;
    }

    $payload = array(
        'action' => 'deleted',
        'post_type' => $post->post_type,
        'post_id' => $post_id,
        'timestamp' => current_time('mysql'),
        'site_url' => get_site_url()
    );

    wp_remote_post($webhook_url, array(
        'method' => 'POST',
        'timeout' => 5,
        'blocking' => false,
        'headers' => array(
            'Content-Type' => 'application/json',
            'X-WordPress-Webhook' => 'true'
        ),
        'body' => json_encode($payload)
    ));
}
add_action('before_delete_post', 'remax_send_delete_webhook');

// Send webhook when options are updated (for hero section)
function remax_send_options_webhook($option_name) {
    $hero_options = array(
        'remax_hero_title',
        'remax_hero_subtitle',
        'remax_hero_description',
        'remax_hero_stats',
        'remax_hero_stats_subtext',
        'remax_hero_background',
        'remax_hero_cta_text'
    );

    if (!in_array($option_name, $hero_options)) {
        return;
    }

    $webhook_url = defined('REMAX_WEBHOOK_URL') ? REMAX_WEBHOOK_URL : '';
    
    if (empty($webhook_url)) {
        return;
    }

    $payload = array(
        'action' => 'option_updated',
        'option_name' => $option_name,
        'timestamp' => current_time('mysql'),
        'site_url' => get_site_url()
    );

    wp_remote_post($webhook_url, array(
        'method' => 'POST',
        'timeout' => 5,
        'blocking' => false,
        'headers' => array(
            'Content-Type' => 'application/json',
            'X-WordPress-Webhook' => 'true'
        ),
        'body' => json_encode($payload)
    ));
}
add_action('updated_option', 'remax_send_options_webhook');

// Add admin page for hero section settings
function remax_add_hero_settings_page() {
    add_options_page(
        'REMAX Hero Settings',
        'REMAX Hero',
        'manage_options',
        'remax-hero-settings',
        'remax_hero_settings_callback'
    );
}
add_action('admin_menu', 'remax_add_hero_settings_page');

function remax_hero_settings_callback() {
    if (isset($_POST['remax_save_hero']) && check_admin_referer('remax_hero_settings')) {
        update_option('remax_hero_title', sanitize_text_field($_POST['remax_hero_title']));
        update_option('remax_hero_subtitle', sanitize_text_field($_POST['remax_hero_subtitle']));
        update_option('remax_hero_description', sanitize_textarea_field($_POST['remax_hero_description']));
        update_option('remax_hero_stats', sanitize_text_field($_POST['remax_hero_stats']));
        update_option('remax_hero_stats_subtext', sanitize_text_field($_POST['remax_hero_stats_subtext']));
        update_option('remax_hero_background', esc_url_raw($_POST['remax_hero_background']));
        update_option('remax_hero_cta_text', sanitize_text_field($_POST['remax_hero_cta_text']));
        echo '<div class="notice notice-success"><p>Hero settings saved!</p></div>';
    }

    $title = get_option('remax_hero_title', 'REMAX');
    $subtitle = get_option('remax_hero_subtitle', 'EXCELLENCE');
    $description = get_option('remax_hero_description', 'One of the Youngest, Fastest-Growing Real Estate Brokerage');
    $stats = get_option('remax_hero_stats', '120+ Motivated Agents');
    $stats_subtext = get_option('remax_hero_stats_subtext', 'Growing daily');
    $background = get_option('remax_hero_background', '');
    $cta_text = get_option('remax_hero_cta_text', 'Join Our Team');
    ?>
    <div class="wrap">
        <h1>REMAX Hero Section Settings</h1>
        <form method="post" action="">
            <?php wp_nonce_field('remax_hero_settings'); ?>
            <table class="form-table">
                <tr>
                    <th><label for="remax_hero_title">Title</label></th>
                    <td><input type="text" id="remax_hero_title" name="remax_hero_title" value="<?php echo esc_attr($title); ?>" class="regular-text" /></td>
                </tr>
                <tr>
                    <th><label for="remax_hero_subtitle">Subtitle</label></th>
                    <td><input type="text" id="remax_hero_subtitle" name="remax_hero_subtitle" value="<?php echo esc_attr($subtitle); ?>" class="regular-text" /></td>
                </tr>
                <tr>
                    <th><label for="remax_hero_description">Description</label></th>
                    <td><textarea id="remax_hero_description" name="remax_hero_description" rows="3" class="large-text"><?php echo esc_textarea($description); ?></textarea></td>
                </tr>
                <tr>
                    <th><label for="remax_hero_stats">Stats Text</label></th>
                    <td><input type="text" id="remax_hero_stats" name="remax_hero_stats" value="<?php echo esc_attr($stats); ?>" class="regular-text" /></td>
                </tr>
                <tr>
                    <th><label for="remax_hero_stats_subtext">Stats Subtext</label></th>
                    <td><input type="text" id="remax_hero_stats_subtext" name="remax_hero_stats_subtext" value="<?php echo esc_attr($stats_subtext); ?>" class="regular-text" /></td>
                </tr>
                <tr>
                    <th><label for="remax_hero_background">Background Image URL</label></th>
                    <td><input type="url" id="remax_hero_background" name="remax_hero_background" value="<?php echo esc_url($background); ?>" class="regular-text" /></td>
                </tr>
                <tr>
                    <th><label for="remax_hero_cta_text">CTA Button Text</label></th>
                    <td><input type="text" id="remax_hero_cta_text" name="remax_hero_cta_text" value="<?php echo esc_attr($cta_text); ?>" class="regular-text" /></td>
                </tr>
            </table>
            <?php submit_button('Save Settings', 'primary', 'remax_save_hero'); ?>
        </form>
    </div>
    <?php
}

