import { createGlobalStyle } from "styled-components"
import normalize from "./normalize"
import { gilroyRegular, gilroyBold } from "../styles"

const GlobalStyles = createGlobalStyle`
	${normalize}

	body {
		${gilroyRegular}
	}

	strong {
		${gilroyBold};
	}

	p {
		margin: 24px 0;
	}
`

export default GlobalStyles
