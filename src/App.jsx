import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import GlobalContext from "./contexts/GlobalContext";
import FilmsPage from "./pages/FilmsPage";
import DefaultLayout from "./layouts/DefaultLayout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [films, setFilms] = useState([]);
  const [series, setSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("amityville");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Chiamata API per i film
        const filmRes = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=15eff770124af6cb0018e75397b366e9&query=${searchTerm}`
        );

        // Chiamata API per le serie TV
        const seriesRes = await axios.get(
          `https://api.themoviedb.org/3/search/tv?api_key=15eff770124af6cb0018e75397b366e9&language=it_IT&query=${searchTerm}`
        );

        setFilms(filmRes.data.results);
        setSeries(seriesRes.data.results);
      } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <GlobalContext.Provider value={{ films, series, setSearchTerm }}>
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