import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { navigate } from "gatsby"

const IndexPage = () => {
   if (typeof window !== "undefined") navigate("/blog")
  return (
    <Layout>
      <Head title="Blog" />
      
    </Layout>

  )
}

export default IndexPage;

