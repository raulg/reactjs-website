import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://sample-site.prismic.io/api/v2'

// -- Access token if the Prismic repository is not public
const accessToken = ''

// OAuth
// clientId: 'xxxxxx',
// clientSecret: 'xxxxxx',

// -- Links resolution rules
// This function will be used to generate links to Prismic documents
// As your project grows, you should update this function according to your routes
export const linkResolver = (doc) => {
  if (doc.type === 'page') return `/${doc.uid}`
  return '/'
}

export const client = Prismic.client(apiEndpoint, { accessToken })
