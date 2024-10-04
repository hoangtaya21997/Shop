import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/index";
import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";
import LoginPage from "./pages/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import ProductEditPage from './pages/ProductEdit'

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute requiredRole="all"><HomePage /></ProtectedRoute>} />
          <Route path="/login" element={<ProtectedRoute requiredRole="all"><LoginPage /></ProtectedRoute>}/>
          <Route path="/products-edit" element={<ProtectedRoute requiredRole="admin"><ProductEditPage /></ProtectedRoute>}/>
          <Route path="/product/:id" element={<ProtectedRoute requiredRole="all"><DetailPage /></ProtectedRoute>} />
        </Routes>
      </Router>
      <ToastContainer />
    </ProductProvider>
  );
}

export default App;
