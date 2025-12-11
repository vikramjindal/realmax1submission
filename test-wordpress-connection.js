/**
 * Quick test script to check WordPress REST API connection
 * Run with: node test-wordpress-connection.js
 */

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || '';

if (!WORDPRESS_URL) {
  console.log('❌ NEXT_PUBLIC_WORDPRESS_URL is not set in .env.local');
  console.log('Please add: NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com');
  process.exit(1);
}

console.log('Testing WordPress connection...');
console.log('WordPress URL:', WORDPRESS_URL);

async function testConnection() {
  try {
    // Test 1: Check if REST API is accessible
    console.log('\n1. Testing REST API base...');
    const baseResponse = await fetch(`${WORDPRESS_URL}/wp-json/`);
    if (baseResponse.ok) {
      console.log('✅ REST API is accessible');
    } else {
      console.log('❌ REST API returned:', baseResponse.status);
      return;
    }

    // Test 2: Check agents endpoint
    console.log('\n2. Testing agents endpoint...');
    const agentsResponse = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/agents?_embed`);
    if (agentsResponse.ok) {
      const agents = await agentsResponse.json();
      console.log(`✅ Agents endpoint works (found ${agents.length} agents)`);
    } else {
      console.log('⚠️  Agents endpoint returned:', agentsResponse.status);
      console.log('   This is normal if custom post types are not set up yet');
    }

    // Test 3: Check team members endpoint
    console.log('\n3. Testing team members endpoint...');
    const teamResponse = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/team-members?_embed`);
    if (teamResponse.ok) {
      const team = await teamResponse.json();
      console.log(`✅ Team members endpoint works (found ${team.length} members)`);
    } else {
      console.log('⚠️  Team members endpoint returned:', teamResponse.status);
    }

    // Test 4: Check hero endpoint
    console.log('\n4. Testing hero endpoint...');
    const heroResponse = await fetch(`${WORDPRESS_URL}/wp-json/remax/v1/hero`);
    if (heroResponse.ok) {
      const hero = await heroResponse.json();
      console.log('✅ Hero endpoint works');
      console.log('   Hero data:', JSON.stringify(hero, null, 2));
    } else {
      console.log('⚠️  Hero endpoint returned:', heroResponse.status);
      console.log('   Make sure remax-rest-api.php is loaded in WordPress');
    }

    // Test 5: Check blog posts
    console.log('\n5. Testing blog posts endpoint...');
    const postsResponse = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=1`);
    if (postsResponse.ok) {
      const posts = await postsResponse.json();
      console.log(`✅ Blog posts endpoint works (found ${posts.length} posts)`);
    } else {
      console.log('⚠️  Blog posts endpoint returned:', postsResponse.status);
    }

    console.log('\n✅ All tests completed!');
    console.log('\nNext steps:');
    console.log('1. If endpoints return 404, make sure PHP files are loaded in WordPress');
    console.log('2. Add content in WordPress admin (Agents, Team Members, etc.)');
    console.log('3. Restart Next.js dev server: npm run dev');

  } catch (error) {
    console.error('\n❌ Connection error:', error.message);
    console.log('\nTroubleshooting:');
    console.log('1. Check if WordPress URL is correct');
    console.log('2. Check if WordPress site is accessible');
    console.log('3. Check if REST API is enabled in WordPress');
  }
}

testConnection();

