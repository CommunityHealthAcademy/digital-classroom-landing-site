import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
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
        <LinkCards>
          <OurMissionCard to="/our-mission">
            <SectionHeading>
              <span>Our Mission</span>
            </SectionHeading>
            <SectionText>
              Dedicated to sharing medically reviewed content to help slow the
              spread of COVID-19
            </SectionText>
            <SectionLinkImg src={Arrow} alt="Find out more about our mission" />
          </OurMissionCard>
          <OurMembersCard to="/our-members">
            <SectionHeading>
              <span>Our Members</span>
            </SectionHeading>
            <SectionText>
              Dedicated to helping health workers access the training &
              information they need to save lives.
            </SectionText>

            <SectionLinkImg src={Arrow} alt="Find out more about our members" />
          </OurMembersCard>
          <Covid19LibraryCard href="https://covid-19library.org/">
            <SectionHeading>
              <span>COVID-19 Library</span>
            </SectionHeading>
            <SectionText>
              Multimedia content for empowering community-based health workers
              and local communities globally.
            </SectionText>

            <SectionLinkImg
              src={Arrow}
              alt="Learn how you can use our COVID-19 Library"
            />
          </Covid19LibraryCard>
          <CommunityHealthAcademyCard href="https://communityhealthacademy.course.tc/catalog/track/covid-19-digital-classroom-course-series">
            <SectionHeading>
              <span>COVID-19 Courses</span>
            </SectionHeading>
            <SectionText>
              Open-source training delivered on the Community Health Academy's
              Platform.
            </SectionText>

            <SectionLinkImg
              src={Arrow}
              alt="Learn more about our open-source training courses"
            />
          </CommunityHealthAcademyCard>
        </LinkCards>
      )}

      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

const LinkCards = styled.section`
  display: flex;
  flex-direction: column;
  z-index: 1;

  ${above.desktop`
    position: absolute;
    flex-direction: row;
    margin: 0 auto;
    max-width: 1024px;
    left: 0;
    right: 0;
    top: 500px;
    padding: 0 28px;
  `}

  ${above.desktopLarge`
    position: absolute;
    flex-direction: row;
    margin: 0 auto;
    max-width: 1160px;
    left: 0;
    right: 0;
    top: 500px;
    padding: 0;
  `}
`

const OurMissionCard = styled(Link)`
  background-color: ${color.teal};
  padding: 24px 28px;
  text-decoration: none;

  ${above.desktop`
    margin-right: 14px;
    position: relative;
    height: 270px;
    padding: 40px 24px 28px 24px;
  `}

  ${above.desktopLarge`
  height: 232px;
  padding: 40px 24px 28px 24px;
  `}

  &:hover {
    filter: brightness(90%);
  }

  p {
    ${above.desktop`
      width: 168px;
    `}

    ${above.desktopLarge`
      width: 232px;
    `}
  }
`

const OurMembersCard = styled(Link)`
  background-color: ${color.green};
  padding: 24px 28px;
  text-decoration: none;

  ${above.desktop`
    margin-right: 14px;
    position: relative;
    height: 270px;
    padding: 40px 24px 28px 24px;
  `}

  ${above.desktopLarge`
    height: 232px;
    padding: 40px 24px 28px 24px;
  `}

  &:hover {
    filter: brightness(90%);
  }

  p {
    ${above.desktop`
      width: 168px;
    `}

    ${above.desktopLarge`
      width: 232px;
    `}
  }
`

const Covid19LibraryCard = styled.a`
  background-color: ${color.blue};
  padding: 24px 28px;
  text-decoration: none;

  ${above.desktop`
    margin-right: 14px;
    position: relative;
    height: 270px;
    padding: 40px 24px 28px 24px;
  `}

  ${above.desktopLarge`
    height: 232px;
    padding: 40px 24px 28px 24px;
  `}

  &:hover {
    filter: brightness(90%);
  }

  h2 {
    ${above.desktop`
      margin-bottom: 20px;
    `}

    ${above.desktopLarge`
      margin-bottom: 40px;
    `}
  }

  p {
    ${above.desktop`
      width: 168px;
    `}

    ${above.desktopLarge`
      width: 232px;
    `}
  }
`

const CommunityHealthAcademyCard = styled.a`
  background-color: ${color.pink};
  padding: 24px 28px;
  text-decoration: none;

  ${above.desktop`
    margin-right: 14px;
    position: relative;
    height: 270px;
    padding: 40px 24px 28px 24px;
  `}

  ${above.desktopLarge`
    height: 232px;
    padding: 40px 24px 28px 24px;
  `}

  &:hover {
    filter: brightness(90%);
  }

  h2 {
    ${above.desktop`
      margin-bottom: 20px;
    `}

    ${above.desktopLarge`
      margin-bottom: 40px;
    `}
  }

  p {
    ${above.desktop`
      width: 168px;
    `}

    ${above.desktopLarge`
      width: 232px;
    `}
  }
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

  span {
    &:hover {
      border-bottom: 2px solid ${color.white};
    }
  }
`

const SectionText = styled.p`
  color: ${color.white};
  ${gilroySemiBold};
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 20px 0;
`

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
