import { useState, useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

const Header = () => {
  const { setSearchTerm } = useContext(GlobalContext);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setSearchTerm(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="bg-dark text-white py-4">
      <div className="container d-flex  justify-content-between align-items-center">
        <img className="my-icon" src="/src/assets/Boolflix-logo2.svg" alt="logo boolflix" />
        <h1 className="mb-0 title">BoolFlix</h1>
        <div className="d-flex w-75 w-sm-auto mt-3 mt-sm-0">
          <input
            type="text"
            className="form-control me-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Cerca un film o una serie..."
          />
          <button
            className="btn btn-outline-light"
            onClick={handleSearch}
            aria-label="Cerca"
          >
            Cerca
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;