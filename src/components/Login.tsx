import React, { useState } from 'react';

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    />
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
