import React from 'react'
import {Friend} from './Friends'
export class FriendContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className={this.props.className}> this is fr container
            <Friend />
            </div>
            
        )
    }
}