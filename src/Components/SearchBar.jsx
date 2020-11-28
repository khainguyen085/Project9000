import React from 'react'
import CharityList from './CharityList'
import '../css/Searchbar.css'
export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }

        const url_target =
            "https://api.globalgiving.org/api/public/projectservice/featured/projects";

        const api_key = "4a53e698-9727-4bd5-bdff-6853653ba14c";

        const url = `${url_target}?api_key=${api_key}`;
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        }).then(res => res.json())
            .then(data => {
                this.setState({ items: data })
            }).catch(err => console.log(err))
    }
    render() {
        return (
            <div className='bigContainer'>
                <div className='header'>
                    <h1>Charity Finder</h1>
                    <input placeholder='what are you looking for?'/>
                </div>
                <CharityList data={this.state.items} />
            </div>
        )
    }
}