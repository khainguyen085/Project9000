import React from 'react'
import Content from './Content'
import '../css/ContentContainer.css'
export default function ContentContainer(props){
    return props.data.map(item => (<div className='ContentContainer'>
    <Content child_data = {item} />
</div>))
}