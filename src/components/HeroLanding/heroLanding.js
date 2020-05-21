import React from "react"
import styled from "styled-components"
import BackgroundImage from "../../images/image-homepage.png"
import { gilroyBold, color, above } from "../../styles"
import Arrow from "../../assets/icons/arrow.png"

const HeroLanding = () => {
  return (
    <HeroLandingContainer>
      <HeroText>
        <Heading>
          <span>
            Quality assured COVID-19 library of resources for community-based
            healthworkers
          </span>
        </Heading>
        <HeroLink href="#">
          Go to COVID-19 Library <HeroLinkImg src={Arrow} alt="" />
        </HeroLink>
      </HeroText>
    </HeroLandingContainer>
  )
}

const HeroLandingContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  padding: 36px 28px 0 28px;
  height: 200px;

  ${above.desktop`
    padding: 108.5px 140px 0 140px;
    height: 740px;
  `}
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;

  ${above.desktop`
    max-width: 1160px;
    margin: 0 auto;
  `}
`

const Heading = styled.h1`
  max-width: 263px;
  ${gilroyBold}
  font-size: 15.6px;
  line-height: 2.5em;
  letter-spacing: 0.25px;
  color: ${color.white};
  display: inline;
  margin: 0 0 16.6px 16.6px;

  ${above.desktop`
    font-size: 28px;
    letter-spacing: 0.43px;
    max-width: 643px;
    line-height: 2.2em;
  `}

  span {
    background-color: ${color.red};
    opacity: 0.9;
    padding-left: 0px;
    box-shadow: -8px 0 0 8px ${color.red}, 8px 0 0 8px ${color.red};
  }
`

const HeroLink = styled.a`
  background-color: ${color.differentBlack};
  font-size: 12px;
  text-decoration: none;
  padding: 8px;
  color: ${color.white};
  width: 155px;

  ${above.desktop`
    font-size: 16px;
    width: 199px;
  `}
`

const HeroLinkImg = styled.img`
  vertical-align: middle;
`

export default HeroLanding
