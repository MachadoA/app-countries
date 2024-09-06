import React, { useState, useContext, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import { DataContext } from '../../context/DataContext';
import styles from './Filters.module.css';

export default function Filters() {
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const { filterCountry, filterData } = useContext(DataContext);

  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"]; 

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      filterCountry(searchCountry.trim());
    }, 300); 

    return () => clearTimeout(debounceTimer); 
  }, [searchCountry, filterCountry]);

  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
  };

  const handleSelectedRegion = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    filterData(region);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.search} id="search">
        <IoIosSearch />
        <input
          type="search"
          placeholder="Search for a country..."
          value={searchCountry}
          onChange={handleSearch}
          className={styles.inputSearch}
        />
      </div>

      <div className={styles.filter} id='filter'>
        <label htmlFor="region" style={{ display: 'none' }}>Filter by Region</label>
        <select
          name="region"
          id="region"
          aria-label="Select your region"
          value={selectedRegion}
          onChange={handleSelectedRegion}
          className={styles.selectFilter}
        >

          <option value="">Filter by Region</option>
          {regions.slice(1).map(region => (
            <option key={region.toLowerCase()} value={region.toLowerCase()}>{region}</option>
          ))}
        </select>
      </div>
    </nav>
  );
}
