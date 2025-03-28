import { useParams } from "react-router-dom";
import { useState } from 'react'
import '../style/Dish.css'

function Dish() {
  // get dish name
  const { name } = useParams();

  // backend call to get the dish with the cooresponding name (placeholder for now)
  const [dishes, setDish] = useState([
      { id: 1, name: "Barszcz", image: "/assets/placeholders/dish1.jpg" },
      { id: 2, name: "Rosół", image: "/assets/placeholders/dish2.jpg" },
      { id: 3, name: "Pierogi", image: "/assets/placeholders/dish3.jpg" },
      { id: 4, name: "Gulasz", image: "/assets/placeholders/dish4.jpg" },
      { id: 5, name: "Mizeria", image: "/assets/placeholders/dish5.jpg" },
  ]);
  const dish = dishes.find(search => search.name.toLowerCase() === name.toLowerCase());

  // error 404
  if (!dish) {
    return <div className="dish-not-found">Dish not found!</div>;
  }

  return (
    <div className="dish-page">
      <div className="dish-header">
        <h1>{dish.name}</h1>
      </div>
      <div className="dish-image-container">
        <img className="dish-image" src={dish.image} alt={dish.name} />
      </div>
      <div className="dish-description">
        <p>Here is some detailed description about {dish.name}...</p>

      </div>
      <div className="back-button"> {/* for testing purposes */}
        <button onClick={() => window.history.back()} className="btn-back">Go Back</button>
      </div>
    </div>
  );
}

export default Dish;
