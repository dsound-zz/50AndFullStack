import React from "react"
import Footer from "./footer"
import Header from "./header"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.header}>
        <Header />
      </div>
      <div className={layoutStyles.content}>{props.children}</div>
      <div className={layoutStyles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
