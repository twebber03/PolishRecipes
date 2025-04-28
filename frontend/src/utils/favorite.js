// favorite util using local storage for now

const FAVORITES_KEY = "favorites";

export function getFavorites() {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
}

export function addFavorite(dish) {
    const favorites = getFavorites();
    if (!favorites.find(fav => fav.ID === dish.ID)) {
      favorites.push({
        ...dish,
        favoritedAt: new Date().toISOString(), 
        //favoritedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),  // use only for testing
      });
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
}

export function removeFavorite(dishID) {
  let favorites = getFavorites();
  favorites = favorites.filter(fav => fav.ID !== dishID);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function isFavorite(dishID) {
  const favorites = getFavorites();
  return favorites.some(fav => fav.ID === dishID);
}

export function clearFavorites() {
    localStorage.removeItem(FAVORITES_KEY);
}
  
//clearFavorites();
