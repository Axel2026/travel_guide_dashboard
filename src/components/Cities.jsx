import * as React from "react"
import axios from "axios";
import {useEffect, useState} from "react";
import CityButton from "./CityButton";
import TableOfContents from "./TableOfContents";
import {useNavigate} from "react-router-dom";

function Cities() {

    const [isLoading, setIsLoading] = useState(true);
    const [cities, setCities] = useState([]);

    const navigate = useNavigate();
    const type = "city";

    useEffect(() => {
        getCities()
    }, [])

    function getCities() {
        axios.get('https://travel-guide-app-server.herokuapp.com/api/cities')
            .then((response) => {
                setCities(response.data)
                setIsLoading(false)
            })
    }

    function navigateToAdd(){
        navigate(`/add/${type}`, {state: cities});
    }

    if (!isLoading) {
        return (
            <div>
                <TableOfContents />
                <div className="cities_add_city_container" onClick={() => navigateToAdd()}>+</div>
                <main>
                {cities.map((city, index) => {
                    return (
                        <div id={city.name} key={index}><CityButton coordinates={city.coordinates} image={city.image}
                                                        name={city.name} id={city._id} cities={cities}/></div>)
                })}
                </main>
            </div>
        );
    } else {
        return <div>Loading...</div>
    }

}

export default Cities;
