import { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';

function BookForm() {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

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
        const newBook = { title, author, genre, description, image };
        addBook(newBook);
        setTitle('');
        setAuthor('');
        setGenre('');
        setDescription('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
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

export default BookForm;