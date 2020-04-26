import { createGlobalStyle } from "styled-components/macro";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
	${normalize()}

	html {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		display: flex;
		flex-direction: column;
		flex: 1;
		margin: 0;
		padding: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'Nunito Sans', serif;
	}
	
	#root {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	
	h1,h2,h3,h4,h5,h6 {
		margin-top: 0;
	}
`;

export default GlobalStyle;
