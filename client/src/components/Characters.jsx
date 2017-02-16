import React from 'react';
import CharacterDetails from './CharacterDetails.jsx'

class Characters extends React.Component{
  render(props){
    console.log(this.props.characters)

    var characterDetails = this.props.characters.map( function(character, index) {
      
      return <CharacterDetails value={index} key={index} character={character}/>
    })

    return(
        {characterDetails}
    )
  }
}

module.exports = Characters;