import { Link } from "react-router-dom";

const Header = () => {
  <div>
    <p>Logo Vinted</p>

    <Link to="/Signup">
      <button>S'inscrire</button>
    </Link>
    <Link to="Signup">
      {" "}
      <button>Connexion</button>
    </Link>
    <Link to="Deconnection">
      {" "}
      <button>Deconnexion</button>
    </Link>
  </div>;
};

export default Header;
