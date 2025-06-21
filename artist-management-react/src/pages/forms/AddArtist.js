// import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
import { useState } from "react"
import "./AddArtist.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ArtistService from "../../services/artistService";

const AddArtist = () => {

    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        stageName: "",
        genre: "",
        location: "",
        status: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const navigate = useNavigate();
    const ARTIST_API_BASE_URL = 'http://localhost:8080/v1/api/artist'
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            console.log("Here one");
            axios.post(ARTIST_API_BASE_URL, {
                fName: formData.fName,
                lName: formData.lName,
                stageName: formData.stageName,
                genre: formData.genre,
                location: formData.location,
                status: formData.status,
            }).then((response) => {
                console.log("Artist created successfully:", response.data)

            });
            // const response = await fetch("http://localhost:8080/artist", {
            //     method: "POST",
            //     headers: { "content-type": "application/json" },
            //     body: JSON.stringify(formData)
            // });
            console.log("Here two");
            // const data = await response.json();
            // console.log("Artist created successfully:", data);
            navigate("/");
        } catch (error) {
            console.error("Error creating artist:", error.message);
        };

    }
    return (
        <>
            <div className="center-form">
                <h1>Add New Artist</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName" >
                        <Form.Control
                            type="text"
                            name="fName"
                            placeholder="Enter First Name"
                            value={formData.fName}
                            onChange={handleInputChange}
                        />

                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="lName"
                            placeholder="Enter Last Name"
                            value={formData.lName}
                            onChange={handleInputChange}
                        />

                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="genre"
                            placeholder="Genre"
                            value={formData.genre}
                            onChange={handleInputChange}
                        />

                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="stageName"
                            placeholder="Enter Stage Name"
                            value={formData.stageName}
                            onChange={handleInputChange}
                        />

                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="location"
                            placeholder="Enter Location"
                            value={formData.location}
                            onChange={handleInputChange}
                        />

                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="status"
                            placeholder="Enter Status"
                            value={formData.status}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">Save</Button>
                </Form>
            </div>
        </>
    )

}
export default AddArtist;
// export default {};
//     {
//     data() {
//         return {
//             artists: []
//         }

//     },
//     methods: {
//         getArtists() {
//             ArtistService.getArtists().then((response) => {
//                 this.artists = response.data
//             });
//         }
//     },
// };

