import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // route module
import './style/App.css'
import Navbar from "./Navbar"; 
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

// app serves as the main router for the application
function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
