import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodoWrapper } from './components/TodoWrapper';
import { ContactUs } from './components/ContactUs';
import { AboutUs } from './components/AboutUs';
import { Link } from 'react-router-dom';

// شريط التنقل Navbar
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Todo List
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <Router>
      {/* شريط التنقل Navbar يظهر في كل الصفحات */}
      <Navbar />

      {/* التوجيه بين الصفحات */}
      <Routes>
        <Route path="/" element={<TodoWrapper />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
