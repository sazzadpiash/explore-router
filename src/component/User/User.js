import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    return (
        <div>
            name: <Link to={`/user/${user.id}`}>{user.name}</Link> <br />
            mail: {user.email} <br />
            website: {user.website} <br />
        </div>
    );
};

export default User;