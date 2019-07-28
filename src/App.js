import React, {Component} from 'react'
import UserOutput from '../src/UserOutput'
import UserInput from '../src/UserInput'

class App extends Component {

  state={
    userName:"Nur"
  }
  
  changeUserName (event) {
    this.setState({userName:event.target.value})
  }

  render() {
    return (
      <div>
          <UserInput value={this.state.userName} changeUserName={this.changeUserName.bind(this)} />
          <UserOutput userName={this.state.userName}/>
          <UserOutput userName="Ela"/>
      </div>
    )
  }
}

export default App;
