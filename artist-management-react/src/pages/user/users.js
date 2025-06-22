import axios from 'axios';
import { useState } from 'react';



function Users() {



    const [formData, setFormData] = useState([])
    const getData = () => {
        axios.get('http://localhost:8080/v1/api/user')
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
                <h2 class="text-left">User list</h2>
                <br />
                <br />
                <table class="table table-striped">
                    <thead>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {formData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.fName}</td>
                                <td>{user.mName}</td>
                                <td>{user.lName}</td>
                                <td>{user.email}</td>
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

export default Users;