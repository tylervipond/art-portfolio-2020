/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSculpture {
        edges {
          node {
            path
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.allSculpture.edges.forEach(({ node }) => {
    createPage({
      path: `${node.path}`,
      component: require.resolve('./src/templates/sculpture-template.js'),
    });
  });
};
