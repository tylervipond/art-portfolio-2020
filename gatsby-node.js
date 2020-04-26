/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const templateMap = {
  allSculpture: './src/templates/sculpture-template.js',
  allCollage: './src/templates/collage-template.js',
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allCollage {
        edges {
          node {
            path
          }
        }
      },
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
  Object.keys(result.data).forEach(k => {
    result.data[k].edges.forEach(({ node }) => {
      createPage({
        path: `${node.path}`,
        component: require.resolve(templateMap[k]),
      });
    });
  })
};
