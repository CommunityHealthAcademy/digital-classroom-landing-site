import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const IndexPage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Home" />
  </Layout>
)

IndexPage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default IndexPage
