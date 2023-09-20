import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import './home.css';
import useToken from "../../Hooks/customHook";


export default function Home() {
    useToken();
    return (
        <>
            <Header />
            <div className="home-item">
                <div className="box">
                    <h3 style={{ fontFamily: 'cursive', fontSize: 30, color: 'red' }}>Create resume</h3>
                    <h5 style={{ fontSize: 20 }}>There is a simple test for you to get your information for your resume which help you to arrange resume structure</h5>
                    <Link style={{ textDecoration: 'none' }} to={'/contact'}><div>Let's Start</div></Link>
                </div>
                <img src={require('./../../assets/Combination_resume.jpg')} alt="resume p" />
            </div>
            <Footer />
        </>
    );
}



