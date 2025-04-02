import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import About from './components/About';
import MovieDetail from './components/MovieDetail'
import Signin from "./components/Signin"
function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
