import { css } from "styled-components"

export const breakpoint = {
  mobile: "375px",
  desktop: "960px",
  desktopLarge: "1440px",
}

export const above = Object.keys(breakpoint).reduce((acc, name) => {
  acc[name] = (...args) => css`
    @media (min-width: ${breakpoint[name]}) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const below = Object.keys(breakpoint).reduce((acc, name) => {
  acc[name] = (...args) => css`
    @media (max-width: calc(${breakpoint[name]} - 1px)) {
      ${css(...args)}
    }
  `
  return acc
}, {})
