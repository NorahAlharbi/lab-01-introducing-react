import React, { useState } from 'react';
import Greeting from './components/Greeting';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
const [name, setName] = useState([]);    
    return(
        <>
        <input
        onChange = {({target: {value}}) => setName(value)}
        placeholder = "Enter your name please"
        />
        
        <Greeting name = {name}/>
        </>
    );
};

export default App;