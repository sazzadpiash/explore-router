import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css'

const Users = () => {
    const userData = useLoaderData(); //useLoaderData() function ta react router er akta part. akhan theke amra data access korte parbo
    return (
        <div>
            <h1>All Users: {userData.length}</h1>
            <div className='users'>
                {
                    userData.map(user => <User key={user.id} user={user}></User>)
                }
            </div>

        </div>
    );
};

export default Users;