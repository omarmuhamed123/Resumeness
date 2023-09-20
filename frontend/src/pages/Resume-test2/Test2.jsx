import { useContext } from 'react';
import React from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Nav from '../../components/Navbar/Nav';
import './Test2.css';
import { useNavigate } from 'react-router-dom';
import { resumeCont } from '../../App';
import useToken from '../../Hooks/customHook';



export default function Test2() {
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
            <Nav current={1} />
            <form onSubmit={() => { navigate('/skills'); }} >
                <div className="test2" >
                    <div className="box" style={{ padding: '25px 0px 25px 50px' }}>
                        <h1>Education Information</h1>

                        <div className="items">
                            <div className="item">
                                <label for='degree'>Degree: </label>
                                <input name="degree" type="text" onChange={setData} value={inform.degree} placeholder="your degree" required />
                            </div>
                            <div className="item">
                                <label for='institution'>Institution: </label>
                                <input name="institution" type="text" onChange={setData} value={inform.institution} placeholder="your institution" required />
                            </div>
                            <div className="item">
                                <label for='graduate'>Graduation Year: </label>
                                <input name="graduate" type="number" onChange={setData} value={inform.graduate} placeholder="your graduation year" required />
                            </div>

                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
                            <button onClick={() => { navigate('/contact'); }}>Back</button>
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