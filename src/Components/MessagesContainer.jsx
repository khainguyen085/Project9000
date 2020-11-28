import React from 'react'
import Messages from './Messages'
import '../css/messageWrapper.css'
export default class MessagesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''

        }
        this.handleOnchange = this.handleOnchange.bind(this);

    }
    handleOnchange = (e) => {
        this.setState({ message: e.target.value })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.setState({message:this.state.message})
    }
    render() {
        return (
            <div className='rightContainer'>
                <form onSubmit={this.handleSubmit}>
                    <div className='messageWrapper'>
                        <Messages/>
                    </div>
                    <div className='inputBottom'>
                        <input type='text' value={this.state.message} placeholder='Nhập tin nhắn vào đây...' onChange={this.handleOnchange}></input>
                    </div>
                </form>
            </div>
        )
    }

}