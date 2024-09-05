import { useEffect, useState } from "react";
import { createContext } from "react";
import dataJson from "../data.json";

export const DataContext = createContext();

export function DataProvider({children}){
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setData(dataJson);
        setFilteredData(dataJson);
    },[]);

    const filterData = (filterRegion) => {
       if(filterRegion === ''){
        setFilteredData(data);
       } else {
        const result = data.filter(item => item.region.toLowerCase() === filterRegion.toLowerCase())
        setFilteredData(result);
       }
    }

    const filterCountry = (filterPlace) =>{
        if(filterPlace === ''){
            setFilteredData(data);
    }else {
        const result = data.filter(item => 
            item.name.toLowerCase().includes(filterPlace.toLowerCase())
        );
        setFilteredData(result);
        console.log('result:', result);
    }
    }

    const countryNames = filteredData.reduce((acc, country) => {
        acc[country.alpha3Code] = country.name;
        return acc;
    }, {});

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.querySelector('header')?.classList.add('darkMode');
            document.querySelector('select')?.classList.add('darkMode');
            document.querySelector('aside')?.classList.add('darkMode');
            document.querySelector('input')?.classList.add('darkMode');
            document.querySelectorAll('article').forEach(article => {
                article.classList.add('darkMode');
            });
            document.querySelectorAll('button').forEach(button => {
                button.classList.add('darkMode');
            });
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelector('header')?.classList.remove('darkMode');
            document.querySelector('select')?.classList.remove('darkMode');
            document.querySelector('aside')?.classList.remove('darkMode');
            document.querySelector('input')?.classList.remove('darkMode');
            document.querySelectorAll('article').forEach(article => {
                article.classList.remove('darkMode');
            });
            document.querySelectorAll('button').forEach(button => {
                button.classList.remove('darkMode');
            });
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    }

    return (
        <DataContext.Provider value={{
            data, filteredData, filterData, filterCountry, countryNames, isDarkMode, toggleTheme
        }}>
            {children}
        </DataContext.Provider>
    );
}

