import { createGlobalStyle } from "styled-components"
import normalize from "./normalize"
import { gilroyRegular } from "../styles"

const GlobalStyles = createGlobalStyle`
	${normalize}

	body {
		${gilroyRegular}
	}

	main {
		padding: 40px 0 0 0;
	}
`

export default GlobalStyles
