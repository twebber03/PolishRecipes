import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import '../style/App.css'

// home serves as a display of top k dishes 
function Home() {
    // set top k count e.g. 10
    //const [k, setK] = useState(10)

    //carousel = [];

    // get backend stuff here by popping off k dishes from priority queue (placeholder for now)
    const [dishes, setDishes] = useState([
        { id: 1, name: "Red Barszcz", image: "/assets/placeholders/dish1.jpg" },
        { id: 2, name: "Rosół", image: "/assets/placeholders/dish2.jpg" },
        { id: 3, name: "Pierogi", image: "/assets/placeholders/dish3.jpg" },
        { id: 4, name: "Gulasz", image: "/assets/placeholders/dish4.jpg" },
        { id: 5, name: "Mizeria", image: "/assets/placeholders/dish5.jpg" },
    ]);

    // when page loads, request the lowest k, greatest k, and greatest k - 1
    /*
    fetch(api/main_carousel?size=${size}&action=${"load"})
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.error("Request failed", err))
    */

    // get top k count (placeholder)
    const [k, setK] = useState(dishes.length)

    // current index of carousel
    const [index, setIndex] = useState(0);

    const nextDish = () => {
        setIndex((prevIndex) => (prevIndex + 1) % k);
    };

    const prevDish = () => {
        setIndex((prevIndex) => (prevIndex - 1 + k) % k);
    };

    const getDisplayedDishes = () => {
        return [
        dishes[(index - 1 + k) % k], // prev dish
        dishes[index], // center dish (main focus)
        dishes[(index + 1) % k], // next dish
        ];
    };

    const navigate = useNavigate(); 
    // navigate to dish page based on its id
    const goToDishPage = (name) => {
        navigate(`/dish/${name.toLowerCase()}`); 
    };    
    
    // JSX goes here
    return ( 
    <>
        <div className="carousel-container">
        <h1>Top {k} Dishes of the Day</h1>
        <div className="carousel">
            <button onClick={prevDish} className="nav-button left">❮</button>

            <div className="dishes">
            {getDisplayedDishes().map((dish, i) => (
                <div
                key={dish.id}
                className={`dish ${i === 1 ? "center" : "side"}`} // center dish is larger
                onClick={() => {
                    if (i === 1) {
                      goToDishPage(dish.name); // navigate to dish's page
                    } else {
                      i === 0 ? prevDish() : nextDish(); // move the side dish to the center
                    }
                  }}
                >
                <img src={dish.image} alt={dish.name} />
                </div>
            ))}
            </div>

            <button onClick={nextDish} className="nav-button right">❯</button>
        </div>
        {/* <h2 className="dish-name">{"#" + dishes[index].id + ": " + dishes[index].name}</h2> */} 
        <h2 className="dish-name">{dishes[index].name}</h2>
        </div>
    </>
    )
  }
  
  export default Home;
  