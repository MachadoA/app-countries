import { useContext } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { useParams, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import styles from './Details.module.css';

export default function Details() {
    const { name } = useParams();
    const { filteredData } = useContext(DataContext);
    const navigate = useNavigate();

    const country = filteredData.find(item => item.name === name);
    if (!country) {
        return <h2>Country not found</h2>;
    }

    const { name: countryName, nativeName, flags, population, region, capital, subregion, topLevelDomain, currencies, languages, borders } = country;

    function goBack() {
        navigate(-1);
    }

    const threeBorders = borders.slice(0, 3);

    return (
        <div className={styles.container}>
            <button className={styles.goBack} onClick={goBack}>
                <FaArrowLeft />
                Back
            </button>
            <section className={styles.details}>
                <img src={flags.png} alt={countryName} />
                <div className={styles.description}>
                    <h2>{countryName}</h2>
                    <div className={styles.column}>
                        <article>
                            <p><span>Native Name:</span> {nativeName}</p>
                            <p><span>Population:</span> {population}</p>
                            <p><span>Region:</span> {region}</p>
                            <p><span>Sub Region:</span> {subregion}</p>
                            <p><span>Capital:</span> {capital}</p>
                        </article>
                        <article className={styles.secondInformation}>
                            <p><span>Top Level Domain:</span> {topLevelDomain}</p>
                            <p><span>Currencies:</span> {currencies.map(currency => currency.name).join(', ')}</p>
                            <p><span>Languages:</span> {languages.map(language => language.name).join(', ')}</p>
                        </article>
                    </div>
                    <article className={styles.informationBorders}>
                        <h3>Border Countries:</h3>
                        {threeBorders.length > 0 ? (
                            threeBorders.map(border => (
                                <button key={border} className={styles.country}>
                                    {border}
                                </button>
                            ))
                        ) : (
                            <p>No border countries available</p>
                        )}
                    </article>
                </div>
            </section>
        </div>
    );
}
