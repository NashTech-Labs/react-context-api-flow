import Header from "./components/Header";
import Profile from "./components/Profile";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/theme.css";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Header />
        <Profile />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
