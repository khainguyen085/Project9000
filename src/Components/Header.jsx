import React from 'react'
import '../css/Header.css'
export default function Header() {
    return(
        <form>
            <h1>Bạn đang tìm sách gì?</h1>
            <input placeholder='Nhập sách bạn cần tìm...' onKeyPress={(e)=>{
                if(e.key === 'enter'){
                    this.props.handleClick();
                }
            }} />
            <button className='button'>Search</button>
        </form>
    )
}