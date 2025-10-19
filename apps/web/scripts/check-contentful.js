const { createClient } = require('contentful');

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function checkContentTypes() {
  try {
    console.log('Fetching content types from Contentful...\n');

    const contentTypes = await client.getContentTypes();

    console.log('Found', contentTypes.items.length, 'content type(s):\n');

    contentTypes.items.forEach((contentType) => {
      console.log('---');
      console.log('Name:', contentType.name);
      console.log('API Identifier (Content Type ID):', contentType.sys.id);
      console.log('---\n');
    });

    // Also try to fetch entries
    console.log('\nTrying to fetch all entries...\n');
    const entries = await client.getEntries();
    console.log('Found', entries.items.length, 'total entries');

    if (entries.items.length > 0) {
      console.log('\nFirst entry content type:', entries.items[0].sys.contentType.sys.id);
    }

  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkContentTypes();
