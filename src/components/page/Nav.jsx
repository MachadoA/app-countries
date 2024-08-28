import Search from '../features/Search';
import Filter from '../features/Filter';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Search />
      <Filter />
    </nav>
  )
}
