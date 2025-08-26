import BookItem from './BookItem';

function BookList({ books }) {
    return (
        <div className="container">
            <h2 className="mb-4">Список книг</h2>
            <div className="row">
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <div className="col-md-4 mb-3" key={index}>
                            <BookItem book={book} />
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