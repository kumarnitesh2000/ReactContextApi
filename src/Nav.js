import React,{useContext} from 'react';
import {MyContext} from './Context';

function Nav() {
    //const values = useContext(MyContext);
    const [names,setNames] = useContext(MyContext);
    return (
        <div>
          Total Students : {names.length}
        </div>
    );
}

export default Nav;