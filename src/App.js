import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import RegisterContext from './context/RegisterContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {name: '', topic: '', registrationStatus: false}

  addName = name => {
    this.setState({name})
  }

  addTopic = topic => {
    this.setState({topic})
  }

  changeRegistrationStatus = () => {
    this.setState({registrationStatus: true})
  }

  render() {
    const {name, topic, registrationStatus} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          registrationStatus,
          addName: this.addName,
          addTopic: this.addTopic,
          changeRegistrationStatus: this.changeRegistrationStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
