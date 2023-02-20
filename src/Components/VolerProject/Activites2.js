import React, {useState} from 'react';
import { Sidebar } from '../Sidebar';
import Navbar from '../Navbar';
import InfoSection from './InfoSection';
import { activites1, activites2, activites3, activites4, activites5, activites6, activites7, activites8 } from '../InfoSection/Data';
import Footer from '../Footer';
import Project2_prototype from './Project2_prototype';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLinksRoute } from '../Navbar/NavbarElements';
const cards = [{
  id: 1,
  heading: "1ére rencontre",
  content: "Rencontre avec les associations - 09/10/2022",
  image:'https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/9.jpg?raw=true',
  link: "/Activités2_1"
}, {
  id: 2,
  heading: "Planification Stratégique",
  content: "1ére séance de formation sur l'identification des points forts et des points faibles - 13/11/2022",
  image:"https://cspdd.tn/static/media/activites2.b91c5aa2.jpg",
  link: "/Activités2_2"
}, {
  id: 3,
  heading: "Planification Stratégique",
  content: "2ème séance de formation dans le cadre de la 1ère activité intitulée 'Planification stratégique - 20/11/2022",
  image:"https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/12.jpg?raw=true",
  link: "/Activités2_3"
}, {
  id: 4,
  heading: "Coaching",
  content: "Atelier de coaching sur le recrutement, l'intégration et la fidélisation de nouveaux éléments dans les associations - 27/11/2022  ",
  image:"https://cspdd.tn/static/media/activites4.f613b5ce.jpg",
  link: "/Activités2_4"
}, {
  id: 5,
  heading: "Environnement / la pollution dans le G.Ben Arous",
  content: "la réglementation tunisienne en matière de la protection de l'environnement séance 1",
  image:"https://cspdd.tn/static/media/activites5.c9c2976b.jpg",
  link: "/Activités2_5",
}, {
  id: 6,
  heading: "Environnement / la pollution dans le G.Ben Arous",
  content: "sortie environnementale séance 2",
  image:"https://cspdd.tn/static/media/activites7.91dcd89f.jpg",
  link: "/Activités2_6"
}, {
  id: 9,
  heading: "Journée porte ouverte AJCC X AJIK",
  content: " l' AJCC Mhamdia جمعية الشباب المبدع و الواعي بالمحمدية et جمعية شباب مبادرون بالخليدية    organisent une journée porte ouverte pour présenter leurs activités et recruter de nouveaux membres et volontaires - 18/12/2022 ",
  image:"https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/85.jpg?raw=true",
  link: "/Activités2_9"
}, {
  id: 6,
  heading: "gouvernance et démocratie participative",
  content: "1ère séance - la différence entre gestion et gouvernance - 08/01/2023 ",
  image:"https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/121.jpg?raw=true",
  link: "/Activités2_7"
},  {
  id: 7,
  heading: "gouvernance et démocratie participative",
  content: "2ère séance - 15/01/2023 ",
  image:"https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/127.jpg?raw=true",
  link: "/Activités2_8"
},   {
  id: 10,
  heading: "Journée portes ouvertes - Association Volonté et Citoyenneté",
  content: " 21/01/2023 ",
  image:"https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/133.jpg?raw=true",
  link: "/Activités2_10"
},  {
  id: 11,
  heading: "Formation en économie sociale et solidaire",
  content: "1ére Séance  - 29/01/2023 ",
  image:"https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/140.jpg?raw=true",
  link: "/Activités2_11"
},  {
  id: 12,
  heading: "Formation en économie sociale et solidaire",
  content: "2éme séance  - 05/02/2023 ",
  image:"https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/148.jpg?raw=true",
  link: "/Activités2_12"
},  {
  id: 13,
  heading: "Visite de Douar Laroussi à Sidi Jedidi",
  content: " 12/02/2023 ",
  image:"https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/152.jpg?raw=true",
  link: "/Activités2_13"
},  {
  id: 14,
  heading: "Environnement / la pollution dans le G.Ben Arous",
  content: "3ème séance de formation en environnement  - 19/02/2023 ",
  image:"https://github.com/khalil-ryu/cspdd-images/blob/master/project-two/155.jpg?raw=true",
  link: "/Activités2_14"
}];

const theme = createTheme();
const Activites2 = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return(	
		< >
		
		<Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>
		{/* <Project2_prototype {...activites1}/>
		<InfoSection {...activites2}/>
		<InfoSection {...activites3}/>
		<InfoSection {...activites4}/>
		<InfoSection {...activites5}/>
		<InfoSection {...activites6}/> 
		<InfoSection {...activites7}/> 
		<InfoSection {...activites8}/>  */}
		<ThemeProvider theme={theme} >
      <CssBaseline  /> 
      <main>
        {/* Hero unit */}
        {/* <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 2,
            pb: 2,
          }}
        >
          {/* <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container> 
        </Box> */}
        <Container sx={{ py: 8,bgcolor: '#9CC3D5FF' }} maxWidth="">
          {/* End hero unit */}
          <Grid container spacing={10}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={8} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
					
                    sx={{
                      // 16:9
                      pt: '10.25%',
                    }}
                    image={card.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <NavLinksRoute smooth= {true} duration= {500} spy={true} exact='true' to={card.link}><Button size="small">Savoir Plus</Button> </NavLinksRoute>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
		<Footer/>
		</>
		)
}

export default Activites2;