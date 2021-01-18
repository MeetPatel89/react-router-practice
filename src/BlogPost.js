import React from 'react';
import {
    useParams
} from 'react-router-dom';

export default function BlogPost() {
    console.log(useParams())
    const { random } = useParams();
    return (
        <div>
            Now showing post with dynamic route parameter {random}
        </div>
    )
}