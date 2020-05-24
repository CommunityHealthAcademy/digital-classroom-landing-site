import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { ThemeProvider } from "styled-components"
import { color, above, gilroyRegular, gilroySemiBold } from "../styles"
import Img from "gatsby-image"

const OurMembersPage = ({ path }) => {
  const data = useStaticQuery(graphql`
    query OurMembersQuery {
      heroImg: file(relativePath: { eq: "image-our-members.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      memberLogo1: file(
        relativePath: { eq: "Community-Health-Academy_Last-Mile-Health.png" }
      ) {
        id
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      memberLogo2: file(relativePath: { eq: "CORElogo_300dpi.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      memberLogo3: file(relativePath: { eq: "MAF.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      memberLogo4: file(relativePath: { eq: "TechChangeLogo.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      memberLogo5: file(
        relativePath: { eq: "Translators-Without-Borders.png" }
      ) {
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
    bgColor: color.green,
    heroBorderBottom: color.green,
    containerBorderTop: `1px solid ${color.grey}`,
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout
        path={path}
        heroImg={data.heroImg.childImageSharp.fluid}
        bgColor={color.green}
        heroBorderBottom={color.green}
        heroText="Our Members"
        theme={theme}
      >
        <SEO title="Our Members" />
        <MembersSection role="contentinfo" aria-label="Our Members">
          <SectionHeading>Our Members</SectionHeading>
          <MembersSectionText>
            The COVID-19 Digital Classroom is a collective of international
            organizations with expertise critical to slowing and stopping the
            spread of COVID-19. With over 50 years’ experience between us,
            including in epidemic response, community health systems
            strengthening, multimedia content development, online training, and
            language for effective risk communication, we are linking critical
            actors to help millions of health workers access the vital,
            potentially life-saving information that they need.
          </MembersSectionText>
        </MembersSection>
        <Section role="contentinfo" aria-label="Who are our Members">
          <SectionHeading>Who</SectionHeading>
          <HeadingDivider></HeadingDivider>
          <ContentContainer>
            <MemberLogoOne fluid={data.memberLogo1.childImageSharp.fluid} />
            <SectionText>
              The Community Health Academy serves as the lead for the COVID-19
              Digital Classroom. The Academy, housed at Last Mile Health, draws
              on its partnerships with Ministers of Health in multiple countries
              and leverages its experience developing online and
              mobile-optimized training to inform how content is designed for
              accessibility and usability.
            </SectionText>
          </ContentContainer>
        </Section>
        <SectionDivider></SectionDivider>
        <Section role="contentinfo" aria-label="Core Group">
          <ContentContainer>
            <MemberLogoTwo fluid={data.memberLogo2.childImageSharp.fluid} />
            <SectionText>
              CORE Group draws on decades of convening experience, including in
              response to earlier pandemics. CORE Group’s broad base of global
              health practitioner experts serve as technical reviewers,
              contributors, and content developers to focus on adaptations for
              important populations affected, such as people with disabilities,
              people living in urban informal settlements and pastoralist
              communities.
            </SectionText>
          </ContentContainer>
        </Section>
        <SectionDivider></SectionDivider>
        <Section role="contentinfo" aria-label="Medical Aid Films">
          <ContentContainer>
            <MemberLogoThree fluid={data.memberLogo3.childImageSharp.fluid} />
            <SectionText>
              Medical Aid Films is leading development of multimedia content
              (e.g., animation for messaging and training) to address issues of
              poor or low levels of literacy in some of the most vulnerable
              populations in the world.
            </SectionText>
          </ContentContainer>
        </Section>
        <SectionDivider></SectionDivider>
        <Section role="contentinfo" aria-label="Tech Change">
          <ContentContainer>
            <MemberLogoFour fluid={data.memberLogo4.childImageSharp.fluid} />
            <SectionText>
              TechChange is leading the development of high-quality,
              interactive online training and developing a series of short,
              interactive, and engaging courses for community-based Health
              Workers which are hosted on the Community Health Academy platform.
            </SectionText>
          </ContentContainer>
        </Section>
        <SectionDivider></SectionDivider>
        <Section role="contentinfo" aria-label="Translators Without Borders">
          <ContentContainer>
            <MemberLogoFive fluid={data.memberLogo5.childImageSharp.fluid} />
            <SectionText>
              Translators Without Borders are supporting translation of the
              animations and training courses into a wide range of languages to
              ensure they are accessible for community-based health workers
              across multiple countries.
            </SectionText>
          </ContentContainer>
        </Section>
        <SectionDivider></SectionDivider>
      </Layout>
    </ThemeProvider>
  )
}

const MembersSection = styled.section`
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 24px;

  ${above.desktop`
    max-width: 920px;
    padding: 100px 0 110px 0;
  `}
`

const MembersSectionText = styled.p`
  ${gilroyRegular};
  font-size: 18px;
  line-height: 30px;

  ${above.desktop`
    width: 640px;
    flex: 1;
  `}
`

const Section = styled.section`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 24px 32px 24px;

  ${above.desktop`
    max-width: 920px;
    padding: 0 0 34px 0;
  `}
`

const SectionHeading = styled.h2`
  ${gilroySemiBold};
  color: ${color.red};
  font-size: 24px;
  margin-top: 0;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${above.desktop`
    flex-direction: row;
    align-items: center;
  `}
`

const SectionText = styled.p`
  ${gilroyRegular};
  font-size: 18px;
  line-height: 30px;

  ${above.desktop`
    flex: 1;
  `}
`

const MemberLogoOne = styled(Img)`
  width: 128px;
  margin-bottom: 6px;

  ${above.desktop`
    width: 220px;
    margin-right: 60px;
  `}
`

const MemberLogoTwo = styled(Img)`
  width: 187px;
  margin-bottom: 6px;

  ${above.desktop`
  width: 220px;
  margin-right: 60px;
`}
`

const MemberLogoThree = styled(Img)`
  width: 187px;
  margin-bottom: 6px;

  ${above.desktop`
  width: 220px;
  margin-right: 60px;
`}
`

const MemberLogoFour = styled(Img)`
  width: 187px;
  margin-bottom: 6px;

  ${above.desktop`
  width: 220px;
  margin-right: 60px;
`}
`

const MemberLogoFive = styled(Img)`
  width: 187px;
  margin-bottom: 6px;

  ${above.desktop`
  width: 220px;
  margin-right: 60px;
`}
`

const HeadingDivider = styled.div`
  border-bottom: 1px solid ${color.grey};
  margin-bottom: 34px;
`

const SectionDivider = styled.div`
  border-bottom: 1px solid ${color.grey};
  margin: 0 auto 30px auto;
  width: 88%;
  max-width: 640px;

  ${above.desktop`
    max-width: 920px;
  `}
`

OurMembersPage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default OurMembersPage
