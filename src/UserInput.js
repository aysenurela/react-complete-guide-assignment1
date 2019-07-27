import React, { Component} from 'react';

function UserInput(props) {

  const style={
    border:"none",
    backgroundColor:"lightgrey"
  }

    return (
      <input style={style} value={props.value} onChange={props.changeUserName}/>
    );
  }

export default UserInput 