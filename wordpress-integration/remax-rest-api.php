<?php
/**
 * REMAX Excellence - Custom REST API Endpoints
 * 
 * This file extends WordPress REST API to include custom fields in responses
 * and adds custom endpoints for homepage content
 */

// Add custom fields to REST API responses
function remax_register_rest_fields() {
    // Agents
    register_rest_field('remax_agent', 'agent_name', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_agent_name', true);
        },
        'update_callback' => null,
        'schema' => array(
            'type' => 'string',
            'description' => 'Agent name',
            'context' => array('view', 'edit')
        )
    ));

    register_rest_field('remax_agent', 'agent_order', array(
        'get_callback' => function($post) {
            return intval(get_post_meta($post['id'], '_remax_agent_order', true));
        },
        'update_callback' => null,
        'schema' => array(
            'type' => 'integer',
            'description' => 'Display order',
            'context' => array('view', 'edit')
        )
    ));

    // Team Members
    register_rest_field('remax_team', 'team_role', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_team_role', true);
        }
    ));

    register_rest_field('remax_team', 'team_phone', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_team_phone', true);
        }
    ));

    register_rest_field('remax_team', 'team_email', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_team_email', true);
        }
    ));

    register_rest_field('remax_team', 'team_instagram', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_team_instagram', true);
        }
    ));

    register_rest_field('remax_team', 'team_linkedin', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_team_linkedin', true);
        }
    ));

    register_rest_field('remax_team', 'team_order', array(
        'get_callback' => function($post) {
            return intval(get_post_meta($post['id'], '_remax_team_order', true));
        }
    ));

    // Testimonials
    register_rest_field('remax_testimonial', 'testimonial_role', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_testimonial_role', true);
        }
    ));

    register_rest_field('remax_testimonial', 'testimonial_rating', array(
        'get_callback' => function($post) {
            return intval(get_post_meta($post['id'], '_remax_testimonial_rating', true) ?: 5);
        }
    ));

    register_rest_field('remax_testimonial', 'testimonial_order', array(
        'get_callback' => function($post) {
            return intval(get_post_meta($post['id'], '_remax_testimonial_order', true));
        }
    ));

    // Marketing Materials
    register_rest_field('remax_marketing', 'marketing_image_url', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_marketing_image_url', true);
        }
    ));

    register_rest_field('remax_marketing', 'marketing_order', array(
        'get_callback' => function($post) {
            return intval(get_post_meta($post['id'], '_remax_marketing_order', true));
        }
    ));

    // Events
    register_rest_field('remax_event', 'event_date', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_event_date', true);
        }
    ));

    register_rest_field('remax_event', 'event_time', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_event_time', true);
        }
    ));

    register_rest_field('remax_event', 'event_location', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_event_location', true);
        }
    ));

    register_rest_field('remax_event', 'event_attendees', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_event_attendees', true);
        }
    ));

    register_rest_field('remax_event', 'event_type', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_event_type', true);
        }
    ));

    register_rest_field('remax_event', 'event_type_color', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_event_type_color', true);
        }
    ));

    register_rest_field('remax_event', 'event_order', array(
        'get_callback' => function($post) {
            return intval(get_post_meta($post['id'], '_remax_event_order', true));
        }
    ));

    // Past Events
    register_rest_field('remax_past_event', 'past_event_date', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_past_event_date', true);
        }
    ));

    register_rest_field('remax_past_event', 'past_event_attendees', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_past_event_attendees', true);
        }
    ));

    register_rest_field('remax_past_event', 'past_event_highlights', array(
        'get_callback' => function($post) {
            $highlights = get_post_meta($post['id'], '_remax_past_event_highlights', true);
            // Convert newline-separated string to array
            if (is_string($highlights) && !empty($highlights)) {
                return array_filter(array_map('trim', explode("\n", $highlights)));
            }
            return array();
        }
    ));

    register_rest_field('remax_past_event', 'past_event_order', array(
        'get_callback' => function($post) {
            return intval(get_post_meta($post['id'], '_remax_past_event_order', true));
        }
    ));

    // Training Materials
    register_rest_field('remax_training', 'training_image_url', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_training_image_url', true);
        }
    ));

    register_rest_field('remax_training', 'training_order', array(
        'get_callback' => function($post) {
            return intval(get_post_meta($post['id'], '_remax_training_order', true));
        }
    ));

    // Marketing Services
    register_rest_field('remax_marketing_service', 'service_media_type', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_service_media_type', true) ?: 'image';
        }
    ));

    register_rest_field('remax_marketing_service', 'service_media_url', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_service_media_url', true);
        }
    ));

    register_rest_field('remax_marketing_service', 'service_order', array(
        'get_callback' => function($post) {
            return intval(get_post_meta($post['id'], '_remax_service_order', true));
        }
    ));

    // Sections
    register_rest_field('remax_section', 'section_type', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_section_type', true);
        }
    ));

    register_rest_field('remax_section', 'section_subtitle', array(
        'get_callback' => function($post) {
            return get_post_meta($post['id'], '_remax_section_subtitle', true);
        }
    ));

    register_rest_field('remax_section', 'section_order', array(
        'get_callback' => function($post) {
            return intval(get_post_meta($post['id'], '_remax_section_order', true));
        }
    ));
}
add_action('rest_api_init', 'remax_register_rest_fields');

// Custom endpoint for homepage hero section
function remax_register_hero_endpoint() {
    register_rest_route('remax/v1', '/hero', array(
        'methods' => 'GET',
        'callback' => 'remax_get_hero_data',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'remax_register_hero_endpoint');

function remax_get_hero_data() {
    // Get hero data from options or a specific page
    $hero_data = array(
        'title' => get_option('remax_hero_title', 'REMAX'),
        'subtitle' => get_option('remax_hero_subtitle', 'EXCELLENCE'),
        'description' => get_option('remax_hero_description', 'One of the Youngest, Fastest-Growing Real Estate Brokerage'),
        'stats_text' => get_option('remax_hero_stats', '120+ Motivated Agents'),
        'stats_subtext' => get_option('remax_hero_stats_subtext', 'Growing daily'),
        'background_image' => get_option('remax_hero_background', ''),
        'cta_text' => get_option('remax_hero_cta_text', 'Join Our Team')
    );
    
    return rest_ensure_response($hero_data);
}

// Custom endpoint for homepage sections
function remax_register_sections_endpoint() {
    register_rest_route('remax/v1', '/homepage-sections', array(
        'methods' => 'GET',
        'callback' => 'remax_get_homepage_sections',
        'permission_callback' => '__return_true'
    ));
}
add_action('rest_api_init', 'remax_register_sections_endpoint');

function remax_get_homepage_sections() {
    $sections = get_posts(array(
        'post_type' => 'remax_section',
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'orderby' => 'meta_value_num',
        'meta_key' => '_remax_section_order',
        'order' => 'ASC'
    ));
    
    $formatted_sections = array();
    foreach ($sections as $section) {
        $formatted_sections[] = array(
            'id' => $section->ID,
            'title' => $section->post_title,
            'content' => $section->post_content,
            'type' => get_post_meta($section->ID, '_remax_section_type', true),
            'subtitle' => get_post_meta($section->ID, '_remax_section_subtitle', true),
            'featured_image' => get_the_post_thumbnail_url($section->ID, 'full')
        );
    }
    
    return rest_ensure_response($formatted_sections);
}

// Enable CORS for REST API (if needed)
function remax_add_cors_support() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Headers: Authorization, Content-Type');
        return $value;
    });
}
add_action('rest_api_init', 'remax_add_cors_support', 15);

