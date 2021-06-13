import React from 'react';
import {
    Nav,
    NavContainer,
    NavLogo, 
    NavMenu,
    NavItem,
    NavLink, 
    Profile
} from './NavbarElements';

const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">VoteChain</NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/">Learn More</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/vote">Vote</NavLink>
                        </NavItem>
                    </NavMenu>
                    <Profile 
                        account={props.account} 
                        hasVoted={props.hasVoted} 
                        authorized={props.authorized}
                    />
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;