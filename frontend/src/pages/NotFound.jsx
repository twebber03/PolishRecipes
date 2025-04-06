import { useLocation } from "react-router-dom";

function NotFound() {
    const location = useLocation();
    const pathParts = location.pathname.split('/'); 
    const searchTerm = pathParts[2]; 

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>404 - Page Not Found</h1>
            <p>
                {searchTerm
                ? `Dish "${searchTerm}" not found.`
                : "Oops! The page you are looking for does not exist."}
            </p>
            <button 
                onClick={() => window.history.back()} 
                style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px"
                }}>
                Go Back
            </button>
      </div>
    );
  }
  
  export default NotFound;
  