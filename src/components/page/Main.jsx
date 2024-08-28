import Countries from '../element/Countries';
import data from '../../data.json';
import styles from './Main.module.css';

export default function Main() {

  return (
    <main>
        <section className={styles.sectionMain}>
            {data.map((item) => {
                const { name, flag, population, region, capital} = item;
                return (
                    <Countries 
                        key={name}
                        name={name}
                        flag={flag}
                        population={population}
                        region={region}
                        capital={capital}
                    />
                )
            })}
        </section>
    </main>
  )
}
