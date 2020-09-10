import React from 'react';
import Layout from '../components/layout';
import {graphql, useStaticQuery, Link} from 'gatsby';
import Typed from 'react-typed';

import workStyles from './work.module.scss';
import Head from '../components/head'

const WorkPage = ()=> {

    const data = useStaticQuery(graphql`
    query{
        allContentfulWorkPiece(
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

    const posts = data.allContentfulWorkPiece.edges.map(el=>
        <li className={workStyles.post} key={el.node.id}>
            <Link to={`/work/${el.node.slug}`}>
                <h2>{el.node.title}</h2>
                <p>{el.node.publishedDate}</p>
            </Link>
        </li>
        
    )

    return(
        <Layout>
            <Head title="Work"/>
            <div className={workStyles.container}>
              <div className={workStyles.intro}>
                <h1 className={workStyles.inner}>Work</h1>
                <p className={`${workStyles.inner} ${workStyles.typeFix}`} >
                  <Typed
                    strings={[
                      'I use mostly JavaScript and Scss for my work and am constantly adding new libraries and languages'
                    ]}
                    typeSpeed={50}
                 />
                </p>
              </div>
              <ol className={`${workStyles.posts} ${workStyles.inner}`}>
                {posts}
              </ol>
            </div> 
        </Layout>
    )
}

export default WorkPage