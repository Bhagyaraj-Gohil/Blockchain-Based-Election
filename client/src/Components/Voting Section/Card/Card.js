import React from 'react';
import {
    Container,
    Image ,
    Content ,
    Title ,
    Description 
} from './CardElements';

const truncate = (str) => {
    return str.length > 150 ? str.substring(0, 150) + "..." : str;
}

const Card = (props) => {
    return (
        <>
            <Container>
                <Image src={"http://" + props.image} alt=''/>
                <Content>
                    <Title>{props.name}</Title>
                    <Description>{truncate(props.description)}</Description>
                </Content>
            </Container>
        </>
    )
}

export default Card;