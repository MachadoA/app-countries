import React from 'react';
import Main from './Main';
import Nav from './Nav';
import { DataProvider } from '../../context/DataContext';
import data from '../../data.json';

export default function Container(){
    return(
        <DataProvider>
            <Nav />
            <Main data={data} />
        </DataProvider>

    )
}