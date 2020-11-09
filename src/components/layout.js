import React from "react"
import Footer from "./footer"
import Sidebar from "./sidebar"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import cx from "classnames"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.flexGrid}>
        <div className={cx(layoutStyles.column, layoutStyles.sidebar)}>
          <Sidebar />
        </div>
        <div className={cx(layoutStyles.column, layoutStyles.content)}>
          {props.children}
        </div>
            <div className={layoutStyles.row}>
          <div className={layoutStyles.footer}>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
