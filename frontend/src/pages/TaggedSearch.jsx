import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { addFavorite, removeFavorite, isFavorite as checkIsFavorite } from '../utils/favorite';
import NotFound from "./NotFound";
import '../style/Dish.css';

const flipInterval = 5000;

function TaggedSearch() {
    // get dish name from url parameters
    const { name } = useParams();
    const [isFavorite, setIsFavorite] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [autoFlip, setAutoFlip] = useState(true);
    const [resetKey, setResetKey] = useState(0); // used to tract user interaction
    const [dish, setDish] = useState(null);

    useEffect(() => {

        // should this be a different fetch 
        // because main_dish is searching priority queue 
        fetch(`http://127.0.0.1:8000/api/recipe_dish?name=${name}`)
            .then((res) => res.json())
            .then((data) => {
                let result = data["result"];
                console.log(result);

                // handle 'Category' as it may come empty or without spaces
                if (typeof result.Category === "string") {
                    if (result.Category == "") {
                        result.Category = "Unknown"
                    }
                    else {
                        result.Category = result.Category.split(",").join(", ");
                    }
                }

                // handle 'Ingredients' as it comes in a string when it should be an array
                if (typeof result.Ingredients === "string") {
                    try {
                        result.Ingredients = JSON.parse(result.Ingredients.replace(/'/g, '"'));
                    } catch (e) {
                        result.Ingredients = ["No ingredients available"];
                    }
                } else if (!Array.isArray(result.Ingredients)) {
                    result.Ingredients = ["No ingredients available"];
                }

                // handle 'Nutrients' as it comes in a string when it should be a dict
                if (typeof result.Nutrients === "string") {
                    try {
                        result.Nutrients = JSON.parse(result.Nutrients.replace(/'/g, '"'));
                    } catch (e) {
                        result.Nutrients = {};
                    }
                } else if (typeof result.Nutrients !== "object" || result.Nutrients === null) {
                    result.Nutrients = {};
                }

                setDish(result);
            })
            .catch((err) => console.error("Request failed", err));
    }, [name]);

    useEffect(() => {
        if (!autoFlip) return;

        const interval = setInterval(() => {
            setFlipped(prev => !prev);
        }, 5000);

        return () => clearInterval(interval);
    }, [resetKey, autoFlip]); // resets when resetKey changes or autoFlip is toggled

    useEffect(() => {
        if (dish) {
            setIsFavorite(checkIsFavorite(dish.ID));
        }
    }, [dish]);

    const truncateText = (text, max = 40) => text.length > max ? text.slice(0, max - 3) + "..." : text;

    // error 404
    if (!dish) return <NotFound />;

    // default values if missing
    const {
        ID = 0,
        Popularity = 0,
        RecipeName = name,
        Description = "No description available",
        Ingredients = ["No ingredients available"],
        Directions = "No recipe available",
        Category = "Unknown",
        Nutrients = { 'calories': '0 kcal', 'carbohydrateContent': '0 g', 'cholesterolContent': '0 mg', 'fiberContent': '0 g', 'proteinContent': '0 g', 'saturatedFatContent': '0 g', 'sodiumContent': '0 mg', 'sugarContent': '0 g', 'fatContent': '0 g', 'unsaturatedFatContent': '0 g' },
        Servings = "0 servings",
        ImageURL = "/assets/placeholders/default.jpg",
        HistoryURL = "",
        History = "No history available",
        Origin = "No origin available",
    } = dish;

    // toggle favorite status
    const toggleFavorite = () => {
        if (isFavorite) {
            removeFavorite(ID);
        } else {
            addFavorite(dish);
        }
        setIsFavorite(!isFavorite);
    };

    const handleFlip = () => {
        setFlipped(prev => !prev);
        setResetKey(prev => prev + 1); // changes key, resetting the interval
    };

    return (
        <div className="container">
            <div className="header">
                <div className="title">
                    <h1 title={dish.RecipeName}>{truncateText(dish.RecipeName)}</h1>
                    <h3>{"Type: " + dish.Category}</h3>
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
                                <p>{Origin}</p>
                                {/* replace with a map api that can display map given a location*/}
                                <button className="disable-flip-btn" onClick={(e) => {
                                    e.stopPropagation(); // prevents accidental flipping when clicking button
                                    setAutoFlip(prev => !prev);
                                }}>
                                    <img
                                        src="/assets/icons/lock.png"
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
                        <p>{History}</p>
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

export default TaggedSearch;
