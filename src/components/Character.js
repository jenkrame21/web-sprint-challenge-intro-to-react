// Write your Character component here

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Character = () => {

    function characterMaker(bio) {

        const charBox = document.createElement('div');
        const charName = document.createElement('p');
        const charGender = document.createElement('p');
        const charHeight = document.createElement('p');
        const charMass = document.createElement('p');
        const charBirthYear = document.createElement('p');
        const charEyeColor = document.createElement('p');
        const charHairColor = document.createElement('p');
        const charSkinColor = document.createElement('p');

        charBox.classList.add('character-div');

        charName.textContent = data.name;
        charGender.textContent = data.gender;
        charHeight.textContent = data.height;
        charMass.textContent = data.mass;
        charBirthYear.textContent = data.birth_year;
        charEyeColor.textContent = data.eye_color;
        charHairColor.textContent = data.hair_color;
        charSkinColor.textContent = data.skin_color;

        charBox.appendChild(charName);
        charBox.appendChild(charGender);
        charBox.appendChild(charHeight);
        charBox.appendChild(charMass);
        charBox.appendChild(charBirthYear);
        charBox.appendChild(charEyeColor);
        charBox.appendChild(charHairColor);
        charBox.appendChild(charSkinColor);

        return characterMaker

    }

    return (
        <>
            
        </>
    )
}