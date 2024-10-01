import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { UserProvider } from './context/index';
import HomePage from './pages/Home';
import DetailPage from './pages/Detail';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
            <Route path="/danh-sach-san-pham" element={<HomePage />} />
            <Route path="/chi-tiet-:mn" element={<DetailPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
