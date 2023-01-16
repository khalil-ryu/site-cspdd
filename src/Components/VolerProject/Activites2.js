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
  image:'https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/311140488_112307401657401_1292440017078755254_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=0pJobVvPjrIAX_koeYH&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBprViJWGxUFr46SyHvas5ukd325tUMGdye3WxyNHv0vg&oe=63C97CF6',
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
  image:"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/316170645_127952306759577_4535478451849917406_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tSTYdHHRhtEAX92Ox_B&_nc_ht=scontent.ftun16-1.fna&oh=00_AfASPQxt4uEriLTmUZPBCZH1AmZauCaaTrzUfIcCv-dOLg&oe=63C94301",
  link: "/Activités2_3"
}, {
  id: 4,
  heading: "Coaching",
  content: "Atelier de coaching sur le recrutement, l'intégration et la fidélisation de nouveaux éléments dans les associations - 27/11/2022  ",
  image:"https://cspdd.tn/static/media/activites4.f613b5ce.jpg",
  link: "/Activités2_4"
}, {
  id: 5,
  heading: "Réglementation tunisienne",
  content: "formation sur la réglementation tunisienne en matière de la protection de l'environnement - 12/11/2022 ",
  image:"https://cspdd.tn/static/media/activites5.c9c2976b.jpg",
  link: "/Activités2_5",
}, {
  id: 6,
  heading: "Sortie environnementale",
  content: "Gouvernorat de Ben Arous - 25/12/2022 ",
  image:"https://cspdd.tn/static/media/activites7.91dcd89f.jpg",
  link: "/Activités2_6"
}, {
  id: 6,
  heading: "Formation",
  content: "Gouvernance et démocratie participative : 1ère séance - 08/01/2023 ",
  image:"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/324656040_446715204197775_7778461632588467381_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SsxqwAB38pgAX9aNZDm&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC0tbVbdOs_xXetvVxZc8148ZlES5RrI-riACRtZFsxWw&oe=63CAF29D",
  link: "/Activités2_7"
},  {
  id: 7,
  heading: "Formation",
  content: "Gouvernance et démocratie participative : 2ère séance - 15/01/2023 ",
  image:"https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/325754820_1330240994486174_2572065701234681696_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=02oMG7vfw2AAX8qAiCN&tn=P2wl8cil6FPw5PnX&_nc_ht=scontent.ftun16-1.fna&oh=00_AfCdLSZXtI9klLzqpL_D6Ow8fCLvtp9IMlE0IptztMnZ5A&oe=63CB46F1",
  link: "/Activités2_8"
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
              <Grid item key={card.id} xs={6} sm={6} md={3}>
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