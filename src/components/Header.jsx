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
    <header className="d-flex justify-content-between container">
      <h1 className="mb-5 mt-2">BoolFlix</h1>
      <div className="mb-5 mt-2">
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Cerca un film o una serie..."
        />
        <button onClick={handleSearch} aria-label="Cerca">
            Cerca
        </button>
      </div>
    </header>
  );
};

export default Header;