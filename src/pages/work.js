import React from 'react';
import Layout from '../components/layout';
import {graphql, useStaticQuery, Link} from 'gatsby';
import {CgArrowLongDownR} from 'react-icons/cg';
import Fade from 'react-reveal/Pulse';

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
        <div className={workStyles.fullcardBg}></div>
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
                <h1 className={workStyles.introHeadline}>
                  <div className={workStyles.W}>W</div>
                  <div className={workStyles.O}>O</div>
                  <div className={workStyles.R}>R</div>
                  <div className={workStyles.K}>K</div>
                </h1>
              <div className={workStyles.intro}>
                  <p className={`${workStyles.inner} ${workStyles.typeFix}`} >Javascript, Html and Scss are pretty much the foundation of anything i create. I have fun in constantly exploring new libraries and frameworks and using them in both Front- and Backend.</p>
              </div>
              <hr></hr>
              <div className={workStyles.postWrap}>
                <ol className={`${workStyles.posts}`}>
                  {posts}
                </ol>
              </div>
              
            </div> 
        </Layout>
    )
}

export default WorkPage