import { createGlobalStyle } from "styled-components"
import normalize from "./normalize"
import { gilroyRegular } from "../styles"

const GlobalStyles = createGlobalStyle`
	${normalize}

	body {
		${gilroyRegular}
	}
`

export default GlobalStyles
