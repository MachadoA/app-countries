import { useContext } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import styles from './Details.module.css';

export default function Details() {
    const { name } = useParams();
    const { filteredData, countryNames } = useContext(DataContext);
    const navigate = useNavigate();

    const decodedName = decodeURIComponent(name);
    const details = filteredData.find(item => item.name === decodedName );
    
    if (!details) {
        return <h2>Country not found</h2>;
    }

    const { name: countryName, nativeName, flags, population, region, capital, subregion, topLevelDomain, currencies, languages, borders } = details;

    function goBack() {
        navigate(-1);
    }

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
                        <div>
                            <p><span>Native Name:</span> {nativeName}</p>
                            <p><span>Population:</span> {population}</p>
                            <p><span>Region:</span> {region}</p>
                            <p><span>Sub Region:</span> {subregion}</p>
                            <p><span>Capital:</span> {capital}</p>
                        </div>
                        <div className={styles.secondInformation}>
                            <p><span>Top Level Domain:</span> {topLevelDomain}</p>
                            <p><span>Currencies:</span> {currencies.map(currency => currency.name).join(', ')}</p>
                            <p><span>Languages:</span> {languages.map(language => language.name).join(', ')}</p>
                        </div>
                    </div>
                    <div className={styles.informationBorders}>
                        <h3>Border Countries:</h3>
                        <div className={styles.listGrid}>
                            {borders && borders.length > 0 ? (
                                borders.map(border => (
                                    <button className={styles.borderCountry} key={border}>
                                        <Link
                                          key={border}
                                          className={styles.country}
                                          to={`/details/${encodeURIComponent(countryNames[border])}`}
                                        >
                                            {countryNames[border] || border}
                                        </Link>
                                    </button>
                                ))
                            ) : (
                                <p>No border countries available</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
