import React from 'react';
import './App.css';
import {ContextProvider} from './Context';
import Nav from './Nav';
import Name from './Name';
import AddNames from './AddNames';

const App = () =>{


return(
<ContextProvider>
      <div className="App">
         <Nav />

         <Name />

         <AddNames />
      </div>
</ContextProvider>

);

}

export default App;
