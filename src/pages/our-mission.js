import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { above, color, gilroySemiBold, gilroyRegular } from "../styles"

const OurMissionPage = ({ path }) => {
  const data = useStaticQuery(graphql`
    query OurMissionQuery {
      file(relativePath: { eq: "image-our-mission.png" }) {
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
    heroBorder: `8px solid ${color.lightTeal}`,
    heroTextBg: `${color.lightTeal}`,
    footerBorder: `1px solid ${color.grey}`,
    heroTextSize: "30px",
    heroTextAlign: "center",
    heroTextFontFamily: `${gilroySemiBold}`,
    heroTextLineHeight: "30px",
  }

  return (
    <Layout
      heroImg={data.file.childImageSharp.fluid}
      heroText="Our Mission"
      theme={theme}
    >
      <SEO title="Our Mission" />
      <Section role="contentinfo" aria-label="Our Mission">
        <SectionHeading>The COVID-19 Digital Classroom</SectionHeading>
        <SectionText>
          The <strong>COVID-19 Digital Classroom</strong> is a collective of
          international organizations united by the belief that access to
          high-quality healthcare is a universal human right. And now, with the
          current global crisis, populations around the world need rapid,
          coordinated, and focused support to tackle the COVID-19 pandemic.
          Patients in countries with limited preparedness and response resources
          are particularly vulnerable to COVID-19, and sharp increases in
          COVID-19 caseloads are likely to overwhelm health systems in countries
          already facing shortages of nurses, physicians, and other health
          workers.
        </SectionText>
        <SectionText>
          Community-based health workers have a vital role to play in
          preventing, detecting, and responding to the virus, while also
          ensuring lifesaving primary healthcare continues to be delivered -
          particularly in rural, remote, and vulnerable communities. These
          critical healthcare workers need access to high-quality and
          easy-to-use information that will help increase their ability to treat
          and support patients and to deliver health services safely.
        </SectionText>
        <SectionText>
          The <strong>COVID-19 Digital Classroom</strong> was established to
          meet this challenge. We are dedicated to leveraging digital
          technologies and existing content distribution channels to ensure
          every health worker has the information they need to help their own
          communities, wherever in the world they are providing care, from city
          centers to the last mile.
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

OurMissionPage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default OurMissionPage
