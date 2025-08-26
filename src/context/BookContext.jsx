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
        setBooks((prevBooks) => [...prevBooks, newBook]);
    };

    const removeBook = (index) => {
        setBooks((prevBooks) => prevBooks.filter((_, i) => i !== index));
    };

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {children}
        </BookContext.Provider>
    );
};
