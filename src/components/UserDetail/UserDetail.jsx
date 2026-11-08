import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
    const users = useLoaderData()
    const {name, website} = users

    const userStyle = {
        border :"2px solid green",
        borderRadius: "20px",
        padding:"10px",
        margin:"10px"
    }
    return (
        <div style={userStyle}>
            <h3>User Detail Heare</h3>
            <h3>Name : {name}</h3>
            <p>Website : {website}</p>
        </div>
    );
};

export default UserDetail;