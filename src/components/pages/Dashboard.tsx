import { useAuth0 } from "@auth0/auth0-react";

export default function Dashboard() {
  const { isAuthenticated, user } = useAuth0();

  if (!isAuthenticated || !user) {
    return <div>Unauthorized</div>;
  }

  return <div>Welcome {user.name}</div>;
}
