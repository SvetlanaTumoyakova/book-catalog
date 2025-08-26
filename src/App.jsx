import { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState(() => {
        const savedBooks = localStorage.getItem("books");
        return savedBooks ? JSON.parse(savedBooks) : [];
    });

    useEffect(() => {
        const savedBooks = localStorage.getItem("books");
        if (savedBooks) {
            setBooks(JSON.parse(savedBooks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);

    return (
        <div className="container my-5">
            <BookForm setBooks={setBooks} />
            <BookList books={books} />
        </div>
    );
}

export default App;