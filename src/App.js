import React, {Component} from 'react';
// import Navbar from './Components/Navigation/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import galeries from './pages/about';
import ContactForm from './Components/ContactForm/ContactForm';

class App extends Component {
  render() {
    return(
      <Router>
    {/*<Navbar/>*/}
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/galeries' component={galeries} exact />
          <Route path='/contact' component = {ContactForm} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
