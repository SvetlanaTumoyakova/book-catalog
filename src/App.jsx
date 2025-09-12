import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookCreate from './components/BookCreate';
import BookEdit from './components/BookEdit';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Navigation from './components/Navigation';
function App() {
    return (
        <Router>
            <Navigation/>
            <div className="container my-5">
                <Routes>
                    <Route path="/create" element={<BookCreate />} />
                    <Route path="/edit/:id" element={<BookEdit />} />
                    <Route path="/books" element={<BookList />} />
                    <Route path="/details/:id" element={<BookDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;