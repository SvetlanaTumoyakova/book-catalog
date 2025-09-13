import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(() => {
        const savedUser = localStorage.getItem("currentUser");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const savedStatus = localStorage.getItem("status");
        return savedStatus ? JSON.parse(savedStatus) : false;
    });
    
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [currentUser]);
    
    useEffect(() => {
            localStorage.setItem("status", JSON.stringify(isAuthenticated));
        }, [isAuthenticated]);
    
            const register = async ({ username, email, password }) => {
        await fetch("http://localhost:5173/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });
    };

    const login = async ({ username, email, password }) => {
        const response = await fetch("http://localhost:5173/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });
        if (response.ok) {
            const data = await response.json();
            setCurrentUser(data.user);
            setIsAuthenticated(true);
            localStorage.setItem("token", data.token);
            navigate("/");
        }
    };

     const logout = () => {
        setCurrentUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("token");
    };

     return (
            <AuthContext.Provider
                value={{ currentUser, isAuthenticated, register, login, logout }}
            >
                {children}
            </AuthContext.Provider>
        );
}

export { AuthContext, AuthProvider };