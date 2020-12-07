import React from 'react'
import Items from './Items'
import '../assets/css/ListItemsContainer.css'
export default function ListItems(props) {
    console.log(props)
    return (
        <div className='ListItemsContainer'>
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />
            <Items item={props.data} />

        </div>
    )
}