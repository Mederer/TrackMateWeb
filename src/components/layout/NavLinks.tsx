import { useAuth0 } from "@auth0/auth0-react";

export default function NavLinks() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const loggedInLinks = (
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
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
      <li onClick={() => loginWithRedirect()}>
        <a href="#">Login</a>
      </li>
      <li>
        <a href="#">Sign Up</a>
      </li>
    </ul>
  );

  return isAuthenticated ? loggedInLinks : loggedOutLinks;
}
