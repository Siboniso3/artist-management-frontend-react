
import axios from 'axios';
import DashboardCard from './DashboardCard'
import { useState } from 'react';


function Dashboard() {



    const [formData, setFormData] = useState([])
    const getData = () => {
        axios.get('http://localhost:8080/v1/api/artist')
            .then(res => {
                console.log(res)
                setFormData(res.data)
            })
            .catch(err => {
                console.log(err.data.content)

            })
    }


    return (
        getData(),
        <>

            <div class="container">
                <br />
                <br />
                <h2 class="text-left">Artist list</h2>
                <br />
                <br />
                <table class="table table-striped">
                    <thead>
                        <th>Artist First Name</th>
                        <th>Artist Last Name</th>
                        <th>Stage Name</th>
                        <th>Genre</th>
                        <th>Location</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {formData.map((artist) => (
                            <tr key={artist.id}>
                                <td>{artist.fName}</td>
                                <td>{artist.lName}</td>
                                <td>{artist.stageName}</td>
                                <td>{artist.genre}</td>
                                <td>{artist.location}</td>
                                <td>{artist.status}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            {/* <div className='text-center'>
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
            </div> */}


        </>
    );
}

export default Dashboard;