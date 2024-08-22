import React, { createContext, useState, useEffect } from 'react';

// Create a Theme Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Retrieve theme preference from localStorage
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        // Save theme preference to localStorage
        localStorage.setItem('theme', JSON.stringify(isDarkMode));
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode'; // Apply theme class to the body
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
