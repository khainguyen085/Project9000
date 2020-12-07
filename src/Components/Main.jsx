import React from 'react'
// import SearchBar from './SearchBar'
import '../assets/css/Main.css'
import ListItems from './ListItem';
const data = {
    name:'Jordan',
    price: '$' + 200,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_QIHEMWcCDaOcmvBwiOELIMf1a_MkZuVlA&usqp=CAU'    
}
export default class Main extends React.Component{
    constructor(props){
        super(props);{
            this.state = {
                data:[]
            }
        }
    }
    render(){
        return(
            <div className='mainContainer'>
                <ListItems data={data}/>
            </div>
        )
    }
}
