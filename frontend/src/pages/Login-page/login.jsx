import React from "react";
import './login.css';
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSafe from "../../Hooks/safeHook";
import { resumeCont } from "../../App";



export default function Login() {
    const { setInform } = useContext(resumeCont);
    useSafe();
    useEffect(() => {
        setInform({
            fullname: '', address: '', phone: '', email: '', portfolio: '', linkedIn: '', degree: '', institution: '', graduate: '',
            skillData: [], langData: [], hobbData: [], experData: [], projData: []
        });
    }, [])
    const navigate = useNavigate();
    const [data, setData] = useState({ email: '', password: '' });
    const handleinput = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const [error, setError] = useState('');
    async function login(e) {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3003/login', data, {
                headers: {
                    "Content-Type": "application/json", // Set the content type to JSON
                }
            });
            setError('');
            localStorage.setItem('token', await res.data.token)
            navigate('/');

        } catch (err) {
            setError(await err.response.data.error)
        }
    }
    return (
        <form onSubmit={login} >
            <div className="login-container">
                <h1 className="item" style={{ fontSize: 30 }}>Login</h1>
                <input className="item" type="text" name="email" placeholder="Email:" onChange={handleinput} required />
                <input className="item" type="password" name="password" placeholder="Password:" onChange={handleinput} required />
                <button className="item" type="submit">Login</button>
                <span>{error}</span>
                <span className="item">Do you want sign up?<Link to='/signup' style={{ textDecoration: 'none', fontWeight: 'bold' }}>Sign Up</Link></span>
            </div>
        </form>
    );
}