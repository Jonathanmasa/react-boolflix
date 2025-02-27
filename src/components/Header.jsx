import { useState, useContext } from "react";
import GlobalContext from '../contexts/GlobalContext';

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
        <header>
            <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="cerca un film..."
            />
            <button onClick={handleSearch} aria-label="Cerca film">
                cerca
            </button>
        </header>
    );
};

export default Header;