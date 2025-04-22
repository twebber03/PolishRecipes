import { useNavigate } from "react-router-dom";
import{ useState, useEffect } from "react";
import '../style/Search.css'

function Search() {
  const [searchText, setSearchText] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  // fetch autocomplete suggestions
  useEffect(() => {

    if (!searchText) {
      setSuggestions([]);
      return;
    }

    fetch(`http://127.0.0.1:8000/api/trie/?letter=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        const completedSuggestions = data.result.map(suffix => searchText + suffix);
        setSuggestions(completedSuggestions);
      })
      .catch((err) => console.error("Autocomplete fetch failed", err));
  }, [searchText]);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
  };

  const navigate = useNavigate(); 
  // navigate to dish page based on its id
  const goToDishPage = (name) => {
    navigate(`/dish/${name.toLowerCase()}`); 
  };    

  const handleSearch = () => {
    // send user to the next search page
    
    // for now, just send them directly to the dish page
    goToDishPage(searchText);
  };

  return (
    <div className="search-container">
      {/* LEFT SIDE */}
      <div className="search-left">
        <h2>Search by Name</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Type a dish name..."
            value={searchText}
            onChange={handleInputChange}
          />
          {searchText && (
            <button className="clear-btn" onClick={() => setSearchText("")}>
              ×
            </button>
          )}
          <button onClick={handleSearch}>Search</button>
        </div>

        {/* Autocomplete suggestions */}
        {searchText && (
          <div className="autocomplete-suggestions">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="autocomplete-box"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="search-right">
        <h2>Search by Tags</h2>
        <div className="dropdown-group">
          <label htmlFor="meal-type">Meal Type</label>
          <select id="meal-type">
            <option>Any</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Dessert</option>
          </select>
          <button>Search by Tag</button>
        </div>
      </div>
    </div>
  );
}

export default Search;