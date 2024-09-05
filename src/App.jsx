import { DataProvider } from './context/DataContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/page/HomePage';
import Details from './components/page/Details';
import Header from './components/header/Header';

import './App.css';

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details/:name' element={<Details />} />
        </Routes>
      </Router>
    </DataProvider>
  )
}

export default App
