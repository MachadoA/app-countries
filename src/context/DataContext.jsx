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
        document.body.classList.toggle('dark-mode', isDarkMode);
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

