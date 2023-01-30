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
import ActivitesDetails from './Components/VolerProject/activites/ActivitesDetails';
import ActivitesDetails2 from './Components/VolerProject/activites/ActivitesDetails2';
import ActivitesDetails3 from './Components/VolerProject/activites/ActivitesDetails3';
import ActivitesDetails4 from './Components/VolerProject/activites/ActivitesDetails4';
import ActivitesDetails5 from './Components/VolerProject/activites/ActivitesDetails5';
import ActivitesDetails6 from './Components/VolerProject/activites/ActivitesDetails6';
import ActivitesDetails7 from './Components/VolerProject/activites/ActivitesDetails7';
import ActivitesDetails8 from './Components/VolerProject/activites/ActivitesDetails8';
import ActivitesDetails9 from './Components/VolerProject/activites/ActivitesDetails9';
import ActivitesDetails10 from './Components/VolerProject/activites/ActivitesDetails10';
import Volerannonce from './Components/VolerProject/Volerannonce';
import Annoncesd2 from './pages/Annoncesd2';

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
          <Route  path='/Annoncesd2' component = {Annoncesd2} exact />
          <Route  path='/Annonces' component = {Annonces} exact />
          <Route  path='/Annonces2' component = {Annonces2} exact />
          <Route  path='/Volerannonce' component = {Volerannonce} exact />

          <Route  path='/Activités' component = {Activites} exact />
          <Route  path='/Activités2' component = {Activites2} exact />
          <Route  path='/Activités2_1' component = {ActivitesDetails} exact />
          <Route  path='/Activités2_2' component = {ActivitesDetails2} exact />
          <Route  path='/Activités2_3' component = {ActivitesDetails3} exact />
          <Route  path='/Activités2_4' component = {ActivitesDetails4} exact />
          <Route  path='/Activités2_5' component = {ActivitesDetails5} exact />
          <Route  path='/Activités2_6' component = {ActivitesDetails6} exact />
          <Route  path='/Activités2_7' component = {ActivitesDetails7} exact />
          <Route  path='/Activités2_8' component = {ActivitesDetails8} exact />
          <Route  path='/Activités2_9' component = {ActivitesDetails9} exact />
          <Route  path='/Activités2_10' component = {ActivitesDetails10} exact />

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
