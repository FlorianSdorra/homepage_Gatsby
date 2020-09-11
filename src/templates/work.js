import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; 

import Layout from '../components/layout';
import Head from '../components/head'

// export const query = graphql`
//     query (
//         $slug: String!
//     ){
//         markdownRemark (
//         fields: {
//             slug: {
//             eq: $slug
//             }
//         }
//         ) 
//         {
//         frontmatter{
//             title
//             date
//         }
//         html
//         }
//     } 
// `

export const query = graphql`
query($slug:String!){
    contentfulWorkPiece(slug: {eq:$slug}){
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        body {
            json
        }
    }
  }
`

const Work = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const url = node.data.target.fields.file['en-US'].url;
                return <img alt={alt} src={url}/>
            }
        }
    }
    return (
        <Layout>
            <Head title={props.data.contentfulWorkPiece.title}/>
            <h1>{props.data.contentfulWorkPiece.title}</h1>
            <p>{props.data.contentfulWorkPiece.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulWorkPiece.body.json, options)}
        </Layout>
    )
}

export default Work