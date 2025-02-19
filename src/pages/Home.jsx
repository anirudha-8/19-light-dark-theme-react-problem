import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div
			style={{
				background: theme === "light" ? "#fff" : "#333",
				color: theme === "light" ? "#000" : "#fff",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				transition: "all 0.3s ease",
			}}
		>
			<h1>{theme === "light" ? "LIGHT" : "DARK"} MODE</h1>
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
