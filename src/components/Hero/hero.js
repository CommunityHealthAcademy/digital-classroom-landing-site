import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { above, color, gilroyBold } from "../../styles"
import Arrow from "../../assets/icons/arrow.svg"

const Hero = ({ heroImg, heroText, landingPage }) => (
  <HeroContainer tag="div" fluid={heroImg}>
    <Heading>
      <HeroText>
        <span>{heroText}</span>
      </HeroText>
      {landingPage && (
        <HeroLink href="https://covid-19library.org">
          Go to COVID-19 Library <HeroLinkImg src={Arrow} alt="" />
        </HeroLink>
      )}
    </Heading>
  </HeroContainer>
)

const HeroContainer = styled(BackgroundImage)`
  background-size: cover;
  height: 200px;
  border-bottom: ${props => props.theme.heroBorder};

  ${above.desktop`
    height: ${props => props.theme.heroHeight};
  `};
`

const Heading = styled.div`
  max-width: 264px;
  position: ${props => props.theme.heroTextPosition};
  top: ${props => props.theme.heroTextPositionTop};
  left: ${props => props.theme.heroTextPositionLeft};
  margin-right: ${props => props.theme.heroTextMarginRight};
  transform: ${props => props.theme.heroTextTransform};

  ${above.desktop`
    max-width: ${props => props.theme.heroTextMaxWidthDesk};
    margin: 0 auto;
    top: ${props => props.theme.heroTextPositionTopDesk};
    left: ${props => props.theme.heroTextPositionLeftDesk};
    transform: ${props => props.theme.heroTextTransform};
  `};

  ${above.desktopLarge`
    max-width: ${props => props.theme.heroTextMaxWidthDeskLg};  
    left: ${props => props.theme.heroTextPositionLeftDeskLg};
  `}
`

const HeroText = styled.h1`
  ${gilroyBold};
  margin: 0 0 20px 0;
  font-size: ${props => props.theme.heroTextSize};
  letter-spacing: 0.24px;
  line-height: ${props => props.theme.heroTextLineHeight};
  color: ${color.white};

  span {
    background-color: ${props => props.theme.heroTextBg};
    opacity: 0.9;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    padding: 4px 8px;
  }

  ${above.desktop`
    width: 644px;
    font-size: 28px;
    letter-spacing: 0.44px;
    line-height: 50px;
  `}
`

const HeroLink = styled.a`
  background-color: ${color.fullBlack};
  color: ${color.white};
  text-decoration: none;
  padding: 4px 8px;
  font-size: 12px;

  ${above.desktop`
    font-size: 16px;
  `}
`

const HeroLinkImg = styled.img`
  margin-left: 4px;
  width: 14px;
  height: 7px;

  ${above.desktop`
    width: 20px;
    height: 11px;
  `}
`

Hero.propTypes = {
  heroImg: PropTypes.object.isRequired,
  heroText: PropTypes.string.isRequired,
}

export default Hero
