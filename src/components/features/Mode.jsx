import { IoMoonOutline } from "react-icons/io5";
import styles from '../header/Header.module.css';
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";


export default function Mode() {
    const {isDarkMode, toggleTheme} = useContext(DataContext);

    return (
        <button
            className={`${styles.btnHeader} ${isDarkMode ? styles.darkMode : ''}`}
            onClick={toggleTheme}
        >
            <IoMoonOutline /> {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
    );
}
