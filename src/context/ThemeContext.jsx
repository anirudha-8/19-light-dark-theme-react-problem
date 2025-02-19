import { useEffect, useState } from "react";
import { createContext } from "react";

// create context for theme
export const ThemeContext = createContext();

// create theme provider
export const ThemeProvider = ({ children }) => {
	// useState for theme
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "light";
	});

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	// function to toggle the theme
	const toggleTheme = () =>
		setTheme((preTheme) => (preTheme === "light" ? "dark" : "light"));

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
