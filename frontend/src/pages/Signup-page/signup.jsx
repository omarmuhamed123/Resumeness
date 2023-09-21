import React from "react";
import './signup.css';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSafe from "../../Hooks/safeHook";



export default function Signup() {
    useSafe();
    const navigate = useNavigate();
    const [values, setvalues] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPass: ""
    });
    const handleinput = (e) => {
        setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const [error, setError] = useState('');
    function signup(e) {
        e.preventDefault();
        const jsonData = JSON.stringify(values);
        axios.post('http://localhost:3003/signup', jsonData, {
            headers: {
                "Content-Type": "application/json", // Set the content type to JSON
            }
        },).then((res) => { setError(''); navigate('/login') })
            .catch((err) => {
                setError(err.response.data.error)
            })
    }

    return (
        <form onSubmit={signup}>
            <div className="signup-container">
                <h1 className="item" style={{ fontSize: 30 }}>Sign Up</h1>
                <input className="item" type="text" name="fullname" placeholder="Full name:" onChange={handleinput} required />
                <input className="item" type="text" name="email" placeholder="Email:" onChange={handleinput} required />
                <input className="item" type="password" name="password" placeholder="Password:" onChange={handleinput} required />
                <input className="item" type="password" name="confirmPass" placeholder="Confrim password:" onChange={handleinput} required />
                <button className="item" type="submit">Sign Up</button>
                <span>{error}</span>
                <span className="item">Do you want login?<Link to='/login' style={{ textDecoration: 'none', fontWeight: 'bold' }}>Login</Link></span>
            </div>
        </form>
    );
}