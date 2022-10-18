import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserData = () => {
    const userData = useLoaderData();
    return (
        <div>
            <h1>{userData.name}</h1>
        </div>
    );
};

export default UserData;