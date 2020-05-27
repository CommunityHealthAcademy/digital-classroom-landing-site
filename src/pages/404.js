import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { color, above, gilroySemiBold, gilroyRegular } from "../styles"

const NotFoundPage = ({ path }) => {
  const data = useStaticQuery(graphql`
    query NotFoundPageQuery {
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
    heroTextPosition: "absolute",
    heroTextPositionTop: "50%",
    heroTextPositionLeft: "50%",
    heroTextPositionTopDesk: "50%",
    heroTextPositionLeftDesk: "50%",
    heroTextMarginRight: "-50%",
    heroTextTransform: "translate(-50%, -50%)",
    heroHeight: "320px",
    heroBorder: `8px solid ${color.red}`,
    heroTextBg: `${color.red}`,
    footerBorder: `1px solid ${color.grey}`,
    heroTextSize: "30px",
    heroTextAlign: "center",
    heroTextFontFamily: `${gilroySemiBold}`,
  }

  return (
    <Layout
      path={path}
      heroImg={data.heroImg.childImageSharp.fluid}
      heroText="Page Not Found"
      theme={theme}
    >
      <SEO title="404: Not found" />
      <Section role="contentinfo" aria-label="Page not found">
        <SectionHeading>NOT FOUND</SectionHeading>
        <SectionText>
          You just hit a route that doesn&#39;t exist... the sadness.
        </SectionText>
      </Section>
    </Layout>
  )
}

const Section = styled.section`
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 24px;

  ${above.desktop`
    padding: 100px 0 120px 0;
  `}
`

const SectionHeading = styled.h2`
  ${gilroySemiBold};
  color: ${color.red};
  font-size: 24px;
  margin-top: 0;
`

const SectionText = styled.p`
  ${gilroyRegular};
  font-size: 18px;
  line-height: 30px;
`
export default NotFoundPage
