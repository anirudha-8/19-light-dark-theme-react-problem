import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext.jsx";

const Home = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div>
			<h1>{theme.toUpperCase()} MODE</h1>
			<button onClick={toggleTheme}>Change Theme</button>
		</div>
	);
};
export default Home;
