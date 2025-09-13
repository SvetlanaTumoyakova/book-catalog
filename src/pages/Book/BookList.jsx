import { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookItem from './BookItem';
import { Link } from 'react-router-dom';

function BookList() {
    const { books } = useContext(BookContext);

    return (
        <div className="container">
            <Link to="/create" className="btn btn-primary mb-3">Добавить новую книгу</Link>
            <div className="row">
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <div className="col-md-4 mb-3" key={index}>
                            <BookItem book={book} /> {}
                        </div>
                    ))
                ) : (
                    <p>Нет добавленных книг.</p>
                )}
            </div>
        </div>
    );
}

export default BookList;