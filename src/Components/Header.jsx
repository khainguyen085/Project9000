import React from 'react'
import '../css/Header.css'
import { SearchBar } from './SeachBar'

export function Header() {
    return (
        <>
            <div className="HeaderContainer">
                <h1>RANDOM FOOD APP</h1>
                <SearchBar />
            </div>
        </>
    )
};