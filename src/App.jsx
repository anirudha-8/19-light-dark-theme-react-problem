import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home.jsx";

const App = () => {
	return (
		<ThemeProvider>
			<Home />
		</ThemeProvider>
	);
};
export default App;
