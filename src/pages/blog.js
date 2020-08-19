import React from 'react';
import Layout from '../components/layout';
import {graphql, useStaticQuery, Link} from 'gatsby';

import blogStyles from './blog.module.scss';
import Head from '../components/head'

const BlogPage = ()=> {

    const data = useStaticQuery(graphql`
    query{
        allContentfulBlogPost(
          sort: {
            fields: publishedDate,
            order: DESC
          }
        ){
          edges{ 
              node{
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        } 
      }
    `)

    const posts = data.allContentfulBlogPost.edges.map(el=>
        <li className={blogStyles.post} key={el.node.id}>
            <Link to={`/blog/${el.node.slug}`}>
                <h2>{el.node.title}</h2>
                <p>{el.node.publishedDate}</p>
            </Link>
        </li>
        
    )

    return(
        <Layout>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <p>Posts will show up here late on.</p>
            <ol className={blogStyles.posts}>
                {posts}
            </ol>
        </Layout>
    )
}

export default BlogPage