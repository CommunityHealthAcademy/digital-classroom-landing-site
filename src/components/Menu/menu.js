import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { color, above, gilroyMedium } from "../../styles"

const Menu = ({ open, setOpen }) => {
  return (
    <>
      <MenuButton type="button" onClick={() => setOpen(!open)} open={open}>
        <div />
        <div />
        <div />
      </MenuButton>
      <MenuNav>
        <MenuNavList open={open}>
          <MenuNavListItem>
            <GatsbyLink to="/our-mission">Our Mission</GatsbyLink>
          </MenuNavListItem>
          <MenuNavListItem>
            <GatsbyLink to="/our-members">Our Members</GatsbyLink>
          </MenuNavListItem>
          <MenuNavListItem>
            <ExternalLink href="https://covid-19library.org/">
              COVID-19 Library
            </ExternalLink>
          </MenuNavListItem>
          <MenuNavListItem>
            <ExternalLink href="#">Community Health Academy</ExternalLink>
          </MenuNavListItem>
        </MenuNavList>
      </MenuNav>
    </>
  )
}

const MenuButton = styled.button`
  width: 40px;
  height: 32px;
  padding: 6px 6px 0 6px;
  border: none;
  background: transparent;
  display: block;
  z-index: 999;

  div {
    width: 33px;
    height: 4px;
    background: ${color.fullBlack};
    margin-bottom: 5px;
    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

    &:nth-of-type(1) {
      opacity: 1;
      transform: ${props =>
        props.open ? "rotate(45deg) translate(-2px, -1px)" : "none"};
    }

    &:nth-of-type(2) {
      opacity: ${props => (props.open ? "0" : "1")};
      transform: ${props =>
        props.open ? "rotate(0deg) scale(0.2, 0.2)" : "none"};
    }

    &:nth-of-type(3) {
      transform-origin: 0% 100%;
      transform: ${props =>
        props.open ? "rotate(-45deg) translate(0, -1px)" : ""};

}


    }
  }

  ${above.desktop`
    display: none;
  `}
`

const MenuNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: ${color.white};
  z-index: 99;

  ${above.desktop`
    position: relative;
  `}
`

const MenuNavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: ${props => (props.open ? "20px" : "0")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  clear: both;
  height: ${props => (props.open ? "100vh" : "0")};
  transition: max-height 0.2s ease-out;

  ${above.desktop`
      flex-direction: row;
     max-height: 240px;
     overflow: visible;
     align-items: center;
  `}
`

const MenuNavListItem = styled.li`
  margin-right: 58px;
`

const GatsbyLink = styled(Link)`
  ${gilroyMedium};
  text-decoration: none;
  color: ${color.fullBlack};

  &:hover,
  &:active {
    color: ${color.red};
  }
`

const ExternalLink = styled.a`
  ${gilroyMedium};
  text-decoration: none;
  color: ${color.fullBlack};

  &:hover,
  &:active {
    color: ${color.red};
  }
`

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default Menu
