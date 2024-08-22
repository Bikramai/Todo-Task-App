import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../context/ThemeContext';
import GTranslate from "../config/Gtranslator";
import ThemeToggleSwitch from "./ThemeToggleSwitch "; // Import the ThemeContext

const Header = () => {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);

    return (
        <ul className={`nav nav-pills p-3 mb-3 rounded-pill align-items-center ${isDarkMode ? 'bg-dark' : 'bg-white'}`}>
            <li className="nav-item">
                <img
                    src={`${process.env.PUBLIC_URL}/header.png`}
                    alt="Not Found"
                    style={{maxWidth: '50px', marginBottom: '2px'}}
                />
            </li>
            &nbsp;&nbsp;
            <li className="nav-item">
                <Link
                    to="/"
                    className={`nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2 ${!isDarkMode ? 'active' : ''}`}
                    id="all-category"
                >
                    <i className="icon-layers mr-1"/>
                    <span className="d-none d-md-block">All Tasks</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/in-progress-tasks"
                    className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2"
                    id="note-business"
                >
                    <i className="icon-briefcase mr-1"/>
                    <span className="d-none d-md-block">Pending</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/completed-tasks"
                    className="nav-link rounded-pill note-link d-flex align-items-center px-2 px-md-3 mr-0 mr-md-2"
                    id="note-social"
                >
                    <i className="icon-share-alt mr-1"/>
                    <span className="d-none d-md-block">Completed</span>
                </Link>
            </li>
            {/*<GTranslate/>*/}

            <li className="nav-item ml-auto">
                <Link
                    className="nav-link btn-primary rounded-pill d-flex align-items-center px-3"
                    id="add-notes"
                    to="/add-todo">
                    <i className="icon-note m-1"/>
                    <span className="d-none d-md-block font-14">Add Tasks</span>
                </Link>
            </li>

            <li className="nav-item ml-3 mt-2">
                <ThemeToggleSwitch/>
            </li>
        </ul>
    );
};

export default Header;
