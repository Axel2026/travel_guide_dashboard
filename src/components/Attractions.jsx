import * as React from "react"
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import TableOfContents from "./TableOfContents";
import AttractionButton from "./AttractionButton";

function Attractions() {

    const [isLoading, setIsLoading] = useState(true);
    const [attractions, setAttractions] = useState([]);

    let {id} = useParams();
    const navigate = useNavigate();
    const cities = useLocation().state;
    const type = "attraction";

    useEffect(() => {
        getAttractions()
    }, [])

    function getAttractions() {
        axios.get(`https://travel-guide-app-server.herokuapp.com/api/cities/attractions/city/${id}`)
            .then((response) => {
                setAttractions(response.data)
                setIsLoading(false)
            })
    }

    function navigateToAdd(){
        navigate(`/add/${type}`, {state: cities});
    }

    if (!isLoading) {
        return (
            <div>
                <TableOfContents/>
                <div className="attractions_add_attraction_container" onClick={() => navigateToAdd()}>+</div>
                <main>
                    {attractions.map((attraction, index) => {
                        return (
                            <div id={attraction.name} key={index}><AttractionButton key={index}
                                                                              coordinates={attraction.coordinates}
                                                                              image={attraction.image}
                                                                              name={attraction.name}
                                                                              description={attraction.description}
                                                                              type={attraction.type}
                                                                              address={attraction.address}
                                                                              phoneNumber={attraction.phone_number}
                                                                              website={attraction.website}
                                                                              popularity={attraction.clicks}
                                                                              id={attraction._id}/></div>)
                    })}
                </main>
            </div>
        );
    } else {
        return <div>Loading...</div>
    }

}

export default Attractions;
