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
    padding: 108px 140px 0 140px;
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
  max-width: 264px;
  ${gilroyBold}
  font-size: 16px;
  line-height: 2.4em;
  letter-spacing: 0.24px;
  color: ${color.white};
  display: inline;
  margin: 0 0 16px 16x;

  ${above.desktop`
    font-size: 28px;
    letter-spacing: 0.44px;
    max-width: 644px;
    line-height: 2.2em;
  `}

  span {
    background-color: ${color.red};
    display: inline;
    padding: 0.5rem;
    opacity: 0.9;

    /* Needs prefixing */
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
`

const HeroLink = styled.a`
  background-color: ${color.differentBlack};
  font-size: 12px;
  text-decoration: none;
  padding: 8px;
  color: ${color.white};
  width: 156px;

  ${above.desktop`
    font-size: 16px;
    width: 200px;
  `}
`

const HeroLinkImg = styled.img`
  vertical-align: middle;
`

export default HeroLanding
