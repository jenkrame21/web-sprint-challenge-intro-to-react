// Write your Character component here

import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const CharBox = styled.div`
    background-color: white;
    padding: 1% 0;
    margin: 2%;
    border-radius: 10px;
    width: 20%;
    background: rgba(255,255,255,.7)
`

const Character = (props) => {

    let charBox;

    useEffect(() => {
        gsap.from(charBox, {y: -50, delay: props.key*50})
    }, [])

    return (
        <CharBox ref={div => charBox = div}>
            <h2>{props.data.name}</h2>
            <div>
                <p>Gender: {props.data.gender}</p>
                <p>Height: {props.data.height}</p>
                <p>Mass: {props.data.mass}</p>
                <p>Birth Year: {props.data.birth_year}</p>
                <p>Eye Color: {props.data.eye_color}</p>
                <p>Hair Color: {props.data.hair_color}</p>
                <p>Skin Color: {props.data.skin_color}</p>
            </div>
        </CharBox>
    )
}

export default Character