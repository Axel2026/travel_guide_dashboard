import * as React from "react"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function CityButton({coordinates, image, name, id, description, type, address, phoneNumber, website, popularity}) {

    const navigate = useNavigate();

    useEffect(() => {
    }, [])

    function navigateToCityAttractions(){
        navigate(`/city/${id}`);
    }

    return (
        <div className="attraction_option_button_container" onClick={() => navigateToCityAttractions()}>
            <div className="attraction_option_button">
                <div className="attraction_option_button_image_container">
                    <img className="attraction_option_button_image" src={image} alt="city_thumbnail"/>
                </div>
                <p className="attraction_option_button_text">
                    <span style={{fontWeight: 'bold'}}>Name: </span>{name}
                </p>
                <p className="attraction_option_button_text">
                    <span style={{fontWeight: 'bold'}}>Coordinates: </span> {coordinates.lat}, {coordinates.lon}
                </p>
                <p className="attraction_option_button_text">
                    <span style={{fontWeight: 'bold'}}>Type: </span> {type}
                </p>
                <p className="attraction_option_button_text">
                    <span style={{fontWeight: 'bold'}}>Address: </span> {address}
                </p>
                <p className="attraction_option_button_text">
                    <span style={{fontWeight: 'bold'}}>Phone: </span> {phoneNumber}
                </p>
                <p className="attraction_option_button_text">
                    <span style={{fontWeight: 'bold'}}>Website: </span> {website}
                </p>
                <p className="attraction_option_button_text">
                    <span style={{fontWeight: 'bold'}}>Popularity: </span>{popularity}
                </p>
                <p className="attraction_option_button_text">
                    <span style={{fontWeight: 'bold'}}>Description: </span> {description}
                </p>
            </div>
        </div>
    );
}

export default CityButton;
