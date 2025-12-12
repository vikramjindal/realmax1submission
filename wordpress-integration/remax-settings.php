<?php
/**
 * REMAX Excellence - Settings Page
 * 
 * Adds a settings page for global website settings like carousel speed
 */

// Add settings menu
function remax_add_settings_page() {
    add_options_page(
        'REMAX Settings',
        'REMAX Settings',
        'manage_options',
        'remax-settings',
        'remax_settings_page_callback'
    );
}
add_action('admin_menu', 'remax_add_settings_page');

// Register settings
function remax_register_settings() {
    register_setting('remax_settings_group', 'remax_carousel_speed', array(
        'type' => 'integer',
        'default' => 15,
        'sanitize_callback' => 'absint'
    ));
}
add_action('admin_init', 'remax_register_settings');

// Settings page callback
function remax_settings_page_callback() {
    if (!current_user_can('manage_options')) {
        return;
    }
    
    $carousel_speed = get_option('remax_carousel_speed', 15);
    ?>
    <div class="wrap">
        <h1>REMAX Excellence Settings</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('remax_settings_group');
            do_settings_sections('remax_settings_group');
            ?>
            <table class="form-table">
                <tr>
                    <th scope="row">
                        <label for="remax_carousel_speed">Carousel Speed (seconds)</label>
                    </th>
                    <td>
                        <input 
                            type="number" 
                            id="remax_carousel_speed" 
                            name="remax_carousel_speed" 
                            value="<?php echo esc_attr($carousel_speed); ?>" 
                            min="5" 
                            max="60" 
                            step="1"
                            class="regular-text"
                        />
                        <p class="description">
                            Control the speed of all carousels on the website. Lower numbers = faster speed.
                            <br>
                            <strong>Recommended:</strong> 10-20 seconds. Current: <?php echo esc_html($carousel_speed); ?>s
                        </p>
                    </td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}

// Add REST API endpoint for carousel speed
function remax_register_carousel_speed_endpoint() {
    register_rest_route('remax/v1', '/carousel-speed', array(
        'methods' => 'GET',
        'callback' => 'remax_get_carousel_speed',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'remax_register_carousel_speed_endpoint', 10);

function remax_get_carousel_speed($request) {
    $speed = get_option('remax_carousel_speed', 15);
    return rest_ensure_response(array('speed' => intval($speed)));
}

