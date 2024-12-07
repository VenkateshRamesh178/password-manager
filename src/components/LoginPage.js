import React, { useState } from "react";
import { encryptData } from "../utils/encryption";
import './loginPage.css';

const LoginPage = ({ setIsLoggedIn, setEncryptionKey }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const encryptionKey = password; // Use password as the encryption key
        const userData = { username, password };
        const encryptedData = encryptData(userData, encryptionKey);
        localStorage.setItem("userData", encryptedData);
        setEncryptionKey(encryptionKey);
        setIsLoggedIn(true);
    };

    return (
        <div className="login-container">
            <form class="login-form">
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
