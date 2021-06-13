import React from 'react';
import {
    Nav,
    NavContainer,
    NavLogo, 
    NavTitle, 
    Profile
} from './NavbarElements';

const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">VoteChain</NavLogo>
                    <NavTitle>{props.title}</NavTitle>
                    <Profile 
                        account={props.account} 
                        hasVoted={props.hasVoted} 
                        authorized={props.authorized} 
                        isAdmin={props.isAdmin} 
                    />
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;