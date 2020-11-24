import React from 'react'
export function Seachbar(props){
    return <input type='text' placeholder='what are u looking for' onKeyDown={props.handleKeyDown}/>
}