import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import sidebarStyles from "./sidebar.module.scss"
import Img from "gatsby-image"


const Sidebar = () => {
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

    <aside className={sidebarStyles.sidebar}>
      <h1>
        <Link className={sidebarStyles.title} to="/blog">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <Link to="/blog">
      <Img fixed={data.avatar.childImageSharp.fixed} />
      </Link>
      <br />
      <nav>
        <ul className={sidebarStyles.navList}>
          <li>
            <Link className={sidebarStyles.navItem} to="/blog">
              Home
            </Link>
          </li>
          <li>
            <Link className={sidebarStyles.navItem} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={sidebarStyles.navItem} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar;
