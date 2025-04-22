import { useNavigate } from "react-router-dom";
import{ useState } from "react";
import '../style/Search.css'

function Search() {
  const [searchText, setSearchText] = useState("");

  // placeholder for now
  const [suggestions, setSuggestions] = useState(["Stuffed Cabbage Rolls", "Grandma's Polish Perogies", "Polish Noodles (Cottage Cheese and Noodles)", "Apple Banana Cupcakes", "Kielbasa and Cabbage", "Sweet Polish Sausage", "Rosol", "Pierogi (Polish Dumplings)", "Polish Meat and Potatoes", "Polish Cream Cheese Coffee Cake", "Zeberka Wieprzowe w Sosie Wlasnym (Polish Pork Ribs in Gravy)", "Cheese-Filled Easter Polish Bread (Babka)", "Sliwkowka Czyli Nalewka ze Sliwek (Polish Purple Plum Liqueur)", "Mazurek (Polish Easter Cake)", "Botwinka (Polish Vegetable Soup with Beet Greens)", "Polish Coffee Cake", "Szybka Surowka z Czerwonej Kapusty (Polish Red Cabbage Slaw)", "Faworki (Polish Chrusciki)", "Polish Applesauce Cake", "Drozdzowka (Polish Yeast Plum Cake)"]);

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
            {suggestions
              .filter((s) =>
                s.toLowerCase().startsWith(searchText.toLowerCase())
              )              
              .map((suggestion, index) => (
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