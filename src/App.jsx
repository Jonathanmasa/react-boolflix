// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import use state use effect
import { useState, useEffect } from "react";
// import axios
import axios from "axios";
// importiamo il contesto creato (Global)
import GlobalContext from './contexts/GlobalContext';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [film, setFilm] = useState([]);

    // Fetching dei dati
    function fetchFilms() {
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=15eff770124af6cb0018e75397b366e9")
        .then((res) => 
          console.log(res.data)
          
        )
    }

    useEffect(fetchFilms, []);
  

  return (
    <>

        <>
          <GlobalContext.Provider value={{ film }}>
              <BrowserRouter>
                  <Routes>
                      <Route>
                         
                      </Route>
                  </Routes>
              </BrowserRouter>
          </GlobalContext.Provider>
      </>
      
    </>
  )
}

export default App
