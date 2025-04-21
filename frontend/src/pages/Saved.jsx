import React, { useState, useEffect } from "react";
import { getFavorites, removeFavorite } from "../utils/favorite";
import { Link } from "react-router-dom";
import "../style/Saved.css";

function Saved() {
  const [groupedFavorites, setGroupedFavorites] = useState({});

  function formatDate(dateString) {
    //const date = new Date(dish.favoritedAt).toISOString().split("T")[0];
    const dateObj = new Date(dateString);
    return `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
  }  

  useEffect(() => {
    const favorites = getFavorites();
  
    const groups = favorites.reduce((acc, dish) => {
      const date = formatDate(dish.favoritedAt); 
      if (!acc[date]) acc[date] = [];
      acc[date].push(dish);
      return acc;
    }, {});
  
    // sort dates in descending order
    const sortedGroups = Object.fromEntries(
      Object.entries(groups).sort((a, b) => {
        const [dayA, monthA, yearA] = a[0].split("/").map(Number);
        const [dayB, monthB, yearB] = b[0].split("/").map(Number);
        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);
        return dateB - dateA; 
      })
    );
  
    setGroupedFavorites(sortedGroups);
  }, []);

  // for remove button 
  const handleRemove = (dishID) => {
    removeFavorite(dishID);
    const updatedFavorites = getFavorites();
  
    const groups = updatedFavorites.reduce((acc, dish) => {
      const date = formatDate(dish.favoritedAt); 
      if (!acc[date]) acc[date] = [];
      acc[date].push(dish);
      return acc;
    }, {});
  
    const sortedGroups = Object.fromEntries(
      Object.entries(groups).sort((a, b) => {
        const [dayA, monthA, yearA] = a[0].split("/").map(Number);
        const [dayB, monthB, yearB] = b[0].split("/").map(Number);
        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);
        return dateB - dateA; 
      })
    );
  
    setGroupedFavorites(sortedGroups);
  };  

  //console.log(groupedFavorites)

  return (
    <div className="saved-page">
      <h1>Your Saved Dishes</h1>
      {Object.keys(groupedFavorites).length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        Object.entries(groupedFavorites).map(([date, dishes]) => (
          <div className="date-section" key={date}>
            <h3>{date}</h3>
            <div className="dishes-row">
              {dishes.map((dish) => (
                <div className="dish-card" key={dish.ID}>
                  {/*<h4>{dish.RecipeName}</h4>*/}
                  {/*<Link to={`/dish/${dish.RecipeName}`}>View Recipe</Link>*/}
                  {/*<button onClick={() => handleRemove(dish.ID)}>Remove</button>*/}
                  {/*<img src={dish.ImageURL} alt={dish.RecipeName} className="image" />*/}
                  <Link to={`/dish/${dish.RecipeName}`}>
                    <img src={dish.ImageURL} alt={dish.RecipeName} className="image" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Saved;
