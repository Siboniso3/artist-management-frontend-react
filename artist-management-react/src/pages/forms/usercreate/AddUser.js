import { useState } from "react"
import "./AddUser.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import axios from "axios";



const AddUser = () => {

    const [formData, setFormData] = useState({
        fName: "",
        mName: "",
        lName: "",
        username: "",
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const navigate = useNavigate();
    const USER_API_BASE_URL = "http://localhost:8080/v1/api/user";
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            console.log("Here one");
            axios.post(USER_API_BASE_URL, {
                fName: formData.fName,
                mName: formData.mName,
                lName: formData.lName,
                username: formData.username,
                email: formData.email,
                password: formData.password,
            }).then((response) => {
                console.log("Artist created successfully:", response.data)

            });

            console.log("Here two");

            navigate("/");
        } catch (error) {
            console.error("Error creating artist:", error.message);
        };

    }

    return (
        <>
            <div className="center-form">
                <h1>Add New User</h1>
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
                            name="mName"
                            placeholder="Enter Middle Name"
                            value={formData.mName}
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
                            name="username"
                            placeholder="Enter Username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />

                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            placeholder="confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />

                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">Save</Button>
                </Form>
            </div>
        </>
    )

}
export default AddUser;