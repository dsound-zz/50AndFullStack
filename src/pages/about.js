import React from 'react';
import Layout from '../components/layout';
import Head from "../components/head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <p>I am a software developer who turned 50</p>
      <p>
        React out to me at:{" "}
        <a href="http://www.google.com" target="_blank" rel="noreferrer">
          ContactMe
        </a>
      </p>
    </Layout>
  )
};

export default About;
