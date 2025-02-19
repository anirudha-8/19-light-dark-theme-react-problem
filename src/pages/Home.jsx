import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div>
			<h1>{theme.toUpperCase()} MODE</h1>
			<button
				onClick={toggleTheme}
				style={{
					padding: "10px 20px",
					fontSize: "16px",
					cursor: "pointer",
					border: "none",
					background: theme === "light" ? "#000" : "#fff",
					color: theme === "light" ? "#fff" : "#000",
					borderRadius: "5px",
					marginTop: "10px",
				}}
			>
				Change Theme
			</button>
		</div>
	);
};
export default Home;
