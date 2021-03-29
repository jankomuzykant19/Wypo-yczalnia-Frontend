import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import car_logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class Navbar extends Component{
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">  
                {/*https://www.iconfinder.com/icons/379346/2_car_old_icon*/}
                <Link to='/'>
                    <img src={car_logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                        Samochody
                        </Link>
                    </li>
                </ul>
                <Link to="/favourites" className="ml-auto">
                    <ButtonContainer>
                        <span>
                            <i className="fas fa-heart" />
                        </span>
                        Polubione
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalze;
}
`