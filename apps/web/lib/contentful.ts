import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error(
    'CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN must be set in environment variables'
  );
}

export const contentfulClient = createClient({
  space,
  accessToken,
});
