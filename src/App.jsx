import "./App.css";
import { ThemeProvider } from "react";
import Home from "./pages/Home";

function App() {
	return (
		<ThemeProvider>
			<Home />
		</ThemeProvider>
	);
}

export default App;
