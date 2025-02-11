import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/homePage/HomePage';
import { Registration } from './components/signUp/Registration';
import { About } from './components/about/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;