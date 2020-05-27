import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import GlobalStyles from "../../styles/global"
import Hero from "../Hero/hero"
import "../../styles/css/fontface.css"
import styled from "styled-components"
import { above, color, gilroyBold, gilroySemiBold } from "../../styles"
import Arrow from "../../assets/icons/arrow.svg"

const Layout = ({ children, heroImg, theme, heroText, landingPage }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header landingPage={landingPage} />
      <Hero heroImg={heroImg} heroText={heroText} landingPage={landingPage} />
      {landingPage && (
        <InfoCards>
          <OurMissionCard>
            <SectionHeading>Our Mission</SectionHeading>
            <SectionText>
              Dedicated to sharing medically reviewed content to help slow the
              spread of COVID-19
            </SectionText>
            <SectionLink href="">
              <SectionLinkImg
                src={Arrow}
                alt="Find out more about our mission"
              />
            </SectionLink>
          </OurMissionCard>
          <OurMembersCard>
            <SectionHeading>Our Members</SectionHeading>
            <SectionText>
              Dedicated to helping health workers access the training &
              information they need to save lives.
            </SectionText>
            <SectionLink href="">
              <SectionLinkImg
                src={Arrow}
                alt="Find out more about our members"
              />
            </SectionLink>
          </OurMembersCard>
          <Covid19LibraryCard>
            <SectionHeading>COVID-19 Library</SectionHeading>
            <SectionText>
              Multimedia content for empowering community-based health workers
              and citizens across the globe.
            </SectionText>
            <SectionLink href="">
              <SectionLinkImg
                src={Arrow}
                alt="Learn how you can use our COVID-19 Library"
              />
            </SectionLink>
          </Covid19LibraryCard>
          <CommunityHealthAcademyCard>
            <CommunityHeading>Community Health Academy</CommunityHeading>
            <SectionText>
              High-quality, interactive, open-source training courses for
              community-based health workers
            </SectionText>
            <SectionLink href="">
              <SectionLinkImg
                src={Arrow}
                alt="Learn more about our open-source training courses"
              />
            </SectionLink>
          </CommunityHealthAcademyCard>
        </InfoCards>
      )}

      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

const InfoCards = styled.article`
  display: flex;
  flex-direction: column;
  z-index: 1;

  ${above.desktop`
  position: absolute;
    flex-direction: row;
    margin: 0 auto;
    max-width: 1160px;
    left: 0;
    right: 0;
    bottom: 30%;
    top: 500px;
  `}
`

const OurMissionCard = styled.section`
  background-color: ${color.teal};
  padding: 24px 28px;

  ${above.desktop`
    margin-right: 14px;
    position: relative;
    height: 230px;
    padding: 40px 24px 28px 24px;
  `}
`

const OurMembersCard = styled.section`
  background-color: ${color.green};
  padding: 24px 28px;

  ${above.desktop`
  margin-right: 14px;
  position: relative;
  height: 230px;
  padding: 40px 24px 28px 24px;
`}
`

const Covid19LibraryCard = styled.section`
  background-color: ${color.blue};
  padding: 24px 28px;

  ${above.desktop`
    margin-right: 14px;
    position: relative;
    height: 230px;
    padding: 40px 24px 28px 24px;
  `}
`

const CommunityHealthAcademyCard = styled.section`
  background-color: ${color.pink};
  padding: 24px 28px;

  ${above.desktop`
    margin-right: 14px;
    position: relative;
    height: 230px;
    padding: 40px 24px 28px 24px;
  `}
`

const SectionHeading = styled.h2`
  ${gilroyBold};
  font-size: 18px;
  letter-spacing: 0.28px;
  color: ${color.white};
  margin: 0 0 40px 0;

  ${above.desktop`
    font-size: 24px;
  `}
`

const CommunityHeading = styled.h2`
  ${gilroyBold};
  font-size: 18px;
  letter-spacing: 0.28px;
  color: ${color.white};
  margin: 0 0 12px 0;

  ${above.desktop`
    font-size: 24px;
  `}
`

const SectionText = styled.p`
  color: ${color.white};
  ${gilroySemiBold};
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 20px 0;
`

const SectionLink = styled.a``

const SectionLinkImg = styled.img`
  width: 23px;
  height: 13px;

  ${above.desktop`
    position: absolute;
    bottom: 24px;
  `}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  heroImg: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  heroText: PropTypes.string.isRequired,
}

export default Layout
