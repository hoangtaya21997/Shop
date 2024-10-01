import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/index";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";
import LoginPage from "./pages/Login";

function App() {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/san-pham-:mn" element={<DetailPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
