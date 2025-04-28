import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/App.css";

function Home() {
    const [dishes, setDishes] = useState([]);
    const [index, setIndex] = useState(-1);
    const [size, setSize] = useState(10);
    const [direction, setDirection] = useState("right");
    const [k, setK] = useState(0);
    const navigate = useNavigate();
    const [mainDisplayedDish, setMainDisplayedDish] = useState(null);
    const [intervalId, setIntervalId] = useState(null);
    const autoInterval = 5000; // 5 seconds

    // fetch dishes 
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/main_carousel?index=${index}&size=${size}&direction=${direction}`)
            .then((res) => res.json())
            .then((data) => {
                setDishes(data["recipes"]);
                setK(data["recipes"].length);
                setMainDisplayedDish(data["recipes"].slice(0, 3)[1]);
            })
            .catch((err) => console.error("Request failed", err));
    }, [index, size, direction]);

    const nextDish = () => {
        setDirection("right");
        setIndex(prev => prev + 1);
    };

    const prevDish = () => {
        setDirection("left");
        setIndex(prev => prev - 1);
    };

    const getDisplayedDishes = () => {
        return dishes.slice(0, 3); // grabs the first 3
    };

    const goToDishPage = (name) => {
        
        navigate(`/dish/${name.toLowerCase()}`);
    };

    // auto move to the next dish on interval
    useEffect(() => {
        const interval = setInterval(() => {
            nextDish(); 
        }, autoInterval);

        setIntervalId(interval);

        return () => clearInterval(interval);
    }, []);

    // pause auto on hover
    const handleMouseEnter = () => {
        clearInterval(intervalId); 
    };

    const handleMouseLeave = () => {
        const interval = setInterval(() => {
            nextDish();
        }, 10000);
        setIntervalId(interval); // restart interval when hover ends
    };

    return (
        <div className="carousel-container">
            <h1>Top {size} Dishes of the Day</h1>
            <div
                className="carousel"
                onMouseEnter={handleMouseEnter} // pause on hover
                onMouseLeave={handleMouseLeave} // resume when mouse leaves
            >
                <button onClick={prevDish} className="nav-button left">
                    ❮
                </button>

                <div className="dishes">
                    {getDisplayedDishes().map((dish, i) => (
                        <div
                            key={dish.ID}
                            className={`dish ${i === 1 ? "center" : "side"}`}
                            onClick={() => {
                                if (i === 1) {
                                    goToDishPage(dish.RecipeName);
                                } else {
                                    i === 0 ? prevDish() : nextDish();
                                }
                            }}
                        >
                            <img src={dish.ImageURL} alt={dish.RecipeName} />
                        </div>
                    ))}
                </div>

                <button onClick={nextDish} className="nav-button right">
                    ❯
                </button>
            </div>
            {mainDisplayedDish && (
                <h2 className="dish-name">
                    {mainDisplayedDish.RecipeName}
                </h2>
            )}

        </div>
    );
}

export default Home;
