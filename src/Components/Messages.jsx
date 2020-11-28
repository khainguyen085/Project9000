import React from 'react'
import '../css/Messages.css'
export default function Messages(props) {
    return (
        <div className='message'>
            <p>{props.message}</p>
        </div>
    )
}

