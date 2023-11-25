import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import HomeRoute from './components/HomeRoute'
import NotFoundRoute from './components/NotFoundRoute'
import RegisterRoute from './components/RegisterRoute'
import RegisterContext from './context/RegisterContext'

import './App.css'

class App extends Component {
  state = {
    isRegister: false,
    name: '',
    topic: 'Arts and Culture',
    registerError: false,
  }

  updateName = updateName => {
    this.setState({name: updateName})
  }

  updateTopic = updateTopic => {
    this.setState({topic: updateTopic})
  }

  changeRegistrationStatus = () => {
    this.setState({isRegister: true})
  }

  updateError = response => {
    this.setState({registerError: response})
  }

  render() {
    const {isRegister, name, topic, registerError} = this.state

    return (
      <RegisterContext.Provider
        value={{
          isRegister,
          name,
          topic,
          changeRegistrationStatus: this.changeRegistrationStatus,
          updateName: this.updateName,
          updateTopic: this.updateTopic,
          registerError,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <Route component={NotFoundRoute} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
