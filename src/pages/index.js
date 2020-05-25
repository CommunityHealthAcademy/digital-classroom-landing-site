import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const IndexPage = ({ path }) => {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      heroImg: file(relativePath: { eq: "image-homepage.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const theme = {
    containerBorderTop: "none",
    heroBorder: "none",
  }

  return (
    <Layout
      path={path}
      heroImg={data.heroImg.childImageSharp.fluid}
      heroText="Quality assured COVID-19 library of resources for community-based
      healthworkers"
      theme={theme}
    >
      <SEO title="Home" />
    </Layout>
  )
}

IndexPage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default IndexPage
