import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color, above, gilroyMedium } from "../../styles"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSectionContainer>
        <FooterSection aria-label="contact us">
          <FooterHeading>Contact Us</FooterHeading>
          <FooterLink href="mailto:info@covid-19digitalclassroom.org">
            info@covid-19digitalclassroom.org
          </FooterLink>
        </FooterSection>
        <FooterSection aria-label="social links">
          <FooterHeading>Follow Us</FooterHeading>
          <FooterList>
            <li>
              <FooterLink href="https://www.facebook.com/COVID19DigitalClassroom">
                Facebook
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://twitter.com/C19DigitalClass">
                Twitter
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://www.linkedin.com/company/covid-19-digitalclassroom">
                LinkedIn
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://www.youtube.com/channel/UCFsEU33sT-eRLQY-N5Vo3PQ/">
                YouTube
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://vimeo.com/covid19digitalclassroom">
                Vimeo Pro
              </FooterLink>
            </li>
          </FooterList>
        </FooterSection>
        <FooterSection aria-label="About COVID-19 Digital Classroom">
          <FooterHeading>About</FooterHeading>
          <FooterList>
            <li>
              <GatsbyLink to="/our-mission">Our Mission</GatsbyLink>
            </li>
            <li>
              <GatsbyLink to="/our-members">Our Members</GatsbyLink>
            </li>
          </FooterList>
        </FooterSection>
        <FooterSection aria-label="About COVID-19 Digital Classroom">
          <FooterHeading>More Links</FooterHeading>
          <FooterList>
            <li>
              <GatsbyLink to="/disclaimer">
                COVID-19 Library Disclaimer
              </GatsbyLink>
            </li>
          </FooterList>
        </FooterSection>
      </FooterSectionContainer>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  border-top: ${props => props.theme.footerBorder};

  ${above.desktop`
    margin: 0 auto;
  `};
`

const FooterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
  padding: 48px 28px 80px 28px;

  ${above.desktop`
    flex-direction: row;
    max-width: 1440px;
    margin: 0 auto;
    padding: 54px 140px 88px 140px;
    justify-content: center;
  `};
`

const FooterSection = styled.div`
  margin-bottom: 40px;

  ${above.desktop`
    margin-right: 144px;
  `}

  &:last-of-type {
    ${above.desktop`
      margin-right: 0;
    `}
  }
`

const FooterHeading = styled.h2`
  ${gilroyMedium};
  font-size: 16px;
  color: ${color.black};
  margin-bottom: 12px;
`

const FooterLink = styled.a`
  text-decoration: none;
  ${gilroyMedium};
  font-size: 14px;
  line-height: 28px;
  color: ${color.darkBlue};
`

const GatsbyLink = styled(Link)`
  text-decoration: none;
  ${gilroyMedium};
  font-size: 14px;
  line-height: 28px;
  color: ${color.darkBlue};
`

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

Footer.propTypes = {
  footerBorder: PropTypes.string.isRequired,
}

export default Footer
