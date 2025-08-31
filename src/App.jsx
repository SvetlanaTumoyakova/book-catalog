import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navigation from './components/Navigation';

function App() {
    return (
        <Router>
            <Navigation />
            <div className="container my-5">
                <Routes>
                    <Route path="/" element={<BookForm />} />
                    <Route path="/books" element={<BookList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;