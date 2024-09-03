import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Main from './Main';
import Nav from './Nav';
import { DataProvider } from '../../context/DataContext';
import data from '../../data.json';
import Details from './Details';

function Layout() {
    const location = useLocation();
    const isDetailsPage = location.pathname.startsWith('/country/');

    return (
        <>
            {!isDetailsPage && <Nav />}
            <Routes>
                <Route path="/" element={<Main data={data} />} />
                <Route path="/country/:name" element={<Details />} />
            </Routes>
        </>
    );
}

export default function Container() {
    return (
        <DataProvider>
            <Router>
                <Layout />
            </Router>
        </DataProvider>
    );
}
