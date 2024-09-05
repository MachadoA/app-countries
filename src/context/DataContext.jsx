import { createContext } from "react";
import { useEffect, useState } from "react";
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
        setFilteredData(
            filterRegion === ''
                ? data
                : data.filter(item => item.region.toLowerCase() === filterRegion.toLowerCase())
        );
    };

    const filterCountry = (filterPlace) => {
        setFilteredData(
            filterPlace === ''
                ? data
                : data.filter(item => item.name.toLowerCase().includes(filterPlace.toLowerCase()))
        );
    };

    const countryNames = filteredData.reduce((acc, country) => {
        acc[country.alpha3Code] = country.name;
        return acc;
    }, {});

    useEffect(() => {
        const elementsToUpdate = [
            { selector: 'body', className: 'dark-mode' },
            { selector: 'header', className: 'darkMode' },
            { selector: 'select', className: 'darkMode' },
            { selector: '#filter', className: 'darkMode' },
            { selector: '#search', className: 'darkMode' },
            { selector: 'input', className: 'darkMode' },
            { selector: 'article', className: 'darkMode' },
            { selector: 'button', className: 'darkMode' },
        ];

        elementsToUpdate.forEach(({ selector, className }) => {
            const element = document.querySelector(selector);
            if (element) {
                element.classList.toggle(className, isDarkMode);
            }
        });

        document.querySelectorAll('article').forEach(article => {
            article.classList.toggle('darkMode', isDarkMode);
        });

        document.querySelectorAll('button').forEach(button => {
            button.classList.toggle('darkMode', isDarkMode);
        });
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

