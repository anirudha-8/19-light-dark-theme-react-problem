import { createContext, useState } from "react";

// create the context
export const ThemeContext = createContext();

// create the provider component
export function ThemeProvider({ children }) {
	// useState for theme
	const [theme, setTheme] = useState("light");

	// function to toggle between themes
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
