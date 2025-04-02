import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
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
  