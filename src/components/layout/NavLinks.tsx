import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function NavLinks() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const loggedInLinks = (
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li onClick={() => logout()}>
        <a href="#">Logout</a>
      </li>
    </ul>
  );

  const loggedOutLinks = (
    <ul>
      <li>
        <Link to="/">Welcome</Link>
      </li>
      <li onClick={() => loginWithRedirect()}>
        <Link to="/#">Login / Signup</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );

  return isAuthenticated ? loggedInLinks : loggedOutLinks;
}
