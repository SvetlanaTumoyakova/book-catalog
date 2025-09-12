import { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState(() => {
        const savedBooks = localStorage.getItem("books");
        return savedBooks ? JSON.parse(savedBooks) : [];
    });

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);

    const addBook = (newBook) => {
        setBooks((prevBooks) => [
            ...prevBooks,
            {
                id: `${Date.now()}`,
                ...newBook,
            },
        ]);
    };

    const editBook = (id, updatedBook) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === id ? { ...book, ...updatedBook } : book
            )
        );
    };

    const removeBook = (id) => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    };

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;