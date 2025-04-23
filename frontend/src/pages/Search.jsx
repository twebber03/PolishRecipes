import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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


  const [category, setCategory] = useState("Any")
  // TODO: note for angela -- figure out how to get the count of the ingredient list if you want to implement this tag 
  // const [ingredientCount, setIngredients] = useState("Any")
  const [servingSize, setServings] = useState("Any")
  const [originType, setOrigin] = useState("Any")

  const fetchRecipes = () => {
    const tags = buildTags()
    // after fetching the data send and navigate to another page 
    fetch(`http://127.0.0.1:8000/api/tag_dish/?${tags}`)
      .then(res => res.json())
      .then(data => {
        console.log("Fetch Successful!");
        navigate("/results", { state: { results: data } });
      })
      .catch(err => console.error("Tag Search failed", err));
  }

  const buildTags = () => {
    const queryParams = new URLSearchParams();
    if (category !== "Any") queryParams.append("category", category);
    // TODO: not sure how i feel about this tag but will try to play with this 
    // if (ingredientCount !== "Any") queryParams.append("ingredient_count", ingredientCount);
    if (servingSize !== "Any") queryParams.append("servings", servingSize);
    if (originType !== "Any") queryParams.append("originType", originType);

    return queryParams.toString()
  };


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
          <select id="meal-type" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Any</option>
            <option>Breakfast</option>
            <option>Brunch</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Dessert</option>
            <option>Snack</option>
            <option>Side Dish</option>
          </select>
        </div>
        {/* <div className="dropdown-group">
          <label htmlFor="ingredient-count">Ingredient Count</label>
          <select id="ingredient-count" value={ingredientCount} onChange={(e) => setIngredients(e.target.value)}>
            <option>Any</option>
            <option>{"<10"}</option>
            <option>{">10"}</option>
          </select>
        </div> */}
        <div className="dropdown-group">
          <label htmlFor="servings">Serving Size</label>
          <select id="serving" value={servingSize} onChange={(e) => setServings(e.target.value)}>
            <option>Any</option>
            <option>{"1-4"}</option>
            <option>{"5-8"}</option>
            <option>{"9-12"}</option>
            <option>{"13-19"}</option>
            <option>{"20+"}</option>
          </select>
        </div>
        <div className="dropdown-group">
          <label htmlFor="origin">Origin</label>
          <select id="origin" value={originType} onChange={(e) => setOrigin(e.target.value)}
          >
            <option>Any</option>
            <option>Poland</option>
            <option>Ukraine</option>
            <option>Solvakia</option>
            <option>Hungary</option>
            <option>Czech Republic</option>
            <option>Europe</option>
          </select>
        </div>
        <button onClick={fetchRecipes}>Search by Tag</button>
      </div>

    </div>
  );
}

export default Search;
