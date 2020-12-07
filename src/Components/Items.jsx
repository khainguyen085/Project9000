import React from 'react'
import '../assets/css/Items.css'
export default function Items(props) {
    console.log(props)
    return (
        <div className='Itemscontainer'>
            <div className='imgWrapper'>
                <img src={props.item.img} alt='no-img'></img>
            </div>
            <div className='textContainer'>
                <div style={{'font-size':'20px'}}>{props.item.name}</div>
                <div style={{'font-weight':'bold','font-size':'25px'}}>{props.item.price}</div>
                <form>
                    <button>Buy</button>
                    <button>Details</button>
                </form>
            </div>
        </div>
    )
}