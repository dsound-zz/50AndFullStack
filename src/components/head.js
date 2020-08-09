import React from 'react'
import favicon from "../images/hnet.com-image.ico"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
        <link style={{height: "800px",width: "200px"}} rel='icon' href={favicon} />
        </Helmet>
    )
}

export default Head