import Filters from '../features/Filters';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Filters />
    </nav>
  )
}
