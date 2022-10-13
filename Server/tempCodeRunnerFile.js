
      }
    }
  `;
  const result = await request(url, query);
  return result.postsConnection.edges;
};
