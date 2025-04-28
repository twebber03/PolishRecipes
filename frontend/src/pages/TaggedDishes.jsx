import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../style/Saved.css";

function TaggedDishes() {

    const location = useLocation();
    const recipeResults = location.state?.results?.result || [];
    // console.log("Results are ", recipeResults)
    // console.log("Type of results:", typeof recipeResults)


    return (
        <div className="tagged-dish-page">
            <h1>Tagged Search Results</h1>
            {recipeResults.length === 0 ? (
                <p>No recipes found based on your criteria. Please refine your search and try again.</p>
            ) : (
                <div className="dishes-row">
                    {recipeResults.map((dish) => (
                        <div className="dish-card" key={dish.ID}>
                            <Link to={`/tagSearch/${dish.RecipeName}`}>
                                <img src={dish.ImageURL} alt={dish.RecipeName} className="image" />
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TaggedDishes;
