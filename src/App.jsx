import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Offer from "./pages/offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cookies from "js-cookie";

import Header from "./components/Header";

function App() {
  const tokenManagement = (token) => {
    if (token) {
      Cookies.set("navigationCookie", token, { expires: 3 });
    } else {
      Cookies.remove("navigationCookie");
    }
    return (
      <Router>
        <Header manageToken={manageToken} />
        <Routes>
          <Route path="/Login" element={<Login manageToken={manageToken} />} />
          <Route
            path="/Signup"
            element={<Signup manageToken={manageToken} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
      </Router>
    );
  };
}

export default App;
