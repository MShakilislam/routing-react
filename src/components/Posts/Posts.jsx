import React from 'react';
import { useLoaderData } from 'react-router';

const Posts = () => {

    const posts = useLoaderData()
    console.log(posts)
    return (
        <div>
            <h2>This are may all posts</h2>
        </div>
    );
};

export default Posts;