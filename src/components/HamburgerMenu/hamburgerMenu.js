import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { color } from "../../styles"

const Button = ({ open, setOpen }) => {
  return (
    <ButtonContainer
      type="button"
      aria-label="Menu"
      aria-controls="button"
      onClick={() => setOpen(!open)}
      open={open}
    >
      <div />
      <div />
      <div />
    </ButtonContainer>
  )
}

const HamburgerMenu = ({ open, setOpen }) => {
  return (
    <>
      <Button open={open} setOpen={setOpen} />
      {open && (
        <NavContainer>
          <NavList>
            <NavListItem>
              <Link to="/our-mission">Our Mission</Link>
            </NavListItem>
          </NavList>
        </NavContainer>
      )}
    </>
  )
}

const ButtonContainer = styled.button`
  width: 40px;
  height: 30px;
  background: none;
  border: none;
  z-index: 99;
  cursor: pointer;

  div {
    width: 100%;
    height: 3px;
    background: ${props => (props.open ? "#fff" : "#000")};
    margin: 6px auto;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

    &:first-child {
      transform-origin: 0% 0%;
      opacity: 1;
      transform: ${props =>
        props.open ? "rotate(45deg) translate(-2px, -1px)" : ""};
    }

    &:last-child {
      transform-origin: 0% 100%;
    }

    &:nth-of-type(2) {
      opacity: ${props => (props.open ? "0" : "1")};
      transform: ${props => (props.open ? "rotate(0deg) scale(0.2, 0.2)" : "")};
    }

    &:nth-of-type(3) {
      transform: ${props =>
        props.open ? "rotate(-45deg) translate(0, -1px)" : ""};
    }
  }
`

const NavContainer = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  background: ${color.teal};
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
`

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 20px;
`

const NavListItem = styled.li`
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: ${color.white};
  }
`

HamburgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default HamburgerMenu
