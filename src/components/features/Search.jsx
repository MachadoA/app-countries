import { IoIosSearch } from "react-icons/io";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.search}>
        <IoIosSearch />
        <input type='search' placeholder='Search for a country...' />
    </div>
  )
}
