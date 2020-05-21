import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  color,
  above,
  gilroyMedium,
  gilroyBold,
  gilroySemiBold,
} from "../../styles"
import LogoImage from "../../images/Red-Logo.svg"
import HeroLanding from "../HeroLanding/heroLanding"
import Arrow from "../../assets/icons/arrow.svg"

const Header = ({ path }) => {
  const [isLandingPage, setIsLandingPage] = useState(false)

  useEffect(() => {
    if (path === "/") setIsLandingPage(true)
  }, [path])

  return (
    <header>
      <TopSection>
        <Logo to="/">
          <Img src={LogoImage} alt="COVID-19 Digital Classroom logo" />
        </Logo>
        <nav>
          <NavList>
            <NavListItem>
              <NavLink href="">Our Mission</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="">Our members</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="">COVID-19 Library</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink href="">Community Health Academy</NavLink>
            </NavListItem>
          </NavList>
        </nav>
      </TopSection>
      {isLandingPage && (
        <>
          <HeroLanding />
          <BottomSection>
            <OurMissionSection>
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
            </OurMissionSection>
            <OurMembersSection>
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
            </OurMembersSection>
            <Covid19LibrarySection>
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
            </Covid19LibrarySection>
            <CommunityHealthAcademySection>
              <SectionHeading>Community Health Academy</SectionHeading>
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
            </CommunityHealthAcademySection>
          </BottomSection>
        </>
      )}
    </header>
  )
}

const TopSection = styled.div`
  max-width: 1160px;
  padding: 20px 28px 14px 28px;

  ${above.desktop`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`}
`

const Logo = styled(Link)`
  ${above.desktop`
    margin-right: 108px;
  `}
`

const Img = styled.img`
  width: 150px;
`

const NavList = styled.ul`
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  display: none;

  ${above.desktop`
    display: flex;
    flex-direction: row;
  `}
`

const NavListItem = styled.li`
  margin-right: 60px;
`

const NavLink = styled.a`
  ${above.desktop`
    text-decoration: none;
    ${gilroyMedium}
    font-size: 16px;
    color: ${color.otherBlack};
  `}

  &:hover {
    color: ${color.orange};
  }
`

const BottomSection = styled.article`
  display: flex;
  flex-direction: column;

  ${above.desktop`
    flex-direction: row;
    margin: 0 auto;
    max-width: 1160px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30%;
  `}
`

const OurMissionSection = styled.section`
  background-color: ${color.teal};
  padding: 24px 28px;

  ${above.desktop`
    margin-right: 14px;
    position: relative;
    height: 160px;
  `}
`

const OurMembersSection = styled.section`
  background-color: ${color.green};
  padding: 24px 28px;

  ${above.desktop`
    margin-right: 14px;
    position: relative;
    height: 160px;
  `}
`

const Covid19LibrarySection = styled.section`
  background-color: ${color.blue};
  padding: 24px 28px;

  ${above.desktop`
    margin-right: 14px;
    position: relative;
    height: 160px;
  `}
`

const CommunityHealthAcademySection = styled.section`
  background-color: ${color.pink};
  padding: 24px 28px;

  ${above.desktop`
    margin-right: 14px;
    position: relative;
    height: 160px;
  `}
`

const SectionHeading = styled.h2`
  ${gilroyBold};
  font-size: 18px;
  letter-spacing: 0.28px;
  color: ${color.white};
  margin: 0 0 20px 0;
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
  ${above.desktop`
    position: absolute;
    bottom: 24px;
  `}
`

Header.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Header
