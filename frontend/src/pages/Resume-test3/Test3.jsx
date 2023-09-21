import React, { useContext } from "react";
import './Test3.css';
import Header from "../../components/Header/header";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import { resumeCont } from "../../App";
import useToken from "../../Hooks/customHook";



export default function Test3() {
    useToken();
    const navigate = useNavigate();
    const { inform, setInform } = useContext(resumeCont);


    function AddTech(e) {
        e.preventDefault();
        setInform({ ...inform, skillData: [...inform.skillData, ''] });
    }
    function delTech(e) {
        e.preventDefault();
        const newArr = inform.skillData.filter((ele, index) => index !== parseInt(e.target.id));
        setInform({ ...inform, skillData: newArr });
    }



    function AddLang(e) {
        e.preventDefault();
        setInform({ ...inform, langData: [...inform.langData, ''] });
    }
    function delLang(e) {
        e.preventDefault();
        const newArr = inform.langData.filter((ele, index) => index !== parseInt(e.target.id));
        setInform({ ...inform, langData: newArr });
    }



    function AddHobb(e) {
        e.preventDefault();
        setInform({ ...inform, hobbData: [...inform.hobbData, ''] });
    }
    function delHobb(e) {
        e.preventDefault();
        const newArr = inform.hobbData.filter((ele, index) => index !== parseInt(e.target.id));
        setInform({ ...inform, hobbData: newArr });
    }
    return (
        <>
            <Header />
            <Nav current={2} />
            <form onSubmit={(e) => {
                e.preventDefault();
                navigate('/experience');
            }} >
                <div className="test3" >
                    <div className="box" style={{ padding: '25px 0px 25px 50px' }}>
                        <h1>Skills Information</h1>
                        <div>
                            <button onClick={AddTech} type="button" className="action">Add your technical skills</button>
                            <div className="items">
                                {inform.skillData.map((ele, index) => {
                                    return (
                                        <div className="item">
                                            <button type="button" id={index} onClick={delTech}>X</button>
                                            <input type="text" value={ele} onChange={(e) => {
                                                const newArr = inform.skillData;
                                                newArr[index] = e.target.value;
                                                setInform({ ...inform, skillData: newArr })
                                                console.log(inform);
                                            }} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <button onClick={AddLang} type="button" className="action">Add your languages</button>
                            <div className="items">
                                {inform.langData.map((ele, index) => {
                                    return (
                                        <div className="item">
                                            <button type="button" id={index} onClick={delLang}>X</button>
                                            <input type="text" value={ele} onChange={(e) => {
                                                const newArr = inform.langData;
                                                newArr[index] = e.target.value;
                                                setInform({ ...inform, langData: newArr })
                                                console.log(inform);
                                            }} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <button onClick={AddHobb} type="button" className="action">Add your hobbies</button>
                            <div className="items">
                                {inform.hobbData.map((ele, index) => {
                                    return (
                                        <div className="item">
                                            <button type="button" id={index} onClick={delHobb}>X</button>
                                            <input type="text" value={ele} onChange={(e) => {
                                                const newArr = inform.hobbData;
                                                newArr[index] = e.target.value;
                                                setInform({ ...inform, hobbData: newArr })
                                                console.log(inform);
                                            }} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="buttons" >
                            <button onClick={() => { navigate('/education'); }}>Back</button>
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