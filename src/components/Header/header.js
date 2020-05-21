import React from "react"
import styled from "styled-components"
import { color, above, gilroyMedium } from "../../styles"
import LogoImage from "../../images/Red-Logo.svg"

const Header = () => (
  <HeaderContainer>
    <Logo>
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
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  max-width: 1160px;
  padding: 20.4px 28px 14.8px 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`
const Logo = styled.div`
  width: 150px;
  ${above.desktop`
    margin-right: 108.5px;
  `}
`

const Img = styled.img`
  width: 100%;
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
  margin-right: 59px;
`

const NavLink = styled.a`
  ${above.desktop`
    text-decoration: none;
    ${gilroyMedium}
    font-size: 14px;
    color: ${color.otherBlack};
  `}

  &:hover {
    color: ${color.orange};
  }
`

export default Header
