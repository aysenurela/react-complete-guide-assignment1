import  React from 'react';
import "./design.css"

function UserOutput (props)  {
        return (
            <div className="container">
                <p> Paragraph 1 {props.userName} </p>
                <p> Paragraph 2 </p>
            </div>
        )
}

export default UserOutput 