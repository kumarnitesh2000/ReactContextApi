import React ,{useState, createContext} from 'react';

export const MyContext = createContext();

export const ContextProvider = (props) => {

    const [names,setNames] =  useState([{"name":"nitesh"},{"name":"anmol"}]);

    return (
        <MyContext.Provider value={[names,setNames]}>
                {props.children}
        </MyContext.Provider>
    );
}
