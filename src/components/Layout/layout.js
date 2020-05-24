import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/header"
import Footer from "../Footer/footer"
import GlobalStyles from "../../styles/global"
import "../../styles/css/fontface.css"

const Layout = ({ children, path, heroImg, theme }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isLandingPage, setIsLandingPage] = useState(false)

  useEffect(() => {
    if (path === "/") setIsLandingPage(true)
  }, [path])

  return (
    <>
      <GlobalStyles />
      <Header
        siteTitle={data.site.siteMetadata.title}
        path={path}
        heroImg={heroImg}
        isLandingPage={isLandingPage}
      />

      <main>{children}</main>
      <Footer theme={theme} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  heroImg: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default Layout
