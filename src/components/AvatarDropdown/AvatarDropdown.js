import React, { useState, useRef, useEffect } from 'react';
import './AvatarDropdown.css';

const AvatarDropdown = ({ username, avatarUrl, onLogout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="avatar-dropdown" ref={dropdownRef}>
            <div className="avatar-dropdown-header" onClick={toggleDropdown}>
                <img src={avatarUrl} alt="Avatar" className="avatar" />
                <span className="username">{username}</span>
                <span className="dropdown-icon">&#9662;</span>
            </div>
            {dropdownOpen && (
                <div className="avatar-dropdown-menu">
                    <button onClick={onLogout} className="logout-button">Log Out</button>
                </div>
            )}
        </div>
    );
};

export default AvatarDropdown;
