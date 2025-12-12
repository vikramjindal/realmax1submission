<?php
/**
 * Debug Registration
 * This will show us exactly what's happening
 */

require_once('wp-load.php');

echo "<h1>Debug Registration</h1>";
echo "<pre>";

// Check if function exists
echo "1. Checking if function exists...\n";
if (function_exists('remax_register_custom_post_types')) {
    echo "   ✓ Function exists\n";
} else {
    echo "   ✗ Function NOT found!\n";
    echo "   Plugin may not be loading correctly.\n";
    exit;
}

// Try to register
echo "\n2. Attempting to register post types...\n";
try {
    remax_register_custom_post_types();
    echo "   ✓ Function executed without errors\n";
} catch (Exception $e) {
    echo "   ✗ Error: " . $e->getMessage() . "\n";
    exit;
}

// Check all post types
echo "\n3. Checking registered post types:\n";
$post_types = get_post_types(array('public' => true), 'names');
$remax_types = array_filter($post_types, function($type) {
    return strpos($type, 'remax_') === 0;
});

foreach ($remax_types as $type) {
    echo "   ✓ {$type}\n";
}

// Specifically check marketing_service
echo "\n4. Checking remax_marketing_service:\n";
if (post_type_exists('remax_marketing_service')) {
    echo "   ✓ REGISTERED!\n";
    $obj = get_post_type_object('remax_marketing_service');
    echo "   REST Base: " . ($obj->rest_base ?? 'N/A') . "\n";
    echo "   Show in REST: " . ($obj->show_in_rest ? 'Yes' : 'No') . "\n";
} else {
    echo "   ✗ NOT REGISTERED\n";
    
    // Try to register it manually
    echo "\n5. Attempting manual registration...\n";
    $result = register_post_type('remax_marketing_service', array(
        'labels' => array(
            'name' => 'Marketing Services',
            'singular_name' => 'Marketing Service',
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'rest_base' => 'marketing-services',
        'menu_icon' => 'dashicons-admin-tools',
        'supports' => array('title', 'thumbnail', 'editor'),
    ));
    
    if ($result instanceof WP_Error) {
        echo "   ✗ Registration failed: " . $result->get_error_message() . "\n";
    } else {
        echo "   ✓ Manual registration successful!\n";
        flush_rewrite_rules();
    }
}

// Check for PHP errors
echo "\n6. PHP Error Check:\n";
$error_log = ini_get('error_log');
if ($error_log && file_exists($error_log)) {
    $errors = file_get_contents($error_log);
    $recent_errors = array_slice(explode("\n", $errors), -10);
    echo "   Recent errors:\n";
    foreach ($recent_errors as $error) {
        if (strpos($error, 'remax') !== false || strpos($error, 'marketing') !== false) {
            echo "   - " . htmlspecialchars($error) . "\n";
        }
    }
} else {
    echo "   No error log found or not configured\n";
}

echo "</pre>";

