import { IoIosSearch } from "react-icons/io";
import styles from "./Search.module.css";
import { useContext, useEffect, useState, useRef } from "react";
import { DataContext } from "../../context/DataContext";

export default function Search() {
  const [searchCountry, setSearchCountry] = useState("");
  const { filterCountry } = useContext(DataContext);

  const previousSearchCountry = useRef("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (previousSearchCountry.current !== searchCountry.trim()) {
        previousSearchCountry.current = searchCountry.trim(); 
        filterCountry(searchCountry.trim()); 
      }
    }, 300); 

    return () => clearTimeout(debounceTimer); 
  }, [searchCountry, filterCountry]);

  function handleSearch(e) {
    setSearchCountry(e.target.value);
    console.log(e.target.value);
  }

  return (
    <aside className={styles.search}>
      <IoIosSearch />
      <input 
        type="search"
        id="search" 
        placeholder="Search for a country..." 
        value={searchCountry} 
        onChange={handleSearch}
        className={styles.inputSearch}
        autoComplete="address-country"
      />
    </aside>
  );
}
