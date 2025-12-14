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
    
    const movies = [
      {title: "Wall-E"},
      {title: "Pulp Fiction"},
      {title: "Matrix"},
      {title: "1670"},
    ];

    return (
      <div>
          <ul>
              {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
          </ul>
          <h1>My favourite movies to watch</h1>
          <h2>My favourite movie for today is {title}</h2>
          {
            title.length > 0 && <div>{message}</div>
          }
          <input type="text" onChange={handleChange}/>
          <button onClick={() => alert(title)}>Pokaż tytuł filmu</button>          
      </div>
    );
}

export default App;
