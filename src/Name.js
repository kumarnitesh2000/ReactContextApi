import React,{useContext} from 'react';
import {MyContext} from './Context';

function Name() {
    const [names,setNames] = useContext(MyContext);
    //const value = useContext(MyContext);
    return (
        <div>
            {
                    names.map( name => (
                        <li>{name.name}</li>
    ))
            }    
        </div>
        
    );
}

export default Name;