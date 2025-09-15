import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { AuthContext } from "../../context/AuthContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username.trim() && password.trim()) {
            try {
                await login({ username, password });
                navigate("/books");
            } catch (error) {
                setError(error.message || "Ошибка входа. Пожалуйста, проверьте свои данные.");
            }
        } else {
            setError("Все поля обязательны для заполнения."); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group my-3">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Введите имя пользователя..."
                    className="form-control"
                />
            </div>
            <div className="form-group my-3">
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Введите пароль..."
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-outline-success mt-3">
                Войти
            </button>
        </form>
    );
}

export default Login;