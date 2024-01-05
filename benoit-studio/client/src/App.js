import logo from './logo.svg';
import Home from './components/home';
import Work from './components/work';
import About from './components/about';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
