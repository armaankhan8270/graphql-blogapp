import { request, gql } from "graphql-request";
const url = process.env.GRAPHQL_API;
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              name
              bio
              id
              photo {
                url
              }
            }
            createdBy {
              createdAt
            }
            featuredImage {
              url
            }
            slug
            title
            excerpt
          }
        }
      }
    }
  `;

  const result = await request(url, query);
  return result.postsConnection.edges;
};
