# How to Fix "Marketing Services" Not Appearing in WordPress

If you don't see "Marketing Services" in the WordPress admin sidebar, follow these steps:

## Method 1: Deactivate and Reactivate Plugin (Recommended)

1. Go to **Plugins → Installed Plugins**
2. Find **"REMAX Integration"**
3. Click **"Deactivate"**
4. Wait 2 seconds
5. Click **"Activate"** again
6. Check the sidebar - "Marketing Services" should now appear

## Method 2: Flush Rewrite Rules via Permalinks

1. Go to **Settings → Permalinks**
2. Click **"Save Changes"** (don't change anything)
3. This flushes rewrite rules
4. Check the sidebar

## Method 3: Add This Code Temporarily (Advanced)

If the above methods don't work, add this code to your theme's `functions.php` file temporarily:

```php
// Temporary: Flush rewrite rules
add_action('init', function() {
    if (get_option('remax_flush_rewrite_rules') !== '1') {
        flush_rewrite_rules();
        update_option('remax_flush_rewrite_rules', '1');
    }
}, 999);
```

Then remove it after the menu appears.

## Verify It's Working

After doing one of the above methods, check:

1. **WordPress Admin Sidebar**: You should see "Marketing Services" menu item
2. **REST API**: Visit `https://backend.joinremaxex.com/wp-json/wp/v2/marketing-services`
   - Should show `[]` (empty array) or JSON data, NOT a 404 error

## If Still Not Working

1. Check for PHP errors in WordPress debug log
2. Make sure all PHP files are uploaded correctly
3. Verify the plugin is activated
4. Check that `remax-integration.php` is the main plugin file

