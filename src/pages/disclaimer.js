import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { color, above, gilroySemiBold, gilroyRegular } from "../styles"

const Disclaimer = () => {
  const theme = {
    heroTextPosition: "absolute",
    heroTextPositionTop: "50%",
    heroTextPositionLeft: "50%",
    heroTextPositionTopDesk: "50%",
    heroTextPositionLeftDesk: "50%",
    heroTextMarginRight: "-50%",
    heroTextTransform: "translate(-50%, -50%)",
    heroHeight: "320px",
    heroBorder: `8px solid ${color.blue}`,
    heroTextBg: `${color.blue}`,
    footerBorder: `1px solid ${color.grey}`,
    heroTextSize: "30px",
    heroTextAlign: "center",
    heroTextFontFamily: `${gilroySemiBold}`,
  }

  const data = useStaticQuery(graphql`
    query DisclaimerPageQuery {
      heroImg: file(relativePath: { eq: "image-homepage.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Layout
      heroImg={data.heroImg.childImageSharp.fluid}
      heroText="COVID-19 Library Disclaimer"
      theme={theme}
    >
      <SEO title="Disclaimer" />
      <Section role="contentinfo" aria-label="Disclaimer">
        <SectionHeading>Disclaimer</SectionHeading>
        <SectionText>
          This Web site is provided on an “as-is” basis. COVID-19 Digital
          Classroom <TextUnderline>and COVID-19 Library</TextUnderline>{" "}
          disclaims all responsibility for any loss, injury, claim, liability,
          or damage of any kind resulting from, arising out of, or any way
          related to any errors in or omissions from this Web site and the
          content, including but not limited to technical inaccuracies and
          typographical errors.
        </SectionText>
        <SectionText>
          Every effort is made to provide accurate and complete information, but
          COVID-19 Digital Classroom{" "}
          <TextUnderline>and COVID-19 Library</TextUnderline> cannot guarantee
          that there will be no errors. COVID-19 Digital Classroom and{" "}
          <TextUnderline>COVID-19 Library</TextUnderline> makes no claims,
          promises, or guarantees about the accuracy, completeness, or adequacy
          of the contents of this Web site and expressly disclaims liability for
          errors and omissions in the contents of this Web site.
        </SectionText>
        <SectionText>
          With respect to the content of this site, COVID-19 Digital Classroom{" "}
          <TextUnderline>and COVID-19 Library</TextUnderline> its employees, and
          contractors make no warranty, expressed or implied or statutory,
          including but not limited to the warranties of non-infringement of
          third-party rights, title, and the warranties of merchantability and
          fitness for a particular purpose, with respect to content available
          from this Web site or other Internet resources linked from it.
          Additionally, COVID-19 Digital Classroom{" "}
          <TextUnderline>and COVID-19 Library</TextUnderline> assumes no legal
          liability for the accuracy, completeness, or usefulness of any
          information, product, or process disclosed herein or freedom from
          computer viruses, and does not represent that use of such information,
          product, or process would not infringe on privately owned rights.
          COVID-19 Digital Classroom{" "}
          <TextUnderline>and COVID-19 Library</TextUnderline> may make
          improvements and/or changes to its features, functionality, or content
          at any time.
        </SectionText>
      </Section>
      <Section
        role="contentinfo"
        aria-label="Evolving Information; Not Medical Advice"
      >
        <SectionHeading>
          Evolving Information; Not Medical Advice
        </SectionHeading>
        <SectionText>
          The content contained on this site is being made available for
          informational purposes only, in the context of a public health
          emergency related to COVID-19 (a.k.a. the coronavirus) and in
          connection with the state of emergency declared by the President of
          the United States. It is based on pertinent published medical
          literature, national and state guidance, and/or expert consensus,
          which continues to evolve relative to COVID-19. It is neither an
          attempt to substitute for the practice of medicine nor as a substitute
          for the provision of any medical professional services. Furthermore,
          the content is not meant to be complete, exhaustive or a substitute
          for medical professional advice, diagnosis or treatment. The
          information herein should be adapted to each specific patient based on
          the treating medical professional’s independent professional judgment
          and consideration of the patient’s needs, the resources available at
          the location from where the medical professional services are being
          provided (e.g., healthcare institution, ambulatory clinic, physician’s
          office, etc.), and any other unique circumstances. This information
          should not be used to replace, substitute for or overrule a qualified
          medical professional’s judgment. You assume full responsibility for
          using this information and understand and agree that COVID-19 Digital
          Classroom <TextUnderline>and COVID-19 Library</TextUnderline> is not
          responsible or liable for any errors or omissions or for any claim,
          loss or damage resulting from the use of this information, this
          information is not intended to and does not constitute medical advice,
          and no doctor/patient relationship is created. Users should never
          disregard professional medical advice or delay in seeking it because
          of something on the site, and the site does not recommend or endorse
          any specific tests, products, procedures, opinions, or other
          information that might be mentioned on the site.
        </SectionText>
      </Section>
      <Section role="contentinfo" aria-label="External Links">
        <SectionHeading>External Links</SectionHeading>
        <SectionText>
          If this Web site contains links to other sites and resources provided
          by third parties, these links are provided for your convenience only.
          We have no control over the contents of those sites or resources, and
          accept no responsibility for them or for any loss or damage that may
          arise from your use of them. If you decide to access any of the
          third-party websites or resources linked to this Web site, you do so
          entirely at your own risk and subject to the terms and conditions of
          use for such websites.
        </SectionText>
      </Section>
    </Layout>
  )
}

const Section = styled.section`
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 24px;

  &:last-of-type {
    ${above.desktop`
    padding: 0px 24px 120px 24px;
  `}
  }
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

const TextUnderline = styled.span`
  text-decoration: underline;
  color: ${color.red};
`

export default Disclaimer
