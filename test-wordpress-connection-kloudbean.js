/**
 * Test WordPress Connection for KloudBean Setup
 * Run: node test-wordpress-connection-kloudbean.js
 */

const WORDPRESS_URL = 'https://backend.joinremaxex.com';

console.log('🔍 Testing WordPress Connection...');
console.log('WordPress URL:', WORDPRESS_URL);
console.log('');

async function testConnection() {
  const results = {
    passed: [],
    failed: [],
    warnings: []
  };

  try {
    // Test 1: REST API Base
    console.log('1️⃣  Testing REST API base...');
    try {
      const baseResponse = await fetch(`${WORDPRESS_URL}/wp-json/`);
      if (baseResponse.ok) {
        const data = await baseResponse.json();
        console.log('   ✅ REST API is accessible');
        console.log('   📝 WordPress Name:', data.name || 'N/A');
        results.passed.push('REST API Base');
      } else {
        console.log('   ❌ REST API returned:', baseResponse.status);
        results.failed.push('REST API Base');
        return results;
      }
    } catch (error) {
      console.log('   ❌ Error:', error.message);
      results.failed.push('REST API Base');
      return results;
    }

    // Test 2: Agents Endpoint
    console.log('\n2️⃣  Testing agents endpoint...');
    try {
      const agentsResponse = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/agents?_embed`);
      if (agentsResponse.ok) {
        const agents = await agentsResponse.json();
        console.log(`   ✅ Agents endpoint works`);
        console.log(`   📊 Found ${agents.length} agents`);
        if (agents.length > 0) {
          console.log('   📝 Sample agent:', agents[0].title?.rendered || 'N/A');
        }
        results.passed.push('Agents Endpoint');
      } else if (agentsResponse.status === 404) {
        console.log('   ⚠️  Agents endpoint not found (404)');
        console.log('   💡 This is normal if custom post types are not set up yet');
        console.log('   💡 Upload PHP files and activate plugin');
        results.warnings.push('Agents Endpoint - Not set up yet');
      } else {
        console.log('   ❌ Agents endpoint returned:', agentsResponse.status);
        results.failed.push('Agents Endpoint');
      }
    } catch (error) {
      console.log('   ❌ Error:', error.message);
      results.warnings.push('Agents Endpoint - Connection error');
    }

    // Test 3: Team Members Endpoint
    console.log('\n3️⃣  Testing team members endpoint...');
    try {
      const teamResponse = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/team-members?_embed`);
      if (teamResponse.ok) {
        const team = await teamResponse.json();
        console.log(`   ✅ Team members endpoint works`);
        console.log(`   📊 Found ${team.length} team members`);
        results.passed.push('Team Members Endpoint');
      } else if (teamResponse.status === 404) {
        console.log('   ⚠️  Team members endpoint not found (404)');
        console.log('   💡 Upload PHP files and activate plugin');
        results.warnings.push('Team Members Endpoint - Not set up yet');
      } else {
        console.log('   ⚠️  Team members endpoint returned:', teamResponse.status);
        results.warnings.push('Team Members Endpoint');
      }
    } catch (error) {
      console.log('   ⚠️  Error:', error.message);
      results.warnings.push('Team Members Endpoint');
    }

    // Test 4: Hero Endpoint
    console.log('\n4️⃣  Testing hero endpoint...');
    try {
      const heroResponse = await fetch(`${WORDPRESS_URL}/wp-json/remax/v1/hero`);
      if (heroResponse.ok) {
        const hero = await heroResponse.json();
        console.log('   ✅ Hero endpoint works');
        console.log('   📝 Hero data:', JSON.stringify(hero, null, 2));
        results.passed.push('Hero Endpoint');
      } else if (heroResponse.status === 404) {
        console.log('   ⚠️  Hero endpoint not found (404)');
        console.log('   💡 Make sure remax-rest-api.php is loaded');
        results.warnings.push('Hero Endpoint - Not set up yet');
      } else {
        console.log('   ⚠️  Hero endpoint returned:', heroResponse.status);
        results.warnings.push('Hero Endpoint');
      }
    } catch (error) {
      console.log('   ⚠️  Error:', error.message);
      results.warnings.push('Hero Endpoint');
    }

    // Test 5: Blog Posts
    console.log('\n5️⃣  Testing blog posts endpoint...');
    try {
      const postsResponse = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=1`);
      if (postsResponse.ok) {
        const posts = await postsResponse.json();
        console.log(`   ✅ Blog posts endpoint works`);
        console.log(`   📊 Found ${posts.length} posts`);
        results.passed.push('Blog Posts Endpoint');
      } else {
        console.log('   ⚠️  Blog posts endpoint returned:', postsResponse.status);
        results.warnings.push('Blog Posts Endpoint');
      }
    } catch (error) {
      console.log('   ⚠️  Error:', error.message);
      results.warnings.push('Blog Posts Endpoint');
    }

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 TEST SUMMARY');
    console.log('='.repeat(50));
    console.log(`✅ Passed: ${results.passed.length}`);
    console.log(`⚠️  Warnings: ${results.warnings.length}`);
    console.log(`❌ Failed: ${results.failed.length}`);
    console.log('');

    if (results.failed.length === 0) {
      console.log('🎉 WordPress connection is working!');
      if (results.warnings.length > 0) {
        console.log('\n💡 Next steps:');
        console.log('   1. Upload PHP files via SFTP');
        console.log('   2. Activate plugin in WordPress');
        console.log('   3. Run this test again');
      }
    } else {
      console.log('❌ Some tests failed. Check the errors above.');
    }

    return results;

  } catch (error) {
    console.error('\n❌ Connection error:', error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('   1. Check if WordPress URL is correct');
    console.log('   2. Check if WordPress site is accessible');
    console.log('   3. Check if REST API is enabled');
    return results;
  }
}

// Run test
testConnection().then(() => {
  console.log('\n✅ Test completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Test failed:', error);
  process.exit(1);
});

