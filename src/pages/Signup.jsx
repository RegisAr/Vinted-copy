import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = (manageToken) => {
  const [email, setEmail] = (useState = "");
  const [username, setUsername] = (useState = "");
  const [password, setPassword] = (useState = "");
  const [newsLetter, setNewsletter] = (useState = false);
  const navigate = useNavigate();

  const manageSubmiit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email,
          username,
          password,
          newsletter: newsLetter,
        }
      );
      manageToken(response.data.token);
      navigate("/");
    } catch (error) {}
  };

  return (
    <form className="signupForm-container" onSubmit={manageSubmiit}>
      <h1>S'inscrire</h1>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <input type="checkbox" />
      <input type="submit" value="S'inscrire" />
    </form>
  );
};

export default Signup;
