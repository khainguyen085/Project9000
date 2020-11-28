import React from 'react'
import axios from 'axios'
import Header from './Header'
import '../css/SearchBar.css'
import ContentContainer from './ContentContainer'

export default class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items:[]
        }
        this.handleClick = this.handleClick.bind(this);
        axios.get('https://www.googleapis.com/books/v1/volumes?q=naruto')
        .then(res=>{
            console.log(res.data.items.filter(da=>da.volumeInfo.imageLinks))
            this.setState({items:res.data.items})
            
        })
    }
    handleClick = (e)=>{
        console.log('hello')
    }
    render(){
        const { items } = this.state
        return (
            <div className='container'>
                <Header/>
                <ContentContainer data={items} />
            </div>
        )
    }
}