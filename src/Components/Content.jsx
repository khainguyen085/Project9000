import React from 'react'
import '../css/Content.css'

export default function Content({ child_data }) {
    // console.log(child_data)
    return (
        <div className='Container'>
            <h2>{child_data.volumeInfo.title}</h2>
            <img className='image' src={child_data.volumeInfo.imageLinks ? child_data.volumeInfo.imageLinks.thumbnail:''}/>
            <div>authors :{child_data.volumeInfo.authors}</div>  
            <div>publisher :{child_data.volumeInfo.publisher}</div>
            <div>published :{child_data.volumeInfo.published}</div>
            <div>description:{child_data.description}</div>
        </div>
    )
}