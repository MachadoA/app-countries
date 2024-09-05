import { Link } from 'react-router-dom';
import Theme from '../features/Theme';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <Theme />
    </header>
  )
}
