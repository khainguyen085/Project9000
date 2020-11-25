import React from 'react'
import '../css/Header.css'
export default function Header() {
    return (
        <form className='container'>
            <h1>Weather App</h1>
            <input placeholder='Nhập một thành phố bất kỳ...' type='text' />
            <input type='submit'/>
        </form>
    )
}