import './resume.css';
import { Contact, Education, Skills } from './sub/info';
import { Summary, Language, Hobbs } from './sub/summary';
import { useRef, useContext } from 'react';
import ReactToPrint from 'react-to-print'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { resumeCont } from '../../App';
import Header from '../../components/Header/header';
import Nav from '../../components/Navbar/Nav';
import Footer from '../../components/Footer/footer';
import useToken from '../../Hooks/customHook';


export default function ResumePage() {
    useToken();
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const back = () => {
        navigate('/experience');
    }
    const pageRef = useRef();
    const { inform } = useContext(resumeCont);
    const save = async () => {
        console.log("save");
        await axios.post('http://localhost:3003/resume/save', inform, {
            headers: {
                "authorization": "Bearer " + token, // Set the content type to JSON
            }
        },)
            .then(response => {
                console.log('Data saved successfully!');
            })
            .catch(error => {
                console.error('Error saving data:', error);
            });
    };
    return (
        <>
            <Header />
            <div style={{}}>
                <Nav current={4} />
                <div style={{
                    position: "relative",
                    marginLeft: '25%',
                    top: 50,
                }}>
                    <div ref={pageRef}>
                        <ResumeTemplate data={inform} />
                    </div>
                </div>
                <ReactToPrint
                    trigger={() => <button style={download}>Convert to PDF</button>}
                    content={() => pageRef.current}
                />
                <button style={goBack} onClick={back}>Back</button>
                <button style={{ ...download, left: '75%', top: '50px' }} onClick={save}>Save</button>
            </div>
            <Footer />
        </>
    );
}



export function ResumeTemplate({ data: { fullname, address, phone, email, linkedIn, portfolio,
    degree, institution, graduate, projData, hobbData,
    skillData, langData, experData } }) {

    return (
        <section style={screen}>
            <aside style={{ backgroundColor: "#323B4C", minHeight: 700, color: "white" }} >
                <div style={{ marginLeft: 15, paddingTop: 40 }} >
                    <Contact contactInfo={{ address, email, phone, linkedIn, portfolio }} />
                    <Education educationInfo={{ institution, degree, graduate }} />
                    <Skills skillsInfo={skillData} />
                </div>
            </aside>
            <section style={{ marginLeft: 15 }} >
                <Summary summaryInfo={{ fullname, experData, projData }} />
                <Language langsInfo={langData} />
                <Hobbs hobbsInfo={hobbData} />
            </section>
        </section>
    );
}

const screen = {
    backgroundColor: '#EBECF0',
    display: 'grid',
    gridTemplateColumns: '33% 67%',
    width: '210mm',
    minHeight: '297mm',
};

const download = {
    position: 'relative',
    left: "88%",
    backgroundColor: "orange",
    borderRadius: 15,
    padding: 10,
    border: '0px solid white',
};

const goBack = {
    backgroundColor: 'rgb(109, 109, 236)',
    padding: '15px 40px',
    border: '0px white solid',
    borderRadius: '10px',
    fontSize: '20px',
    marginTop: '25px',
};

