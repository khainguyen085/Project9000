import React from 'react'
import '../assets/css/searchbar.css'
export class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {searchText:''}

        this.EnterInput = this.EnterInput.bind(this)
    }
    EnterInput(e){
        this.setState({searchText:e.target.value})
        //tim cach in ra cac icon
        console.log(this.state.searchText)
    }
    render(){
        return (
            <input onChange={this.EnterInput} class='beauty'placeholder="what the icon are you looking for?"></input>
        )
    }
}