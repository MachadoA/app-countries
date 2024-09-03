import { IoMoonOutline } from "react-icons/io5";
import styles from '../header/Header.module.css';
import { useState, useEffect } from "react";

export default function Mode() {
    const [typeMode, setTypeMode] = useState(false);

    useEffect(() => {
        if (typeMode) {
            document.body.classList.add('dark-mode');
            document.querySelector('header')?.classList.add('darkMode');
            document.querySelector('select')?.classList.add('darkMode');
            document.querySelector('aside')?.classList.add('darkMode');
            document.querySelector('input')?.classList.add('darkMode');
            document.querySelectorAll('article').forEach(article => {
                article.classList.add('darkMode');
            });
            document.querySelectorAll('button').forEach(button => {
                button.classList.add('darkMode');
            });
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelector('header')?.classList.remove('darkMode');
            document.querySelector('select')?.classList.remove('darkMode');
            document.querySelector('aside')?.classList.remove('darkMode');
            document.querySelector('input')?.classList.remove('darkMode');
            document.querySelectorAll('article').forEach(article => {
                article.classList.remove('darkMode');
            });
            document.querySelectorAll('button').forEach(button => {
                button.classList.remove('darkMode');
            });
        }
    }, [typeMode]);


    function handleMode() {
        setTypeMode(prevMode => !prevMode);
    }

    return (
        <button
            className={`${styles.btnHeader} ${typeMode ? styles.darkMode : ''}`}
            onClick={handleMode}
        >
            <IoMoonOutline /> {typeMode ? "Light Mode" : "Dark Mode"}
        </button>
    );
}
