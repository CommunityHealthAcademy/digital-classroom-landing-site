import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { color, gilroyBold } from "../styles"

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
    footerBorder: "none",
    heroBorder: "none",
    heroHeight: "740px",
    heroTextFontFamily: `${gilroyBold}`,
    heroTextPosition: "relative",
    heroTextPositionTop: "40px",
    heroTextPositionLeft: "32px",
    heroTextPositionTopDesk: "108px",
    heroTextPositionLeftDesk: "140px",
    heroTextMaxWidth: "1440px",
    heroTextBg: color.red,
    heroTextSize: "14px",
    heroTextLetterSpaceMob: "0.24px",
    heroTextLetterSpaceDesk: "0.44px",
  }

  return (
    <Layout
      path={path}
      heroImg={data.heroImg.childImageSharp.fluid}
      heroText="Quality assured COVID-19 library of resources for community-based
      healthworkers"
      theme={theme}
      landingPage
    >
      <SEO title="Home" />
    </Layout>
  )
}

IndexPage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default IndexPage
