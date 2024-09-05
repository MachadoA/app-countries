import { Link } from 'react-router-dom'; 
import styles from './Countries.module.css';

export default function Countries({name, flags, population, region, capital}) {
return (
  <>
    <article className={styles.article}>
        <Link to={`/details/${name}`}>
          <img className={styles.flag} src={flags} alt={`flag of ${name}`} />
          <div className={styles.text}>
            <h2>{name}</h2>
            <p><span>Population:</span> {population}</p>
            <p><span>Region:</span> {region}</p>
            <p><span>Capital:</span> {capital}</p>
          </div>
        </Link>
    </article>
  </>
)
}
