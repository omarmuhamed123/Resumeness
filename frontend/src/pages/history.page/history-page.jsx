import React from 'react';
import ReactToPrint from 'react-to-print'
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import useToken from '../../Hooks/customHook';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { ResumeTemplate } from '../resume.page/resume';


function useFetch() {
    const token = localStorage.getItem('token');
    const [arr, setArr] = useState([]);
    const allRef = useRef([]);
    console.log(allRef);
    useEffect(() => {

        async function getData() {
            try {
                const res = await axios.get('http://localhost:3003/resume/history', {
                    headers: {
                        "authorization": "Bearer " + token, // Set the content type to JSON
                    },
                });
                setArr(await res.data.data);
                allRef.current = Array(await res.data.data.length).fill().map(
                    (ref, index) => allRef.current[index] = React.createRef()
                );

            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [])
    return { arr, allRef };
}


function History() {
    const { arr, allRef } = useFetch();
    useToken();
    return (
        <>
            <Header />
            <div style={styles.history}>
                {arr?.map((ele, index) => {
                    return (
                        <ReactToPrint
                            trigger={() => <div style={styles.history_item} >
                                <div ref={allRef.current[index]}>
                                    <ResumeTemplate data={ele} />
                                </div>
                            </div>}
                            content={() => allRef.current[index].current}
                        />
                    );
                })}

            </div>
            <Footer />
        </>
    );
}


const styles = {
    history: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    history_item: {
        backgroundColor: 'darkgray',
        margin: '15px',
        borderRadius: 5,
        padding: 10,
        cursor: 'pointer'

    },
}
export default History;


