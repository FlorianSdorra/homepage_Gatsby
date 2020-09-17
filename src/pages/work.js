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
            order: ASC
          }
        ){
          edges{ 
              node{
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
              sample{ 
                file{ 
                  url
                }
              }
            }
          }
        } 
      }
    `)


    const posts = data.allContentfulWorkPiece.edges.map(el=>
      <Link className={workStyles.fullCard} to={`/work/${el.node.slug}`}>
        <li className={workStyles.post} key={el.node.id} style={{backgroundImage:"url("+el.node.sample.file.url+")"}}><div className={workStyles.postFilter}></div>
        </li>
        <div className={workStyles.postDetails}>
            <h2>{el.node.title}</h2>
            {/* <p>{el.node.publishedDate}</p> */}
        </div> 
        
      </Link>
    )

    return(
        <Layout>
            <Head title="Work"/>
            <div className={workStyles.container}>
              <div className={workStyles.intro}> 
                <h1>Work</h1>
                <p className={`${workStyles.inner} ${workStyles.typeFix}`} >
                  <Typed
                    strings={[
                      `Javascript, Html and Scss are pretty much the foundation of anything i create. I have fun in constantly exploring new libraries and frameworks and using them in both Front and Backend.`
                    ]}
                    typeSpeed={50}
                 />
                </p>
              </div>
              <div className={workStyles.postWrap}>
                <ol className={`${workStyles.posts} ${workStyles.inner}`}>
                  {posts}
                </ol>
              </div>
              
            </div> 
        </Layout>
    )
}

export default WorkPage