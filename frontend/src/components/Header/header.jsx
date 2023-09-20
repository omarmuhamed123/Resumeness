import React from "react";
import './header.css';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    function goHome() { navigate('/'); }
    function goHistory() { navigate('/history'); }
    function goSignout() { localStorage.setItem('token', ''); navigate('/login'); }
    return (
        <nav className="header">
            <h1 style={{ fontFamily: 'cursive', fontSize: 40, color: 'red' }}>Resumeness</h1>
            <div style={{ display: 'inherit' }}>
                <h6 className="item" onClick={goHome}>Home</h6>
                <h6 className="item" onClick={goHistory}>History</h6>
                <h6 className="item" onClick={goSignout}>Sign Out</h6>
            </div>
        </nav>
    );
}