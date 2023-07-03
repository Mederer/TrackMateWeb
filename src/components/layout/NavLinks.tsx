import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function NavLinks() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const loggedInLinks = (
    <ul>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/jobs">Jobs</Link>
      </li>
      <li>
        <Link to="/jobs/create">Create Job</Link>
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
