import * as React from "react"
import {Button} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

function AddAttraction({cities}) {

    const [name, setName] = useState("");
    const [coordinatesLatitude, setCoordinatesLatitude] = useState("");
    const [coordinatesLongitude, setCoordinatesLongitude] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [streetAndNumber, setStreetAndNumber] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [cityId, setCityId] = useState("");
    const [cityName, setCityName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");

    function addAttraction() {
        let attractionDetails = {
            name: name,
            coordinates: {lat: parseFloat(coordinatesLatitude), lon: parseFloat(coordinatesLongitude)},
            description: description,
            cityId: cityId,
            image: imageURL,
            type: type,
            address: streetAndNumber + ", " + zipCode + " " + cityName,
            phone_number: phoneNumber,
            website: website,
        }
        console.log(JSON.stringify(attractionDetails))
        if (name !== "" && coordinatesLatitude !== "" && coordinatesLongitude !== "" && imageURL !== "" && streetAndNumber !== "" && cityId !== "") {
            let attractionDetails = {
                name: name,
                coordinates: {lat: parseFloat(coordinatesLatitude), lon: parseFloat(coordinatesLongitude)},
                description: description,
                cityId: cityId,
                image: imageURL,
                type: type,
                address: streetAndNumber + ", " + zipCode + " " + cityName,
                phone_number: phoneNumber,
                website: website,
            }
            console.log(JSON.stringify(attractionDetails))
            axios({
                url: 'https://travel-guide-app-server.herokuapp.com/api/attractions',
                method: 'POST',
                data: attractionDetails
            }).catch(() => {
                console.warn('Internal server error');
            });
        } else {
            alert("Fill all the fields!")
        }
    }

    function getCityName(cityId) {
        for (let city of cities.state) {
            if (city._id === cityId) {
                setCityName(city.name)
            }
        }
    }

    return (
        <div className="add_attraction_container">
            <form>
                <div className="form-group">
                    <label className="add_attraction_title_text">Name</label>
                    <input type="text" className="form-control" id="add_attraction_name_text"
                           placeholder="City hall" onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="add_attraction_title_text">Coordinates</label>
                    <input type="number" className="form-control" id="add_attraction_coordinates_text"
                           placeholder="Latitude" onChange={(event) => setCoordinatesLatitude(event.target.value)}/>
                    <input type="number" className="form-control" id="add_attraction_coordinates_text"
                           placeholder="Longitude" onChange={(event) => setCoordinatesLongitude(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="add_attraction_title_text">Image URL</label>
                    <input type="text" className="form-control" id="add_attraction_image_text"
                           placeholder="https://..." onChange={(event) => setImageURL(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="add_attraction_title_text">Street and house number</label>
                    <input type="text" className="form-control" id="add_attraction_street_text"
                           placeholder="Krakowska 5" onChange={(event) => setStreetAndNumber(event.target.value)}/>
                </div>
                <div className="col-md-2">
                    <label className="add_attraction_title_text">Zip code</label>
                    <input type="text" className="form-control" id="add_attraction_zip_text"
                           placeholder="33-100" onChange={(event) => setZipCode(event.target.value)}/>
                </div>
                <div className="col-md-2">
                    <label className="add_attraction_title_text">City</label>
                    <select className="form-select" onChange={(event) => {
                        setCityId(event.target.value);
                        getCityName(event.target.value)
                    }}>
                        <option value=""> </option>
                        {cities.state.map((city) => {
                            return <option key={city._id} value={city._id}>{city.name}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label className="add_attraction_title_text">Phone number</label>
                    <input type="number" className="form-control" id="add_attraction_phone_text"
                           placeholder="123 456 789" onChange={(event) => setPhoneNumber(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="add_attraction_title_text">Website</label>
                    <input type="text" className="form-control" id="add_attraction_website_text"
                           placeholder="https://google.com" onChange={(event) => setWebsite(event.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label className="add_attraction_title_text">Type</label>
                    <select className="form-select" onChange={(event) => {
                        setType(event.target.value)
                    }}>
                        <option value=""> </option>
                        <option value="monument" id="Monuments">Monuments</option>
                        <option value="food" title="Restaurants and bars">Restaurants and bars</option>
                        <option value="store" title="Stores">Stores</option>
                        <option value="accommodation" title="Accommodation">Accommodation</option>
                        <option value="other" title="Others">Others</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="add_attraction_title_text">Description</label>
                    <textarea className="form-control" id="add_attraction_description_text" rows="3"
                              onChange={(event) => setDescription(event.target.value)}/>
                </div>
                <Button id="add_attraction_button" onClick={() => addAttraction()}>Add</Button>
            </form>
        </div>
    )
}

export default AddAttraction;
