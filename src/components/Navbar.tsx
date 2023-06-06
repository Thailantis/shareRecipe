import React from 'react';

interface NavbarProps {
    onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
    return(
        <nav>
            <div className="logo">Recipe Logo</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/recipes">Recipes</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><button onClick={onLogout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
