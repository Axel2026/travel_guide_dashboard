import * as React from "react"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Cities from "./Cities";

function MainPage() {

    const navigate = useNavigate();


    return (
        <div>
            <Cities />
        </div>
    );
}

export default MainPage;
