import React, {Component} from 'react'
import UserOutput from '../src/UserOutput'
import UserInput from '../src/UserInput'

class App extends Component {

  constructor(props) {
    super(props)
    this.state={
      userName:["Nur","Ela"]
    }
  }

  changeUserName (event) {
    this.setState({userName:[event.target.value,"Ela"]})
  }

  render() {
    return (
      <div className="container">
          learn react
          <UserOutput userName={this.state.userName[0]}/>
          <UserOutput userName={this.state.userName[1]}/>
          <UserInput value={this.state.userName[0]} changeUserName={this.changeUserName.bind(this)} />
      </div>
    )
  }
}

export default App;
