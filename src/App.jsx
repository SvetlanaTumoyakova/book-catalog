import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BookProvider } from "./context/BookContext"; 
import BookCreate from "./pages/Book/BookCreate";
import BookEdit from "./pages/Book/BookEdit";
import BookList from "./pages/Book/BookList";
import BookDetails from "./pages/Book/BookDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="container my-5">
                    <BookProvider>
                        <Routes>
                            <Route
                                path="/create"
                                element={
                                    <ProtectedRoute>
                                        <BookCreate />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/edit/:id"
                                element={
                                    <ProtectedRoute>
                                        <BookEdit />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/books"
                                element={
                                    <ProtectedRoute>
                                        <BookList />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/details/:id"
                                element={
                                    <ProtectedRoute>
                                        <BookDetails />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </BookProvider>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;