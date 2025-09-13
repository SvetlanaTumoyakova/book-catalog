import { useState, useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { useNavigate } from 'react-router-dom'; 

function BookCreate() {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (title.length < 3) {
            setError("Название должно содержать минимум 3 символа.");
            return;
        }
        if (author.length < 3) {
            setError("Автор должен содержать минимум 3 символа.");
            return;
        }
        if (genre.length < 3) {
            setError("Жанр должен содержать минимум 3 символа.");
            return;
        }
        if (description.length < 10) {
            setError("Описание должно содержать минимум 10 символов.");
            return;
        }
        if (!image) {
            setError("Пожалуйста, загрузите изображение.");
            return;
        }

        const newBook = { title, author, genre, description, image };
        addBook(newBook);
        setTitle('');
        setAuthor('');
        setGenre('');
        setDescription('');
        setImage('');

        navigate('/books');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Название" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Автор" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Жанр" value={genre} onChange={(e) => setGenre(e.target.value)} required />
            </div>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Описание" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div className="mb-3">
                <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Добавить книгу</button>
        </form>
    );
}

export default BookCreate;