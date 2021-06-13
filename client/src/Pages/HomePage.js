import React from 'react';
import Navbar from "../Components/Navigation/Navbar";
import LandingPage from '../Components/Landing Section/LandingPage';

const HomePage = (props) => {
    return(
        <>
            <Navbar 
                title={'Home'}
                account={props.account} 
                hasVoted={props.hasVoted} 
                authorized={props.authorized} 
                isAdmin={props.isAdmin} 
            />
            <LandingPage />
        </>
    )
}

export default HomePage;