import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function useSafe() {

    const token = localStorage.getItem('token');
    const navigator = useNavigate();
    async function done() {
        try {
            await axios.get('http://localhost:3003/check', {
                headers: {
                    "authorization": "Bearer " + token, 
                },
            })
            navigator('/')
        } catch (err) {

        }
    }
    done();
}
