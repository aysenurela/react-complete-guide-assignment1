import  React, { Component} from 'react';

class UserOutput extends Component {
render() {
        return (
            <div>
                <p> Paragraph 1 {this.props.userName} </p>
                <p> Paragraph 2 </p>
            </div>
        )
    }
}

export default UserOutput 