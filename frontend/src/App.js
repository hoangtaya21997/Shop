import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/index";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";
import LoginPage from "./pages/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isAuthenticated = localStorage.getItem('token') !== null;
  const role = localStorage.getItem('role');
  console.log(isAuthenticated)
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/san-pham-:mn" element={<DetailPage />} />
        </Routes>
      </Router>
      <ToastContainer/>
    </UserProvider>
  );
}

export default App;
