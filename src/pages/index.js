import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { color } from "../styles"

const IndexPage = ({ path }) => {
  const theme = {
    containerBorderTop: "none",
  }
  return (
    <Layout path={path} theme={theme}>
      <SEO title="Home" />
    </Layout>
  )
}

IndexPage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default IndexPage
