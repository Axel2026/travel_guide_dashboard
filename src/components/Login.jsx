import * as React from "react"
import {useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    return (
        <div>
            <div onClick={()=> navigate('/')} style={{cursor: 'pointer'}}>Go to main page</div>
            Login page
        </div>
    );
}

export default Login;
