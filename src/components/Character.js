// Write your Character component here

import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const CharBox = styled.div`
    background-color: white;
    margin: 2%;
    border-radius: 10px;
    width: 20%;
    background: rgba(255,255,255,.7);
`

const CharName = styled.h2`
    padding: 0 5%;
`

const CharDetails = styled.div`
    text-align: left;
    padding: 0 10%;
`

const Character = (props) => {

    let charBox;

    useEffect(() => {
        gsap.from(charBox, {y: -50})
    }, [])

    return (
        <CharBox ref={div => charBox = div}>
            <CharName>{props.data.name}</CharName>
            <CharDetails>
                <p>Gender: {
                    props.data.gender === 
                    "n/a" ? "N/A"
                    : props.data.gender.charAt(0).toUpperCase() + props.data.gender.slice(1)
                }</p>
                <p>Height: {props.data.height}</p>
                <p>Mass: {props.data.mass}</p>
                <p>Birth Year: {props.data.birth_year}</p>
                <p>Eye Color: {props.data.eye_color.charAt(0).toUpperCase() + props.data.eye_color.slice(1)}</p>
                <p>Hair Color: {props.data.hair_color.charAt(0).toUpperCase() + props.data.hair_color.slice(1)}</p>
                <p>Skin Color: {props.data.skin_color.charAt(0).toUpperCase() + props.data.skin_color.slice(1)}</p>
            </CharDetails>
        </CharBox>
    )
}

export default Character