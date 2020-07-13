import React from 'react';
import Layout from '../components/layout';
import {graphql, useStaticQuery} from 'gatsby';

const BlogPage = ()=> {

    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
                }
            }
        }
    }
`)

    const posts = data.allMarkdownRemark.edges.map(el=>
        <li>
            <h2>{el.node.frontmatter.title}</h2>
            <p>{el.node.frontmatter.date}</p>
        </li>
        
    )

    return(
        <Layout>
            <h1>Blog</h1>
            <p>Post will show up here late on.</p>
            <ol>
                {posts}
            </ol>
        </Layout>
    )
}

export default BlogPage