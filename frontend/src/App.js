import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Articles from './components/Articles';


const NotFound = () => <div>404 Not Found</div>;

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/articles">Articles</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
