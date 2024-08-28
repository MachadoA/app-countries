import React from 'react'; 
import { FaArrowLeft } from "react-icons/fa6";
import styles from './Details.module.css';

export default function Details() {
    function goBack(){
        console.log('clicou')
        // retornar a pagina principal
    }

  return (
    <div className={styles.container}>
        <button className={styles.goBack} onClick={goBack}>
            <FaArrowLeft />
            Back
        </button>
        <section className={styles.details}>
            <img src="https://flagcdn.com/w320/bz.png" alt="" />
            <div className={styles.description}>
                <h2>Name</h2>
                <article>
                    <p><span>Native Name:</span> population</p>
                    <p><span>Population:</span> region</p>
                    <p><span>Region:</span> capital</p>
                    <p><span>Sub Region:</span> capital</p>
                    <p><span>Capital:</span> capital</p>
                </article>
                <article className={styles.secondInformation}>
                    <p><span>Top Level Domain:</span> population</p>
                    <p><span>Currencies:</span> region</p>
                    <p><span>Languages:</span> capital</p>
                </article>
                <article>
                    <h3>Border Countries:</h3>
                    <button className={styles.country}>Country</button>
                </article>
            </div>
        </section>
    </div>
  )
}
