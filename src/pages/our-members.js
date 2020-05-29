import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import {
  color,
  above,
  gilroyRegular,
  gilroySemiBold,
  gilroySemiBoldItalic,
} from "../styles"
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
        relativePath: { eq: "Community-Health-Academy_Last-Mile-Health.jpg" }
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
    heroTextPosition: "absolute",
    heroTextPositionTop: "50%",
    heroTextPositionLeft: "50%",
    heroTextPositionTopDesk: "50%",
    heroTextPositionLeftDesk: "50%",
    heroTextMarginRight: "-50%",
    heroTextTransform: "translate(-50%, -50%)",
    heroHeight: "320px",
    heroBorder: `8px solid ${color.green}`,
    heroTextBg: `${color.green}`,
    footerBorder: `1px solid ${color.grey}`,
    heroTextSize: "30px",
    heroTextFontFamily: `${gilroySemiBold}`,
  }

  return (
    <Layout
      path={path}
      heroImg={data.heroImg.childImageSharp.fluid}
      heroText="Our Members"
      theme={theme}
    >
      <SEO title="Our Members" />
      <MembersSection role="contentinfo" aria-label="Our Members">
        <SectionHeading>Our Members</SectionHeading>
        <MembersSectionText>
          The <strong>COVID-19 Digital Classroom</strong> is a collective of
          international organizations with expertise critical to slowing and
          stopping the spread of COVID-19. With over 50 years’ experience
          between us, including in epidemic response, community health systems
          strengthening, multimedia content development, online training, and
          language for effective risk communication, we are linking critical
          actors to help millions of health workers access the vital,
          potentially life-saving information that they need.
        </MembersSectionText>
      </MembersSection>
      <Section role="contentinfo" aria-label="Last Mile Health">
        <SectionHeading>Who</SectionHeading>
        <HeadingDivider></HeadingDivider>
        <ContentContainer>
          <a href="https://lastmilehealth.org">
            <MemberLogoOne fluid={data.memberLogo1.childImageSharp.fluid} />
          </a>
          <SectionText>
            <ItalicText href="https://lastmilehealth.org/what-we-do/community-health-academy/">
              The Community Health Academy
            </ItalicText>{" "}
            serves as the lead for the{" "}
            <strong>COVID-19 Digital Classroom</strong>. The Academy, housed at{" "}
            <ItalicText href="https://lastmilehealth.org">
              Last Mile Health
            </ItalicText>
            , draws on its partnerships with Ministers of Health in multiple
            countries and leverages its experience developing online and
            mobile-optimized training to inform how content is designed for
            accessibility and usability.
          </SectionText>
        </ContentContainer>
      </Section>
      <SectionDivider></SectionDivider>
      <Section role="contentinfo" aria-label="Core Group">
        <ContentContainer>
          <a href="https://coregroup.org">
            <MemberLogoTwo fluid={data.memberLogo2.childImageSharp.fluid} />
          </a>
          <SectionText>
            <ItalicText href="https://coregroup.org">CORE Group</ItalicText>{" "}
            draws on decades of convening experience, including in response to
            earlier pandemics. CORE Group’s broad base of global health
            practitioner experts serve as technical reviewers, contributors, and
            content developers to focus on adaptations for important populations
            affected, such as people with disabilities, people living in urban
            informal settlements and pastoralist communities.
          </SectionText>
        </ContentContainer>
      </Section>
      <SectionDivider></SectionDivider>
      <Section role="contentinfo" aria-label="Medical Aid Films">
        <ContentContainer>
          <a href="https://www.medicalaidfilms.org">
            <MemberLogoThree fluid={data.memberLogo3.childImageSharp.fluid} />
          </a>
          <SectionText>
            <ItalicText href="https://www.medicalaidfilms.org">
              Medical Aid Films
            </ItalicText>{" "}
            is leading developer of multimedia content (e.g., animation for
            messaging and training) to address issues of poor or low levels of
            literacy in some of the most vulnerable populations in the world.
          </SectionText>
        </ContentContainer>
      </Section>
      <SectionDivider></SectionDivider>
      <Section role="contentinfo" aria-label="Tech Change">
        <ContentContainer>
          <a href="https://www.techchange.org">
            <MemberLogoFour fluid={data.memberLogo4.childImageSharp.fluid} />
          </a>
          <SectionText>
            <ItalicText href="https://www.techchange.org">
              TechChange
            </ItalicText>{" "}
            is leading the development of high-quality, interactive online
            training and developing a series of short, interactive, and engaging
            courses for community-based Health Workers which are hosted on the
            <ItalicText href="https://lastmilehealth.org/what-we-do/community-health-academy/">
              {" "}
              Community Health Academy platform.
            </ItalicText>
          </SectionText>
        </ContentContainer>
      </Section>
      <SectionDivider></SectionDivider>
      <Section role="contentinfo" aria-label="Translators Without Borders">
        <ContentContainer>
          <a href="https://translatorswithoutborders.org">
            <MemberLogoFive fluid={data.memberLogo5.childImageSharp.fluid} />
          </a>
          <SectionText>
            <ItalicText href="https://translatorswithoutborders.org">
              Translators Without Borders
            </ItalicText>{" "}
            are supporting translation of the animations and training courses
            into a wide range of languages to ensure they are accessible for
            community-based health workers across multiple countries.
          </SectionText>
        </ContentContainer>
      </Section>
      <SectionDivider></SectionDivider>
    </Layout>
  )
}

const MembersSection = styled.section`
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 24px;

  ${above.desktop`
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

  &:last-of-type {
    margin-bottom: 144px;
  }
`

const ItalicText = styled.a`
  ${gilroySemiBoldItalic};
  text-decoration: none;
  color: ${color.darkBlue};
`

OurMembersPage.propTypes = {
  path: PropTypes.string.isRequired,
}

export default OurMembersPage
