import React from 'react'
import Charity from './Charity'
import '../css/CharityList.css'
export default function CharityList(props){
    const list_project = props.data.projects ? props.data.projects.project : [];
    // // console.log(props.data.projects)
    // console.log(list_project)
    // return <h1>ha</h1>
    return list_project.map(item=> <div className='container'><Charity project={item} /></div> )
}
