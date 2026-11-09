import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id , title} = post
    const naviGate = useNavigate()

    const handelNavigate=() =>{
        naviGate(`/posts/${id}`)
    }


    return (
        <div style={{border: "2px solid red",margin: "10px"}}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
            <button style={{padding: "10px ,15px",margin:"10px"}}>Post Detail</button>
            </Link>
            <button onClick={handelNavigate}>Details of</button>
        </div>
    );
};

export default Post;