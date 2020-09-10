const path = require('path');


module.exports.createPages = async ( { graphql, actions }) => {
    const { createPage} = actions
    const workTemplate = path.resolve('./src/templates/work.js')
    
    const res = await graphql(`
    query{
        allContentfulWorkPiece{
          edges{ 
              node{
              slug
              }
            }
          }
        }
    `)

    res.data.allContentfulWorkPiece.edges.forEach((edge) => {
        createPage({
                component: workTemplate,
                path: `/work/${edge.node.slug}`,
                context: {
                    slug: edge.node.slug
                }
            })
        })
}