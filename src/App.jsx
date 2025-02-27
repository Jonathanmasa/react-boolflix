import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import GlobalContext from './contexts/GlobalContext';
import FilmsPage from "./pages/FilmsPage";
import DefaultLayout from './layouts/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [film, setFilm] = useState([]);
  const [searchTerm, setSearchTerm] = useState("amityville");

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=15eff770124af6cb0018e75397b366e9&query=${searchTerm}`
        );
        setFilm(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFilms();
  }, [searchTerm]);
  

  return (
    <GlobalContext.Provider value={{ film, setSearchTerm }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<FilmsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;