import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color, above, gilroyMedium } from "../../styles"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSectionContainer>
        <FooterSection aria-labelledby="footer-contact">
          <FooterHeading>Contact Us</FooterHeading>
          <FooterLink href="mailto:info@covid-19digitalclassroom.org">
            info@covid-19digitalclassroom.org
          </FooterLink>
        </FooterSection>
        <FooterSection aria-labelledby="footer-social-links">
          <FooterHeading>Follow Us</FooterHeading>
          <FooterList>
            <li>
              <FooterLink href="#">Twitter</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Website</FooterLink>
            </li>
          </FooterList>
        </FooterSection>
        <FooterSection aria-labelledby="footer-about">
          <FooterHeading>About</FooterHeading>
          <FooterList>
            <li>
              <FooterLink href="#">About COVID-19 Digital Classroom</FooterLink>
            </li>
            <li>
              <FooterLink href="#">How to use COVID-19 Library</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Creative Commons FAQs</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Resource Guidelines</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Content Review Process</FooterLink>
            </li>
          </FooterList>
        </FooterSection>
        <FooterSection aria-labelledby="footer-legal">
          <FooterHeading>Legal</FooterHeading>
          <FooterLink href="#">Terms and Privacy Policy</FooterLink>
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
    max-width: 1160px;
    margin: 0 auto;
    padding: 54px 140px 88px 140px;
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

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

Footer.propTypes = {
  footerBorder: PropTypes.string.isRequired,
}

export default Footer
