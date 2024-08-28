import { useEffect, useState } from "react";
import { createContext } from "react";
import dataJson from "../data.json";

export const DataContext = createContext();

export function DataProvider({children}){
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

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

    return (
        <DataContext.Provider value={{
            data, filteredData, filterData, filterCountry
        }}>
            {children}
        </DataContext.Provider>
    );
}

