import React from 'react';
import Layout from '../components/layout';
import {graphql, useStaticQuery, Link} from 'gatsby';

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
                    fields{
                        slug
                    }
                }
            }
        }
    }
`)
    console.log(data)

    const posts = data.allMarkdownRemark.edges.map(el=>
        <li>
            <Link to={"/blog/"+el.node.fields.slug}>
                <h2>{el.node.frontmatter.title}</h2>
                <p>{el.node.frontmatter.date}</p>
            </Link>
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