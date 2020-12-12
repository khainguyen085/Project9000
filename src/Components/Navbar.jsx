import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class Navbar extends React.Component{
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src="https://s29643.pcdn.co/wp-content/uploads/StockX-blog-thumbnail-4.png" alt="logo" style={{width:"100px"}}/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className='mr-2'>
                        <img src="https://image.flaticon.com/icons/png/512/74/74699.png" alt="cart" style={{width:"35px"}}/>
                        </span>
                        My cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-tranform: capitalize;
}
`