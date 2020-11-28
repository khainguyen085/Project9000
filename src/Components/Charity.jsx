import React from 'react'
import '../css/Charity.css'
export default function Charity(props) {
    console.log(props)

    return (
        <div className='CharityContainer'>
            <h1>NameCity: {props.project.contactCity}</h1>
            <h1>Country: {props.project.contactCountry}</h1>
            <img src={props.project.imageLink}></img>
            <div>{props.project.summary}</div>
        </div>
    )
}