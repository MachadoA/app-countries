import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import Header from '../header/Header';

function Layout({ children }) {
  const { isDarkMode } = useContext(DataContext);

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
