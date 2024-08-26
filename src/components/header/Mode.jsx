import { IoMoonOutline } from "react-icons/io5";
import styles from './Header.module.css';
import { useState } from "react";

export default function Mode() {
    const [typeMode, setTypeMode] = useState(false);

    function handleMode() {
        setTypeMode(prevMode => !prevMode);

        if (!typeMode) {
            document.body.classList.add('dark-mode');
            document.querySelector('header').classList.add('darkMode');
            console.log(document.querySelector('header').classList); 
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelector('header').classList.remove('darkMode');
            console.log(document.querySelector('header').classList); 
        }
    }

    return (
        <button className={styles.btnHeader} onClick={handleMode}>
            <IoMoonOutline /> {typeMode ? "Light Mode" : "Dark Mode"}
        </button>
    )
}
