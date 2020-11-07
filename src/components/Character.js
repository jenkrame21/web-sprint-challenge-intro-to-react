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

    h4 {
        color: #443e3e;
    }
`

const CharName = styled.h2`
    padding: 5%;
    background-color: #443e3e;
    margin: 5%;
    border-radius: 7px;
    color: #fff;
`

const CharDetails = styled.div`
    text-align: center;
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
                <h4>Gender: </h4>
                <p>{
                    props.data.gender === 
                    "n/a" ? "N/A" : props.data.gender.charAt(0).toUpperCase() + props.data.gender.slice(1)
                }</p>
                <hr/>
                <h4>Height: </h4>
                <p>{props.data.height} cm</p>
                <hr/>
                <h4>Mass:</h4> 
                <p>{props.data.mass} kg</p>
                <hr/>
                <h4>Birth Year: </h4>
                <p>{props.data.birth_year}</p>
                <hr/>
                <h4>Eye Color: </h4>
                <p>{props.data.eye_color.charAt(0).toUpperCase() + props.data.eye_color.slice(1)}</p>
                <hr/>
                <h4>Hair Color: </h4>
                <p>{props.data.hair_color.charAt(0).toUpperCase() + props.data.hair_color.slice(1)}</p>
                <hr/>
                <h4>Skin Color: </h4>
                <p>{props.data.skin_color.charAt(0).toUpperCase() + props.data.skin_color.slice(1)}</p>
                <hr/>
            </CharDetails>
        </CharBox>
    )
}

export default Character;