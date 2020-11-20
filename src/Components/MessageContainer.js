import React from 'react'

export class MessageContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className={this.props.className}> this is message container</div>
        )
    }
}