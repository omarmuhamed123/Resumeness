import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


export default function useToken() {

    const token = localStorage.getItem('token');
    const navigator = useNavigate();
    useEffect(() => {
        async function done() {
            try {
                const res = await axios.get('http://localhost:3003/check', {
                    headers: {
                        "authorization": "Bearer " + token, 
                    },
                })
            } catch (err) {
                navigator('/login')
            }
        }
        done();
    }, [])
}
