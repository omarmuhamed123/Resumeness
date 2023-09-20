import React from "react";
import './Test1.css';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Nav from "../../components/Navbar/Nav";
import { useContext } from "react";
import { resumeCont } from "../../App";
import { useNavigate } from "react-router-dom";
import useToken from "../../Hooks/customHook";


export default function Test1() {
    useToken();
    const navigate = useNavigate();
    const { inform, setInform } = useContext(resumeCont);
    function setData(e) {
        setInform({ ...inform, [e.target.name]: e.target.value });
        console.log(inform);
    }
    return (
        <>
            <Header />
            <Nav current={0}></Nav>
            <form onSubmit={() => { navigate('/education'); }} >
                <div className="test1" >
                    <div className="box" style={{ padding: '25px 0px 25px 50px' }}>
                        <h1>Contact Information</h1>

                        <div className="items">
                            <div className="item">
                                <label for='fullname'>Full Name: </label>
                                <input name="fullname" type="text" onChange={setData} value={inform.fullname} placeholder="your name" required />
                            </div>
                            <div className="item">
                                <label for='address'>Address: </label>
                                <input name="address" type="text" onChange={setData} value={inform.address} placeholder="your address" required />
                            </div>
                            <div className="item">
                                <label for='phone'>Phone Number: </label>
                                <input name="phone" type="tel" onChange={setData} value={inform.phone} placeholder="your phone" required />
                            </div>
                            <div className="item">
                                <label for='email'>Email: </label>
                                <input name="email" type="email" onChange={setData} value={inform.email} placeholder="your email" required />
                            </div>
                            <div className="item">
                                <label for='portfolio'>Portfolio: </label>
                                <input name="portfolio" type="url" onChange={setData} value={inform.portfolio} placeholder="your portfolio" required />
                            </div>
                            <div className="item">
                                <label for='linkedIn'>LinkedIN: </label>
                                <input name="linkedIn" id="linkedIn" type="url" onChange={setData} value={inform.linkedIn} placeholder="your linkedIn" required />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <button onClick={() => { navigate('/'); }}>Back</button>
                            <button type="submit">Next</button>
                        </div>

                    </div>
                    <div className="image">
                    </div>
                </div >
            </form>
            <Footer />
        </>
    );
}



