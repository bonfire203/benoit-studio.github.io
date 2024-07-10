import logo from './logo.svg';
import Home from './pages/home';
import Work from './pages/work';
import About from './pages/about';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
