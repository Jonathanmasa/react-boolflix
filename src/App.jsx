// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import use state use effect
import { useState, useEffect } from "react";
// import axios
import axios from "axios";
// importiamo il contesto creato (Global)
import GlobalContext from './contexts/GlobalContext';
// import film page
import FilmsPage from "./pages/FilmsPage";
// import default layout
import DefaultLayout from './layouts/DefaultLayout';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=15eff770124af6cb0018e75397b366e9&query=amityville`
        );
        setFilm(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFilms();
  }, []);
  

  return (
    <>

        <>
          <GlobalContext.Provider value={{ film }}>
              <BrowserRouter>
                  <Routes>
                      <Route  element={<DefaultLayout />}>
                        <Route index element={<FilmsPage />} />
                      </Route>
                  </Routes>
              </BrowserRouter>
          </GlobalContext.Provider>
      </>
      
    </>
  )
}

export default App
