import { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookItem from './BookItem';

function BookList() {
    const { books, error } = useContext(BookContext); 

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="row">
            {books.map((book) => (
                <div className="col-md-4" key={book.id}>
                    <BookItem book={book} />
                </div>
            ))}
        </div>
    );
}

export default BookList;