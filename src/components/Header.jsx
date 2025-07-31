import { useContext } from "react";
import { useAuth } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const { user, logout, login } = useAuth();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h2>Welcome {user ? user.name : "Guest"}</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <button onClick={user ? logout : login}>
        {user ? "Logout" : "Login"}
      </button>
    </header>
  );
}

export default Header;
