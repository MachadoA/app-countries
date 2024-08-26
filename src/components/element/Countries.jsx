import React from 'react';
import imgBrasil from '../../data.json';
import styles from './Countries.module.css';

export default function Countries() {
  return (
    <article className={styles.article}>
        <img src="https://flagcdn.com/w320/br.png" alt="flag of {data}" />
        <div className={styles.text}>
            <h2>Country</h2>
            <p><span>Population:</span> data search</p>
            <p><span>Region:</span> data search</p>
            <p><span>Capital:</span> data search</p>
        </div>
    </article>
  )
}
