import { useContext, useEffect } from 'react';
import { DataContext } from '../../context/DataContext';
import Header from '../header/Header';

function Layout({ children }) {
  const { isDarkMode } = useContext(DataContext);

  useEffect(() => {
    const body = document.body;
    body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
