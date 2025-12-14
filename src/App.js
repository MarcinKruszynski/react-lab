import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [title, setTitle] = useState('Wall-E');


    let message = '';     
    
    if (title.length <= 5)
      message = "tekst jest za krótki";
    else if (title.length >= 15)
      message = "tekst jest za długi";
    else
      message = "tekst ma odpowiednia długość";  

    function handleChange(event) {
        setTitle(event.target.value);
        //console.log(event.target.value);              
    }

    return (
      <div>
          <h1>My favourite movies to watch</h1>
          <h2>My favourite movie for today is {title}</h2>
          {
            title.length > 0 && <div>{message}</div>
          }
          <input type="text" onChange={handleChange}/>
      </div>
    );
}

export default App;
