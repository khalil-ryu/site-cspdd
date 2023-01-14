import React, {Component} from 'react';
// import Navbar from './Components/Navigation/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
// import galeries from './pages/about';
import Galerie from './Components/galerie/Galerie';
import ContactForm from './Components/ContactForm/ContactForm';
import NosProjets  from './pages/Projets';
import Activites  from './pages/activites';
import Annonces  from './pages/Annonces';
import Annonces2 from './Components/VolerProject/Annonces2';
import Articles  from './pages/Articles';
import Articles2 from './Components/VolerProject/Articles2';
import ScrollToTop  from './pages/scrollTopTop';
import GaleriesPage from './pages/galeries';
import PicturesPage from './pages/pictures1';

import PicturesPage2 from './pages/pictures2';
import VolerPage from './pages/volerPage';
import Activites2 from './Components/VolerProject/Activites2';
class App extends Component {


  render() {
    return(
      <Router basename={window.location.pathname || ''}>
        <ScrollToTop />
        <Switch>
          <Route  path='/' component={Home} exact />
          {/* old galerie <Route  path='/galeries' component={galeries} exact /> */}
          <Route  path='/contact' component = {ContactForm} exact />
          <Route  path='/NosProjets' component = {NosProjets} exact />
          <Route  path='/Projet2' component = {VolerPage} exact />
          <Route  path='/Annonces' component = {Annonces} exact />
          <Route  path='/Annonces2' component = {Annonces2} exact />

          <Route  path='/Activités' component = {Activites} exact />
          <Route  path='/Activités2' component = {Activites2} exact />

          <Route  path='/Articles' component = {Articles} exact />
          <Route  path='/Articles2' component = {Articles2} exact />

          <Route  path='/Galeries' component= {GaleriesPage} exact/>
          <Route  path='/images1' component= {PicturesPage} exact/>
          <Route  path='/images2' component= {PicturesPage2} exact/>

        </Switch>
      </Router>
    );
  }
}

export default App;
