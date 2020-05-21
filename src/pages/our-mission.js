import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { above, color, gilroySemiBold, gilroyRegular } from "../styles"
import { ThemeProvider } from "styled-components"

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
    bgColor: color.teal,
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout path={path} heroImg={data.file.childImageSharp.fluid}>
        <SEO title="Our Mission" />
        <Article>
          <ArticleHeading>The COVID-19 Digital Classroom</ArticleHeading>
          <ArticleText>
            The COVID-19 Digital Classroom is a collective of international
            organizations united by the belief that access to high-quality
            healthcare is a universal human right. And now, with the current
            global crisis, populations around the world need rapid, coordinated,
            and focused support to tackle the COVID-19 pandemic. Patients in
            countries with limited preparedness and response resources are
            particularly vulnerable to COVID-19, and sharp increases in COVID-19
            caseloads are likely to overwhelm health systems in countries
            already facing shortages of nurses, physicians, and other health
            workers.
          </ArticleText>
          <ArticleText>
            Community-based health workers have a vital role to play in
            preventing, detecting, and responding to the virus, while also
            ensuring lifesaving primary healthcare continues to be delivered -
            particularly in rural, remote, and vulnerable communities. These
            critical healthcare workers need access to high-quality and
            easy-to-use information that will help increase their ability to
            treat and support patients and to deliver health services safely.
          </ArticleText>
          <ArticleText>
            The COVID-19 Digital Classroom was established to meet this
            challenge. We are dedicated to leveraging digital technologies and
            existing content distribution channels to ensure every health worker
            has the information they need to help their own communities,
            wherever in the world they are providing care, from city centers to
            the last mile.
          </ArticleText>
        </Article>
        <Divider></Divider>
      </Layout>
    </ThemeProvider>
  )
}

const Article = styled.article`
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 24px;

  ${above.desktop`
    padding: 100px 0 120px 0;
  `}
`

const ArticleHeading = styled.h2`
  ${gilroySemiBold};
  color: ${color.red};
  font-size: 24px;
`

const ArticleText = styled.p`
  ${gilroyRegular};
  font-size: 18px;
  line-height: 30px;
`

const Divider = styled.div`
  border-bottom: 1px solid ${color.grey};
`

OurMissionPage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default OurMissionPage
