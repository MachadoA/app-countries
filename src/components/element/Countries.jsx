import styles from './Countries.module.css';

export default function Countries({name, flag, population, region, capital}) {
return (
  <>
    <article className={styles.article}>
        <img className={styles.flag} src={flag} alt={`flag of ${name}`} />
        <div className={styles.text}>
          <h2>{name}</h2>
          <p><span>Population:</span> {population}</p>
          <p><span>Region:</span> {region}</p>
          <p><span>Capital:</span> {capital}</p>
        </div>
    </article>
  </>
)
}
