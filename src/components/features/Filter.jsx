import { useContext, useState } from 'react';
import styles from './Filter.module.css';
import { DataContext } from '../../context/DataContext';

export default function Filter() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const { filterData } = useContext(DataContext);

  const handleChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    filterData(region);
  };

  const regions = ["", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className={styles.filter}>
      <label htmlFor="region" style={{ display: 'none' }}>Filter by Region</label>
      <select
        name="region"
        id="region"
        aria-label="Select your region"
        value={selectedRegion}
        onChange={handleChange}
        className={styles.selectFilter}
      >
        <option value="">Filter by Region</option>
        {regions.slice(1).map(region => (
          <option key={region.toLowerCase()} value={region.toLowerCase()}>{region}</option>
        ))}
      </select>
    </div>
  );
}
