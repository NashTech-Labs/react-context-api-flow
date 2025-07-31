// Profile.jsx
import { useAuth } from "../contexts/AuthContext";

function Profile() {
  const { user } = useAuth();

  if (!user) return <p>Please log in to view profile.</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h3>👤 Profile</h3>
      <p>Name: {user.name}</p>
    </div>
  );
}

export default Profile;
