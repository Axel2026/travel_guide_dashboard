import * as React from "react"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function CityButton({coordinates, image, name, id, cities}) {

    const navigate = useNavigate();

    useEffect(() => {
    }, [])

    function navigateToCityAttractions(){
        navigate(`/city/${id}`, {state: cities});
    }

    return (
        <div className="city_option_button_container" onClick={() => navigateToCityAttractions()}>
            <div className="city_option_button">
                <div className="city_option_button_image_container">
                    <img className="city_option_button_image" src={image} alt="city_thumbnail"/>
                </div>
                <p className="city_option_button_text" style={{fontWeight: "bold"}}>
                    {name}
                </p>
                <p className="city_option_button_text">
                    {coordinates.lat}
                </p>
                <p className="city_option_button_text" style={{marginLeft: '-100px'}}>
                    {coordinates.lon}
                </p>
            </div>
        </div>
    );
}

export default CityButton;
