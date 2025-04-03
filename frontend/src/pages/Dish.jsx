import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import '../style/Dish.css'

const flipInterval = 5000;

function Dish() {
  // get dish name
  const { name } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [autoFlip, setAutoFlip] = useState(true);
  const [resetKey, setResetKey] = useState(0); // used to tract user interaction

  // backend call to get the dish with the cooresponding name (placeholder for now)
  const [dishes, setDish] = useState([
    {
      ID: 1, 
      Popularity: 100, 
      RecipeName: "Red Barszcz", 
      Description: "Red Barszcz is a traditional Polish beet soup, often served with dumplings (uszka) or as a clear broth. It has deep cultural significance, especially during Christmas Eve dinner (Wigilia) in Poland. The dish is known for its vibrant red color and tangy flavor, commonly enjoyed throughout Eastern Europe.",
      Ingredients: ["Beets", "Garlic", "Onion", "Carrot", "Celery", "Bay leaves", "Allspice", "Salt", "Pepper", "Lemon juice", "Sour cream (optional)"], 
      Directions: "1. Peel and chop the beets, onion, carrot, and celery.\n" + "2. In a large pot, bring water to a boil and add the chopped vegetables.\n" + "3. Add bay leaves, allspice, salt, and pepper. Simmer for 45 minutes.\n" + "4. Strain the liquid to get a clear broth (or blend for a thicker soup).\n" + "5. Add lemon juice to enhance the tangy flavor.\n" + "6. Serve hot with sour cream or dumplings (uszka) for extra flavor.",
      Category: "Lunch",
      Nutrients: {"calories": "180 kcal", "carbohydrateContent": "35 g", "cholesterolContent": "20 mg", "fiberContent": "4 g", "proteinContent": "6 g", "saturatedFatContent": "2 g", "sodiumContent": "550 mg", "sugarContent": "8 g", "fatContent": "8 g", "unsaturatedFatContent": "3 g"},
      Servings: "4 servings",
      ImageURL: "/assets/placeholders/dish1.jpg",
    },
      { ID: 2, RecipeName: "Rosół", ImageURL: "/assets/placeholders/dish2.jpg" },
      { ID: 3, RecipeName: "Pierogi", ImageURL: "/assets/placeholders/dish3.jpg" },
      { ID: 4, RecipeName: "Gulasz", ImageURL: "/assets/placeholders/dish4.jpg" },
      { ID: 5, RecipeName: "Mizeria", ImageURL: "/assets/placeholders/dish5.jpg" },
  ]);

  const dish = dishes.find(search => search.RecipeName.toLowerCase() === name.toLowerCase());

  // error 404
  if (!dish) {
    return <div className="dish-not-found">Dish not found!</div>;
  }

  // default values if missing
  const {
    ID = 0,
    Popularity = 0,
    RecipeName = name,
    Description = "No cultural info available",
    Ingredients = ["No ingredients available"],
    Directions = "No recipe available",
    Category = "Unknown",
    Nutrients = {'calories': '0 kcal', 'carbohydrateContent': '0 g', 'cholesterolContent': '0 mg', 'fiberContent': '0 g', 'proteinContent': '0 g', 'saturatedFatContent': '0 g', 'sodiumContent': '0 mg', 'sugarContent': '0 g', 'fatContent': '0 g', 'unsaturatedFatContent': '0 g'},
    Servings = "0 servings",
    Location = "Unknown location",
    ImageURL = "/assets/placeholders/default.jpg",
  } = dish;

  // toggle favorite status
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleFlip = () => {
    setFlipped(prev => !prev);
    setResetKey(prev => prev + 1); // Changes key, resetting the interval
  };

  useEffect(() => {
    if (!autoFlip) return;
  
    const interval = setInterval(() => {
      setFlipped(prev => !prev);
    }, 5000);
  
    return () => clearInterval(interval);
  }, [resetKey, autoFlip]); // resets when resetKey changes or autoFlip is toggled
  

return (
    <div className="container">
      <div className="header">
        <div className="title">
          <h1>{dish.RecipeName}</h1>
          <h3>{"Type: " + Category}</h3>
        </div>
        <button onClick={toggleFavorite} className="favorite-button">
          {isFavorite ? "★ Favorited" : "☆ Favorite"}
        </button>
      </div>
  
      <div className="main-content">
        <div className="grid">
          {/* Flipping Image Box */}
          <div className={`flip-box ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={ImageURL} alt={RecipeName} className="image" />
              </div>
              <div className="flip-box-back">
                <p>{Location}</p> 
                {/* replace with a map api that can display map given a location*/}
                <button className="disable-flip-btn" onClick={(e) => {
                    e.stopPropagation(); // Prevent accidental flipping when clicking button
                    setAutoFlip(prev => !prev);
                  }}>
                  <img 
                    src= "/assets/icons/lock.png"
                    alt={autoFlip ? "L" : "U"} 
                    className={`lock-icon ${autoFlip ? "unlocked" : "locked"}`}
                  />
                </button>
              </div>
            </div>
          </div>
  
          {/* Other Boxes */}
          <div className="box-scroll">
            <h3>Ingredients</h3>
            <ul>
              {Ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="box-scroll">
            <h3>Culture</h3>
            <p>{Description}</p>
          </div>

          <div className="box-scroll">
            {dish.Servings && <span className="serving-size">{Servings}</span>}
            <h3>Nutrition</h3>
            {dish.Nutrients && Object.keys(Nutrients).length > 0 ? ( // make sure the dict exists
              <ul>
                {Object.entries(Nutrients).map(([key, value], index) => (
                  <li key={index}>
                    <strong>
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}:
                    </strong> 
                    {" " + value}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No nutrition data available.</p> 
            )}
          </div>

        </div>
  
        <div className="recipe-box">
          <h3>Recipe</h3>
          <p style={{ whiteSpace: "pre-line" }}>{Directions}</p>
        </div>
      </div>
    </div>
  );
}

export default Dish;
