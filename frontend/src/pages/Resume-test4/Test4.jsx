import React, { useContext } from "react";
import './Test4.css';
import Header from "../../components/Header/header";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import { resumeCont } from "../../App";
import useToken from "../../Hooks/customHook";




export default function Test4() {
    useToken();
    const navigate = useNavigate();
    const { inform, setInform } = useContext(resumeCont);

    function AddExper(e) {
        e.preventDefault();
        setInform({ ...inform, experData: [...inform.experData, { jobTitle: '', jobDesc: '', from: '', to: '' }] });
    }
    function delExper(e) {
        e.preventDefault();
        const newArr = inform.experData.filter((ele, index) => index !== parseInt(e.target.id));
        setInform({ ...inform, experData: newArr });
    }

    function AddProj(e) {
        e.preventDefault();
        setInform({ ...inform, projData: [...inform.projData, ''] });
    }
    function delProj(e) {
        e.preventDefault();
        const newArr = inform.projData.filter((ele, index) => index !== parseInt(e.target.id));
        setInform({ ...inform, projData: newArr });
    }
    return (
        <>
            <Header />
            <Nav current={3} />
            <form onSubmit={(e) => {
                e.preventDefault();
                navigate('/resume');
            }} >
                <div className="test4" >
                    <div className="box" style={{ padding: '25px 0px 25px 50px' }}>
                        <h1>Experience Information</h1>
                        <div>
                            <button onClick={AddExper} type="button" className="action">Add your technical skills</button>
                            <div className="exper-items">
                                {inform.experData.map((ele, index) => {
                                    return (
                                        <div className="exper-item">
                                            <button type="button" onClick={delExper} id={index}>X</button>
                                            <span className="sub-part">
                                                <label for='jobtitle'>Job Title</label>
                                                <input type="text" name='jobtitle' value={ele.jobTitle} onChange={(e) => {
                                                    const newArr = inform.experData;
                                                    newArr[index].jobTitle = e.target.value;
                                                    setInform({ ...inform, experData: newArr });
                                                }} />
                                            </span>
                                            <span className="sub-part">
                                                <label for='jobDesc'>Job Description</label>
                                                <textarea type="text" name='jobDesc' value={ele.jobDesc} onChange={(e) => {
                                                    const newArr = inform.experData;
                                                    newArr[index].jobDesc = e.target.value;
                                                    setInform({ ...inform, experData: newArr });
                                                }} />
                                            </span>
                                            <span className="sub-part">
                                                <label for='from'>From</label>
                                                <input type="text" name='from' value={ele.from} onChange={(e) => {
                                                    const newArr = inform.experData;
                                                    newArr[index].from = e.target.value;
                                                    setInform({ ...inform, experData: newArr });
                                                }} style={{ width: '50px' }} />
                                            </span>
                                            <span className="sub-part">
                                                <label for='to'>To</label>
                                                <input type="text" name='to' value={ele.to} onChange={(e) => {
                                                    const newArr = inform.experData;
                                                    newArr[index].to = e.target.value;
                                                    setInform({ ...inform, experData: newArr });
                                                }} style={{ width: '50px' }} />
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <button onClick={AddProj} type="button" className="action">Add your projects</button>
                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                {inform.projData.map((ele, index) => {
                                    return (
                                        <div style={{ margin: 15 }}>
                                            <button type="button" onClick={delProj} id={index} className="proj-button">X</button>
                                            <input type="text" value={ele} onChange={(e) => {
                                                const newArr = inform.projData;
                                                newArr[index] = e.target.value;
                                                setInform({ ...inform, projData: newArr });
                                            }} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="buttons" >
                            <button onClick={() => { navigate('/skills'); }}>Back</button>
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
