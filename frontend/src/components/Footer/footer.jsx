import React from "react";
import './footer.css';


export default function Footer() {
    return (
        <footer className="footer">
            <h2 style={{ fontFamily: 'cursive', fontSize: 35, color: 'red' }}>Resumeness</h2>
            <div className="box">
                <h2>Author</h2>
                <h4>Omar Mohammed</h4>
                <h4>Giza,Egypt</h4>
            </div>
            <div className="box">
                <h2>Contact</h2>
                <h4><a href="https://www.facebook.com/" target="_blank">FaceBook</a></h4>
                <h4><a href="https://github.com/omarmohammed2273?tab=repositories" target="_blank">GitHub</a></h4>
            </div>

        </footer>
    );
}
