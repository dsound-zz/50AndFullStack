import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { DiscussionEmbed } from "disqus-react"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`
const blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      },
    },
  }


  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: `${props.data.contentfulBlogPost.title}` },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p style={{fontSize: "0.75rem", fontStyle: "italic"}}>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
        <hr style={{marginTop: "5rem"}}/>
          <DiscussionEmbed style={{ marginTop: "2rem"}}{...disqusConfig} />
    
    </Layout>
  )
}

export default blog
