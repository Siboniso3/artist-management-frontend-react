import Button from 'react-bootstrap/Button'
import React from "react";
import './DashboardCard.css'


function DashboardCard() {
    return (
        <>


            <div className="artist_box">
                <img src={require("./image/images.jpeg")} alt="" /><br />
                <div className="artist_details">
                    <h2 className="text-center">Dj Maphorisa</h2>
                    <p className="text-center">Available</p>
                    < p className="text-center">Midrand<span /></p>
                    <Button variant="primary" type="submit" className="w-100">Book</Button>
                </div>


            </div>

        </>
    );
}

export default DashboardCard;