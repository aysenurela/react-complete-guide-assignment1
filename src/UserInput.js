import React from 'react';

function UserInput(props) {

  const style={
    border:"none",
    backgroundColor:"lightblue",
    padding:"20px",
    margin:"20px"
  }

    return (
      <input style={style} value={props.value} onChange={props.changeUserName}/>
    );
  }

export default UserInput 