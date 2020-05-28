import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { color, above, gilroyMedium } from "../../styles"

const Menu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    let resizeTimer

    window.addEventListener("resize", () => {
      document.body.classList.add("resize-animation-stopper")
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper")
      }, 400)
    })
  }, [])

  return (
    <MenuContainer>
      <HamburgerButton
        role="button"
        aria-controls="navigation"
        aria-expanded={menuOpen}
        aria-label="navigation menu"
        onClick={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
      />
      <Navigation id="navigation" role="navigation" menuOpen={menuOpen}>
        <MenuList>
          <MenuListItem>
            <GatsbyLink to="/our-mission/">Our Mission</GatsbyLink>
          </MenuListItem>
          <MenuListItem>
            <GatsbyLink to="/our-members/">Our Members</GatsbyLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink href="https://covid-19library.org/">
              COVID-19 Library
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink href="https://lastmilehealth.org/what-we-do/community-health-academy/">
              Community Health Academy
            </MenuLink>
          </MenuListItem>
        </MenuList>
      </Navigation>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const HamburgerButton = styled.button`
  background: ${color.white};
  border: none;
  cursor: pointer;
  height: 40px;
  width: 50px;
  z-index: 3;

  &:before {
    border-bottom: 2px solid ${color.fullBlack};
    border-top: ${props =>
      props.menuOpen ? "transparent" : `2px solid ${color.fullBlack}`};
    content: "";
    display: block;
    height: 8px;
    margin: auto;
    width: 20px;
    transition: all 0.3s ease-in-out;
    transform: ${props =>
      props.menuOpen
        ? "rotate(45deg) translateX(1px) translateY(-2px)"
        : "none"};
  }

  &:after {
    background: ${color.fullBlack};
    content: "";
    display: block;
    height: 2px;
    margin: 4px auto 0 auto;
    width: 20px;
    transition: all 0.3s ease-in-out;
    transform: ${props =>
      props.menuOpen
        ? "rotate(-45deg) translateY(-6px) translateX(5px)"
        : "none"};
  }

  ${above.desktop`
    display: none;
  `}
`
const Navigation = styled.nav`
  height: 100%;
  width: 215px;
  position: absolute;
  z-index: 1;
  top: 79px;
  right: ${props => (props.menuOpen ? "0" : "-215px")};
  background-color: ${props =>
    props.menuOpen ? `${color.midGrey}` : `${color.white}`};
  overflow-x: hidden;
  transition: 0.5s ease;

  ${above.desktop`
    position: relative;
    top: 0;
    width: 100%;
    right: 0;
    transition: none;
  `}
`

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 40px 20px;

  ${above.desktop`
    flex-direction: row;
    margin: 16px;
  `}
`
const MenuListItem = styled.li`
  text-align: right;
  margin-bottom: 50px;
  ${above.desktop`
    margin: 0 60px 0 0;
  `}

  &:last-of-type {
    margin-right: 0;
  }
`

const GatsbyLink = styled(Link)`
  ${gilroyMedium};
  color: ${color.moreBlack};
  font-size: 17px;
  text-decoration: none;

  ${above.desktop`
    color: ${color.otherBlack};
    font-size: 14px;
  `}

  &:hover {
    color: ${color.red};
  }
`

const MenuLink = styled.a`
  ${gilroyMedium};
  color: ${color.moreBlack};
  font-size: 17px;
  text-decoration: none;

  ${above.desktop`
    color: ${color.otherBlack};
    font-size: 14px;
  `}

  &:hover {
    color: ${color.red};
  }
`

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
}

export default Menu
