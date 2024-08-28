import { useState } from 'react';
import styles from './Filter.module.css';

export default function Filter() {
  const [selectedRegion, setSelectedRegion] = useState("");

  function handleChange(event) {
    setSelectedRegion(event.target.value);
    console.log("selected region:", event.target.value);
  }

  return (
    <select name="region" value={selectedRegion} onChange={handleChange} className={styles.filter}>
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  )
}
