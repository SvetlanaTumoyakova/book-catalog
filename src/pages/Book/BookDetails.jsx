import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

function BookDetails() {
    const { id } = useParams();
    const { books, removeBook } = useContext(BookContext);
     const navigate = useNavigate();

    const book = books.find((b) => b.id === String(id));

    if (!book) {
        return <p>Книга не найдена.</p>;
    }

    const handleDelete = () => {
        if (window.confirm("Вы уверены, что хотите удалить эту книгу?")) {
            removeBook(id);
            navigate('/books');
        }
    };

    return (
        <div className="container">
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <p><strong>Жанр:</strong> {book.genre}</p>
            <p><strong>Описание:</strong> {book.description}</p>
            <img src={book.image} alt="обложка книги" />
            <div className="mt-3">
                <Link to="/books" className="btn btn-secondary me-2">Назад к списку книг</Link>
                <Link to={`/edit/${book.id}`} className="btn btn-warning me-2">Редактировать</Link>
                <button className="btn btn-danger" onClick={handleDelete}>Удалить</button>           
            </div>
        </div>
    );
}

export default BookDetails;