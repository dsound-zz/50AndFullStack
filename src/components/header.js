import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      avatar: file(relativePath: { eq: "images/avatar.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (

    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/blog">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <Link to="/blog">
      <Img fixed={data.avatar.childImageSharp.fixed} />
      </Link>
      <br />
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} to="/blog">
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
