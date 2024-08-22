import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Adjust the import path as needed

const ThemeToggleSwitch = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme}
            />
            <span className={`slider ${isDarkMode ? 'round' : ''}`}></span>
        </label>
    );
};

export default ThemeToggleSwitch;
