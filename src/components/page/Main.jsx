import Countries from '../element/Countries';
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

import styles from './Main.module.css';

export default function Main({data}) {
    const { filteredData } = useContext(DataContext);

  return (
    <main>
        <section className={styles.sectionMain}>
            {filteredData.map((item) => {
                const { name, flags, population, region, capital} = item;
                return (
                    <Countries 
                        key={name}
                        name={name}
                        flags={flags.png}
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
