import { request, gql } from "graphql-request";
const url = process.env.GRAPHQL_API;
export const getPosts = async () => {
  const query = gql`
    query Assets {
      postsConnection {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdBy {
              createdAt
            }
            slug
            featuredImage {
              fileName
            }
            excerpt
          }
        }
      }
      categoryS {
        name
        slug
      }
    }
  `;
  const result = await request(url, query);
  return result.postsConnection.edges;
};
