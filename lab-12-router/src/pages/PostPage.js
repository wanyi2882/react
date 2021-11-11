import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function PostPage() {

    const { post_id } = useParams()

    const [activePostId, setActivePostId] = useState(post_id);

    // use empty object as the default value
    const [activePost, setActivePost] = useState({});

    useEffect(() => {
        const fetchPost = async (postId) => {
            let response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + postId)
            console.log(response.data)
            setActivePost(response.data);
        }

        if (parseInt(activePostId)) {
            fetchPost(activePostId)
        }
    }, [activePostId])

    return <React.Fragment>
        <h1>Posts</h1>
        {/* <input type="text" value={activePostId} onChange={(e) => {
            setActivePostId(e.target.value);
        }} /> */}
        <h2>Post Info</h2>
        <ul>
        <li>
                User Id: {activePost.userId}
            </li>
            <li>
                Id: {activePost.id}
            </li>
            <li>
                Title: {activePost.title}
            </li>
            <li>
                Completed: {activePost.completed}
            </li>        </ul>
    </React.Fragment>
}