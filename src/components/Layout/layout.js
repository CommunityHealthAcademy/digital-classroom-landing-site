import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/header"
import Footer from "../Footer/footer"
import GlobalStyles from "../../styles/global"
import "../../styles/css/fontface.css"
import { ThemeProvider } from "styled-components"

const Layout = ({ children, path, heroImg, theme, heroText }) => {
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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        siteTitle={data.site.siteMetadata.title}
        path={path}
        heroImg={heroImg}
        heroText={heroText}
        heroTextBackground={theme.heroTextBackground}
        heroBorder={theme.heroBorder}
        isLandingPage={isLandingPage}
      />

      <main>{children}</main>
      <Footer footerBorder={theme.heroBorder} isLandingPage={isLandingPage} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  heroImg: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  heroText: PropTypes.string.isRequired,
}

export default Layout
