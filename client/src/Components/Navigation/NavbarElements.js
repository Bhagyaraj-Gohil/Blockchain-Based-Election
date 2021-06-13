import React, {useState} from 'react';
import styled from 'styled-components';
import Identicon from 'identicon.js';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: #181818;
    height: 80px;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    z-index: 10;

    @media screen and {max-width: 960px} {
        transition: 0.8s all ease;
    }
`

export const NavContainer = styled.div`
    display: flex;
    height: 80px;
    width: 100%;
    justify-content: space-between;
    z-index: 1;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify: center;
    margin-left: -20px;
    font-weight: bold;
    text-decoration: none;
    opacity: 0.87;
`

export const NavTitle = styled.h1`
    color: #fff;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify: center;
    padding: 0 1.5rem;
    height: 100%;
    opacity: 0.87;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin: -22px;
`

export const NavItem = styled.li`
    height: 80px
`

export const NavLink = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid blue;
    }
`

const IconContainer = styled.div`
    cursor: pointer;
    align-self: center;
    display: flex;
    align-items: center;
    justify-contents: center;
    text-decoration: none;
`

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export function Profile(props) {
    const [open, setOpen] = useState(false);

    return (
        <ProfileContainer>
            <IconContainer onClick={() => setOpen(!open)}>
                <StyledImage src={`data:image/png;base64,${new Identicon(props.account, 30).toString()}`} />
            </IconContainer>
            {open && <DropDown 
                account={props.account} 
                hasVoted={props.hasVoted} 
                authorized={props.authorized} 
                isAdmin={props.isAdmin} 
            />}
        </ProfileContainer>
    );
}

const DropDownMenu = styled.div`
    position: absolute;
    top: 78px;
    width: 350px;
    transform: translateX(-15%);
    padding: 0.8rem;
    overflow: hidden;
    background-color: #181818;
    color: #fff;
    border-radius: 10px;
`

const DropDownItem = styled.div`
    height: 50px;
    display: flex;
    align-itmes: center;
    border-radius: 10px;
    padding: 0.5rem;

    &:hover {
        background-color: #525357;
    }
`;

const DropDownText = styled.h4`
    opacity: 0.80;
    margin-top: 8px;
`;

const truncate = (str) => {
    return str.length > 20 ? str.substring(0, 15) + "..." : str;
}

export function DropDown(props) {
    return(
        <DropDownMenu>
            <DropDownItem>
                <DropDownText>Account : {truncate(props.account)} </DropDownText>
            </DropDownItem>
            <DropDownItem>
            {
                props.isAdmin ? 
                <DropDownText>Admin Account</DropDownText> :
                <DropDownText>Authorized : {props.authorized ? 'Yes' : 'No'}</DropDownText>
            }
            </DropDownItem>
            {props.authorized && 
                <DropDownItem>
                    <DropDownText>Voted : {props.hasVoted ? 'Yes' : 'No'}</DropDownText>
                </DropDownItem>
            }
        </DropDownMenu>
    )
}
