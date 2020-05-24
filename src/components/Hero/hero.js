import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { above, color, gilroySemiBold } from "../../styles"

const Hero = ({ heroImg, heroText }) => (
  <HeroContainer tag="div" fluid={heroImg}>
    <Heading>
      <HeroText>
        <span>{heroText}</span>
      </HeroText>
    </Heading>
  </HeroContainer>
)

const HeroContainer = styled(BackgroundImage)`
  background-size: cover;
  height: 200px;
  border-bottom: 8px solid ${props => props.theme.heroBorderBottom};

  ${above.desktop`
    height: 320px;
  `};
`

const Heading = styled.div`
  max-width: 640px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroText = styled.h1`
  ${gilroySemiBold};
  font-size: 30px;
  color: ${color.white};
  text-align: center;
  margin: 0;

  span {
    background-color: ${props => props.theme.bgColor};
    padding: 4px 12px;
  }
`

Hero.propTypes = {
  heroImg: PropTypes.object.isRequired,
  heroText: PropTypes.string.isRequired,
}

export default Hero
