exports.createPages = async ({ actions, reporter, graphql }) => {
  const result = await graphql(`
  query {
    allMdx {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }
  `);
  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  /* Using forEach because I'm not returning anything */
  posts.forEach(post => {
    actions.createPage(
      {
        path: post.frontmatter.slug,
        component: require.resolve("./src/templates/post.js"),
        context: {
          slug: post.frontmatter.slug
        }
      })
  });
}