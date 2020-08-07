import React from 'react';
import Layout from '../components/layout';
import {graphql, useStaticQuery, Link} from 'gatsby';

import blogStyles from './blog.module.scss';

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
                    id
                    }
                }
            }
        }
    `)

    const posts = data.allMarkdownRemark.edges.map(el=>
        <li className={blogStyles.post} key={el.node.id}>
            <Link to={`/blog/${el.node.fields.slug}`}>
                <h2>{el.node.frontmatter.title}</h2>
                <p>{el.node.frontmatter.date}</p>
            </Link>
        </li>
        
    )

    return(
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show up here late on.</p>
            <ol className={blogStyles.posts}>
                {posts}
            </ol>
        </Layout>
    )
}

export default BlogPage