var React = require('react');


var CharacterDetails = function (props) {
  console.log(props)
  return (
    <div>
    <h4> {props.characterDetails.name} </h4>
    </div>
    )


};

module.exports = CharacterDetails;
