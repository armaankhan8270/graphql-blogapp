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
export const GetRecentPost = async () => {
  const query = gql`
    query GetPostDetails {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(url, query);
  return result.posts;
};
export const GetCatogories = async () => {
  const query = gql`
    query MyQuery {
      categoryS {
        id
        name
        slug
      }
    }
  `;
  const result = await request(url, query);
  return result.categoryS;
};
export const GetAuthors = async () => {
  const query = gql`
    query MyQuery {
      authors {
        name
        photo {
          url
        }
        bio
        id
      }
    }
  `;
  const result = await request(url, query);
  return result.authors;
};
export const GetPostBySlug = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      post(where: { slug: $slug }) {
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
        contetnt {
          raw
        }
      }
    }
  `;
  const result = await request(url, query, { slug });
  return result;
};
