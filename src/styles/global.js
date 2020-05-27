import { createGlobalStyle } from "styled-components"
import normalize from "./normalize"
import { gilroyRegular, gilroyBold } from "../styles"

const GlobalStyles = createGlobalStyle`
	${normalize}

	html {
		box-sizing: border-box;
	  }
	  
	*,
	:before,
	:after {
	box-sizing: inherit;
	}

	body {
		${gilroyRegular};
		overflow-x: hidden;
	}

	strong {
		${gilroyBold};
	}

	p {
		margin: 24px 0;
	}

	.resize-animation-stopper * {
		animation: none !important;
		transition: none !important;
	  }
`

export default GlobalStyles
