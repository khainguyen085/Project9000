import React from 'react'
import '../assets/css/SearchBar.css'
// import ListItems from './ListItem';
// const data = {
//         name:'Jordan',
//         price: '$' + 200,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_QIHEMWcCDaOcmvBwiOELIMf1a_MkZuVlA&usqp=CAU'    
//     }

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     data:[]
        // }
    }
    render() {
        // console.log(data)
        return (
            <div className='searchContainer'>
                <div className='miniSearch'>
                    <h1>The Place To Buy</h1>
                    <span>SNEAKERS</span><br />
                </div>
                <div className='bigSearch'>
                    <form>
                        <img src='https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_search_48px-512.png' alt=' '></img>
                        <input type='search' placeholder='Search...' autoComplete='off' spellCheck='false' autoCorrect='off' autoCapitalize='off'></input>
                    </form>
                </div>
                {/* <ListItems data={data}/> */}
            </div>
        )
    }
}