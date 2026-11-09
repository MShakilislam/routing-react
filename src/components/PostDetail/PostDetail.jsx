import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData()
    console.log(post)

    return (
        <div style={{border:"2px solid blue",padding: "10px"}}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            
        </div>
    );
};

export default PostDetail;