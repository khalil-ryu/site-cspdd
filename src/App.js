import React, {Component} from 'react';
// import Navbar from './Components/Navigation/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import galeries from './pages/about';
import ContactForm from './Components/ContactForm/ContactForm';
import NosProjets  from './pages/Projets';
import Activites  from './pages/activites';
import Annonces  from './pages/Annonces';

import Articles  from './pages/Articles';

import ScrollToTop  from './pages/scrollTopTop';


class App extends Component {


  render() {
    return(
      <Router basename={window.location.pathname || ''}>
        <ScrollToTop />
        <Switch>
          <Route  path='/' component={Home} exact />
          <Route  path='/galeries' component={galeries} exact />
          <Route  path='/contact' component = {ContactForm} exact />
          <Route  path='/NosProjets' component = {NosProjets} exact />
          <Route  path='/Annonces' component = {Annonces} exact />
          <Route  path='/Activités' component = {Activites} exact />
          <Route  path='/Articles' component = {Articles} exact />

        </Switch>
      </Router>
    );
  }
}

export default App;
