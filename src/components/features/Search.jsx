import { IoIosSearch } from "react-icons/io";
import styles from "./Search.module.css";
import { useContext, useEffect, useState, useRef } from "react";
import { DataContext } from "../../context/DataContext";

export default function Search() {
  const [searchCountry, setSearchCountry] = useState("");
  const { filterCountry } = useContext(DataContext);

  const debounceTimerRef = useRef(null);

  useEffect(() => {
    debounceTimerRef.current = setTimeout(() => {
      filterCountry(searchCountry.trim());
    }, 300);
    return () => clearTimeout(debounceTimerRef.current);
  }, [searchCountry, filterCountry]);

  function handleSearch(e) {
    setSearchCountry(e.target.value);
  }

  return (
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
  );
}
