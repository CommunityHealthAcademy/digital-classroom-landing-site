import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { above, color, gilroySemiBold } from "../../styles"

const Hero = ({ heroImg }) => (
  <HeroContainer tag="div" fluid={heroImg}>
    <Heading>
      <HeroText>
        <span>Our Mission</span>
      </HeroText>
    </Heading>
  </HeroContainer>
)

const HeroContainer = styled(BackgroundImage)`
  background-size: cover;
  padding: 36px 28px 0 28px;
  height: 200px;
  border-bottom: 8px solid ${color.teal};
  ${above.desktop`
  padding: 108px 140px 0 140px;
  height: 320px;
`};
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;

  ${above.desktop`
  max-width: 640px;
  margin: 0 auto;
`}
`

const HeroText = styled.h1`
  ${gilroySemiBold};
  font-size: 30px;
  color: ${color.white};
  text-align: center;

  span {
    background-color: ${props => props.theme.bgColor};
    padding: 4px 12px;
  }
`

Hero.propTypes = {
  heroImg: PropTypes.object.isRequired,
}

export default Hero
