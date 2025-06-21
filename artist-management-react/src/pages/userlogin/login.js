
import { useState } from "react"
import "./LogIn.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LogIn = () => {

    const [formData, setFormData] = useState({
        username: "",
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
                username: formData.username,
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
                <h1>Log In</h1>
                <Form onSubmit={handleSubmit}>
                    <br />
                    <br />
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

                    <div class="text-center">
                        <a href="/user">Forgot password?</a>
                    </div>
                    <br />
                    <Button variant="primary" type="submit" className="w-100">Save</Button>
                    <br />
                    <br />
                    <div class="text-center">
                        <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                            <a href="/user"
                                class="link-danger" as={Link} to="">Register</a></p>
                    </div>

                </Form>

            </div>
        </>
    )

}
export default LogIn;
