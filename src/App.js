import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';
import Character from './components/Character.js';
import styled from 'styled-components';

const FlexDiv = styled.div`
    width: 100%;
    max-width: 100%;
    padding: 5%;
    display: flex;
    flex-wrap: wrap;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characterData, setCharacterData] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);


  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setCharacterData(res.data.results)
        // console.log(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  let charsKey = 0

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <FlexDiv className='Body'>
        {characterData.map(v => <Character data={v} key={charsKey++}></Character>)}
      </FlexDiv>
    </div>
  );
}

export default App;
