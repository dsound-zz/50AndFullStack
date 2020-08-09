import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>Email me here: <Link to='http://google.com'>demiansims@gmail.com</Link></p>
        </Layout>
    )
}

export default ContactPage;