import React, {Component} from 'react';
// import Navbar from './Components/Navigation/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { HashRouter } from 'react-router-dom'

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
import ActivitesDetails11 from './Components/VolerProject/activites/ActivitesDetails11';
import ActivitesDetails12 from './Components/VolerProject/activites/ActivitesDetails12';
import AnnoncesRedirection from './pages/AnnoncesRedirection';
import ActivitesDetails13 from './Components/VolerProject/activites/ActivitesDetails13';
import ActivitesDetails14 from './Components/VolerProject/activites/ActivitesDetails14';
import Activité1 from './pages/projectOneDetails/Activité1';
import Activité01 from './pages/projectOneDetails/Activité01';
import Activité02 from './pages/projectOneDetails/Activité02';
import Activité03 from './pages/projectOneDetails/Activité03';
import Activité04 from './pages/projectOneDetails/Activité04';
import Activité2 from './pages/projectOneDetails/Activité2';
import Activité3 from './pages/projectOneDetails/Activité3';
import Activité4 from './pages/projectOneDetails/Activité4';
import Activité5 from './pages/projectOneDetails/activité5';
import Activité6 from './pages/projectOneDetails/Activité6';
import Activité7 from './pages/projectOneDetails/Activité7';
import Activité8 from './pages/projectOneDetails/Activité8';
import Activité9 from './pages/projectOneDetails/Activité9';
import Activité10 from './pages/projectOneDetails/Activité10';
import Activité11 from './pages/projectOneDetails/Activité11';
import Activité12 from './pages/projectOneDetails/Activité12';
import Activité13 from './pages/projectOneDetails/Activité13';
import Activité14 from './pages/projectOneDetails/Activité14';
import Activité15 from './pages/projectOneDetails/Activité15';
import Activité16 from './pages/projectOneDetails/Activité16';
import Activité17 from './pages/projectOneDetails/Activité17';
import Activité18 from './pages/projectOneDetails/Activité18';
import Activité19 from './pages/projectOneDetails/Activité19';
import Activité20 from './pages/projectOneDetails/Activité20';
import Activité21 from './pages/projectOneDetails/Activité21';
import Activité22 from './pages/projectOneDetails/Activité22';
import Activité23 from './pages/projectOneDetails/Activité23';
import Activité24 from './pages/projectOneDetails/Activité24';
import Activité25 from './pages/projectOneDetails/Activité25';
import Activité26 from './pages/projectOneDetails/Activité26';
import Activité27 from './pages/projectOneDetails/Activité27';
import Activité28 from './pages/projectOneDetails/Activité28';
import Activité29 from './pages/projectOneDetails/Activité29';
import Activité30 from './pages/projectOneDetails/Activité30';
import Activité31 from './pages/projectOneDetails/Activité31';
import Activité32 from './pages/projectOneDetails/Activité32';
import Activité33 from './pages/projectOneDetails/Activité33';
import Activité34 from './pages/projectOneDetails/Activité34';
import Activité35 from './pages/projectOneDetails/Activité35';
import Activité36 from './pages/projectOneDetails/Activité36';
import Activité37 from './pages/projectOneDetails/Activité37';
import Activité38 from './pages/projectOneDetails/Activité38';
import Activité39 from './pages/projectOneDetails/Activité39';
import Activité40 from './pages/projectOneDetails/Activité40';
import Activité41 from './pages/projectOneDetails/Activité41';
import Activité42 from './pages/projectOneDetails/Activité42';
import Activité43 from './pages/projectOneDetails/Activité43';
import Activité44 from './pages/projectOneDetails/Activité44';
import Activité45 from './pages/projectOneDetails/Activité45';
import Activité46 from './pages/projectOneDetails/Activité46';
import Activité47 from './pages/projectOneDetails/Activité47';
import Activité48 from './pages/projectOneDetails/Activité48';
import Activité49 from './pages/projectOneDetails/Activité49';
import Activité50 from './pages/projectOneDetails/Activité50';
import Activité51 from './pages/projectOneDetails/Activité51';
import Activité52 from './pages/projectOneDetails/Activité52';
import Activité53 from './pages/projectOneDetails/Activité53';
import Activité54 from './pages/projectOneDetails/Activité54';
import Activité55 from './pages/projectOneDetails/Activité55';
import Activité56 from './pages/projectOneDetails/Activité56';
import Activité57 from './pages/projectOneDetails/Activité57';
import Activité58 from './pages/projectOneDetails/Activité58';
import Activité59 from './pages/projectOneDetails/Activité59';
import Activité60 from './pages/projectOneDetails/Activité60';
import Activité61 from './pages/projectOneDetails/Activité61';
import Activité62 from './pages/projectOneDetails/Activité62';
import Activité63 from './pages/projectOneDetails/Activité63';
import Activité64 from './pages/projectOneDetails/Activité64';
import Activité65 from './pages/projectOneDetails/Activité65';
import Activité66 from './pages/projectOneDetails/Activité66';
import Activité67 from './pages/projectOneDetails/Activité67';
import Activité68 from './pages/projectOneDetails/Activité68';
import Activité69 from './pages/projectOneDetails/Activité69';
import Activité70 from './pages/projectOneDetails/Activité70';
import ActivitesDetails15 from './Components/VolerProject/activites/ActivitesDetails15';


class App extends Component {


  render() {
    return(
      <HashRouter basename={window.location.pathname || ''}>
        <ScrollToTop />
        <Switch>
          <Route  path='/' component={Home} exact />
          {/* old galerie <Route  path='/galeries' component={galeries} exact /> */}
          <Route  path='/contact' component = {ContactForm} exact />
          <Route  path='/NosProjets' component = {NosProjets} exact />
          <Route  path='/Projet2' component = {VolerPage} exact />
          <Route  path='/Annonces2' component = {Annonces2} exact />
          <Route  path='/Annonces' component = {AnnoncesRedirection} exact />
          <Route  path='/AnnoncesProj' component = {Annonces} exact />
          <Route  path='/Volerannonce' component = {Volerannonce} exact />

          <Route  path='/Activités' component = {Activites} exact />
          <Route  path='/Activités1_1' component = {Activité1} exact />
          <Route  path='/Activités1_01' component = {Activité01} exact />
          <Route  path='/Activités1_2' component = {Activité2} exact />
          <Route  path='/Activités1_02' component = {Activité02} exact />
          <Route  path='/Activités1_3' component = {Activité3} exact />
          <Route  path='/Activités1_03' component = {Activité03} exact />
          <Route  path='/Activités1_4' component = {Activité4} exact />
          <Route  path='/Activités1_04' component = {Activité04} exact />
          <Route  path='/Activités1_5' component = {Activité5} exact />
          <Route  path='/Activités1_6' component = {Activité6} exact />
          <Route  path='/Activités1_7' component = {Activité7} exact />
          <Route  path='/Activités1_8' component = {Activité8} exact />
          <Route  path='/Activités1_9' component = {Activité9} exact />
          <Route  path='/Activités1_10' component = {Activité10} exact />
          <Route  path='/Activités1_11' component = {Activité11} exact />
          <Route  path='/Activités1_12' component = {Activité12} exact />
          <Route  path='/Activités1_13' component = {Activité13} exact />
          <Route  path='/Activités1_14' component = {Activité14} exact />
          <Route  path='/Activités1_15' component = {Activité15} exact />
          <Route  path='/Activités1_16' component = {Activité16} exact />
          <Route  path='/Activités1_17' component = {Activité17} exact />
          <Route  path='/Activités1_18' component = {Activité18} exact />
          <Route  path='/Activités1_19' component = {Activité19} exact />
          <Route  path='/Activités1_20' component = {Activité20} exact />
          <Route  path='/Activités1_21' component = {Activité21} exact />
          <Route  path='/Activités1_22' component = {Activité22} exact />
          <Route  path='/Activités1_23' component = {Activité23} exact />
          <Route  path='/Activités1_24' component = {Activité24} exact />
          <Route  path='/Activités1_25' component = {Activité25} exact />
          <Route  path='/Activités1_26' component = {Activité26} exact />
          <Route  path='/Activités1_27' component = {Activité27} exact />
          <Route  path='/Activités1_28' component = {Activité28} exact />
          <Route  path='/Activités1_29' component = {Activité29} exact />
          <Route  path='/Activités1_30' component = {Activité30} exact />
          <Route  path='/Activités1_31' component = {Activité31} exact />
          <Route  path='/Activités1_32' component = {Activité32} exact />
          <Route  path='/Activités1_33' component = {Activité33} exact />
          <Route  path='/Activités1_34' component = {Activité34} exact />
          <Route  path='/Activités1_35' component = {Activité35} exact />
          <Route  path='/Activités1_36' component = {Activité36} exact />
          <Route  path='/Activités1_37' component = {Activité37} exact />
          <Route  path='/Activités1_38' component = {Activité38} exact />
          <Route  path='/Activités1_39' component = {Activité39} exact />
          <Route  path='/Activités1_40' component = {Activité40} exact />
          <Route  path='/Activités1_41' component = {Activité41} exact />
          <Route  path='/Activités1_42' component = {Activité42} exact />
          <Route  path='/Activités1_43' component = {Activité43} exact />
          <Route  path='/Activités1_44' component = {Activité44} exact />
          <Route  path='/Activités1_45' component = {Activité45} exact />
          <Route  path='/Activités1_46' component = {Activité46} exact />
          <Route  path='/Activités1_47' component = {Activité47} exact />
          <Route  path='/Activités1_48' component = {Activité48} exact />
          <Route  path='/Activités1_49' component = {Activité49} exact />
          <Route  path='/Activités1_50' component = {Activité50} exact />
          <Route  path='/Activités1_51' component = {Activité51} exact />
          <Route  path='/Activités1_52' component = {Activité52} exact />
          <Route  path='/Activités1_53' component = {Activité53} exact />
          <Route  path='/Activités1_54' component = {Activité54} exact />
          <Route  path='/Activités1_55' component = {Activité55} exact />
          <Route  path='/Activités1_56' component = {Activité56} exact />
          <Route  path='/Activités1_57' component = {Activité57} exact />
          <Route  path='/Activités1_58' component = {Activité58} exact />
          <Route  path='/Activités1_59' component = {Activité59} exact />
          <Route  path='/Activités1_60' component = {Activité60} exact />
          <Route  path='/Activités1_61' component = {Activité61} exact />
          <Route  path='/Activités1_62' component = {Activité62} exact />
          <Route  path='/Activités1_63' component = {Activité63} exact />
          <Route  path='/Activités1_64' component = {Activité64} exact />
          <Route  path='/Activités1_65' component = {Activité65} exact />
          <Route  path='/Activités1_66' component = {Activité66} exact />
          <Route  path='/Activités1_67' component = {Activité67} exact />
          <Route  path='/Activités1_68' component = {Activité68} exact />
          <Route  path='/Activités1_69' component = {Activité69} exact />
          <Route  path='/Activités1_70' component = {Activité70} exact />
          

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
          <Route  path='/Activités2_11' component = {ActivitesDetails11} exact />
          <Route  path='/Activités2_12' component = {ActivitesDetails12} exact />
          <Route  path='/Activités2_13' component = {ActivitesDetails13} exact />
          <Route  path='/Activités2_14' component = {ActivitesDetails14} exact />
          <Route  path='/Activités2_15' component = {ActivitesDetails15} exact />

          <Route  path='/Articles' component = {Articles} exact />
          <Route  path='/Articles2' component = {Articles2} exact />
          <Route  path='/Galeries' component= {GaleriesPage} exact/>
          <Route  path='/images1' component= {PicturesPage} exact/>
          <Route  path='/images2' component= {PicturesPage2} exact/>

        </Switch>
      </HashRouter>
    );
  }
}

export default App;
