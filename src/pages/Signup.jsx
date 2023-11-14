import { Form } from "react-router-dom";

const Signup = (manageToken) => {
  return (
    <form className="signupForm-container">
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
