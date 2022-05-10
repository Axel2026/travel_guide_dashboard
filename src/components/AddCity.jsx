import * as React from "react"
import {Button} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

function AddCity() {

    const [name, setName] = useState("");
    const [coordinatesLatitude, setCoordinatesLatitude] = useState("");
    const [coordinatesLongitude, setCoordinatesLongitude] = useState("");
    const [imageURL, setImageURL] = useState("");

    function addCity() {
        if (name !== "" && coordinatesLatitude !== "" && coordinatesLongitude !== "" && imageURL !== "") {
            let cityDetails = {
                name: name,
                coordinates: {lat: parseFloat(coordinatesLatitude), lon: parseFloat(coordinatesLongitude)},
                image: imageURL,
            }
            axios({
                url: 'https://travel-guide-app-server.herokuapp.com/api/cities',
                method: 'POST',
                data: cityDetails
            }).catch(() => {
                console.warn('Internal server error');
            });
        } else {
            alert("Fill all the fields!")
        }
    }

    return (
        <div className="add_city_container">
            <form>
                <div className="form-group">
                    <label className="add_city_title_text">Name</label>
                    <input type="text" className="form-control" id="add_city_name_text"
                           placeholder="Tarnów" onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="add_city_title_text">Coordinates</label>
                    <input type="number" className="form-control" id="add_city_coordinates_text"
                           placeholder="Latitude" onChange={(event) => setCoordinatesLatitude(event.target.value)}/>
                    <input type="number" className="form-control" id="add_city_coordinates_text"
                           placeholder="Longitude" onChange={(event) => setCoordinatesLongitude(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="add_city_title_text">Image URL</label>
                    <input type="text" className="form-control" id="add_city_image_text"
                           placeholder="https://..." onChange={(event) => setImageURL(event.target.value)}/>
                </div>
                <Button id="add_city_button" onClick={() => addCity()}>Add</Button>
            </form>
        </div>
    );
}

export default AddCity;
