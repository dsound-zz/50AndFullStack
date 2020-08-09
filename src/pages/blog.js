import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMM Do, YYYY")
          }
        }
      }
    }
  `)


  return (
    <Layout>
      <Head title="Blog" />
      {/* <h1>My Blog</h1> */}
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, idx) => {
          return (
            <div key={idx}>
            <li className={blogStyles.post}>
              <Link to={`/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
            </div>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
