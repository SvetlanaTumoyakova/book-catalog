
function BookItem({ book }) {
    return (
        <div className="card">
            <img src={book.image} className="card-img-top" alt="обложка книги" />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                <p className="card-text"><strong>Жанр:</strong> {book.genre}</p>
                <p className="card-text"><strong>Описание:</strong> {book.description}</p>
            </div>
        </div>
    );
}

export default BookItem;