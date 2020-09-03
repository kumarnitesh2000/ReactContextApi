import React,{useState,useContext} from 'react';
import {MyContext} from './Context';
function AddNames() {
    const [name,setName] = useState(''); 
    const [names,setNames] = useContext(MyContext);
    const updateName = (e) =>{
        setName(e.target.value);
    }
    const addName = (e) =>{
        e.preventDefault();
        setNames(prevNames => [...prevNames, {"name":name}]);
        setName('');
    }
    return (
        <form onSubmit={addName}>
            <input type="text" name="name" value={name} onChange={updateName}>
            </input>
            <button type="submit">Submit </button>
        </form>
    );
}

export default AddNames;