import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { above } from "../../styles"
import LogoImg from "../../images/Red-Logo.svg"
import Menu from "../Menu/menu"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <HeaderContainer>
      <Logo to="/">
        <Img src={LogoImg} alt="COVID-19 Digital Classroom logo" />
      </Logo>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  padding: 20px 28px 14px 28px;
  display: flex;
  align-items: center;

  ${above.desktop`
    max-width: 1024px;
    flex-direction: row;
    margin: 0 auto;
  `}

  ${above.desktopLarge`
    max-width: 1440px;
    padding: 20px 140px 14px 140px;
  `}
`
const Logo = styled(Link)`
  ${above.desktop`
    margin-right: 60px;
  `}

  ${above.desktopLarge`
    margin-right: 108px;
  `}
`

const Img = styled.img`
  width: 170px;
`

export default Header
