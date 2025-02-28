import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import { GlobalStyle } from "../src/style/global"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../src/style/theme/default"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</StrictMode>
)
