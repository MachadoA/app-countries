import { useContext, useState } from 'react';
import styles from './Filter.module.css';
import { DataContext } from '../../context/DataContext';

export default function Filter() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const { filterData } = useContext(DataContext);

  function handleChange(e) {
    const region = e.target.value;
    setSelectedRegion(region);
    filterData(region);
    console.log("selected region:", e.target.value);
  }

  return (
    <div className={styles.filter}>
      <label htmlFor='region' style={{  display:'none' }}>Filter by Region</label>
      <select name="region" id='region' aria-label="Select your region" value={selectedRegion} onChange={handleChange} className={styles.selectFilter}>
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}
