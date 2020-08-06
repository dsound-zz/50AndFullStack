import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
       <h1>Hello.</h1>
      <h2>I'm Demian, a full-stack developer living in Brooklyn, NY.</h2>
      <h3>
        Need a developer? Contact me at <Link to="/contact">Contact Me</Link>
      </h3>
    </Layout>

  )
}

export default IndexPage;
