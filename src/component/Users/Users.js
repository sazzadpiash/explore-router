import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const userData = useLoaderData();
    return (
        <div>
            All Users: {userData.length}
        </div>
    );
};

export default Users;