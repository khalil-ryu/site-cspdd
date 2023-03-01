import React, {useState} from 'react';
import {Sidebar} from '../Components/Sidebar/index';
import Navbar	 from '../Components/Navbar/index';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLinksRoute } from '../Components/Navbar/NavbarElements';
import Footer	 from '../Components/Footer/index';
const theme = createTheme();

let cards = [
	{
		id: 1,
		heading: "Forum : Le Développement Durale et l'Economie Sociale et Solidaire Leviers De Croissance",
		content: "01/04/2019 - cité des sciences",
		image: require('../images/forum.jpg').default,
		link: "/Activités1_01"
	  },
	  {
		id: 2,
		heading: "Action au niveau d'une l'école  ",
		content: "SIDI MOUSSA, SERS - gouvernorat du KEF",
		image: require('../images/ecole.jpg').default,
		link: "/Activités1_02"
	  },
	  {
		id: 3,
		heading: "Conférence sur les indicateurs des 17 objectifs du développement durable",
		content: "l'Institut National Des Statistiques",
		image: require('../images/Capture.PNG').default,
		link: "/Activités1_03"
	  },
	 {
		id: 4,
		heading: "Séminaire sur Le Développement Durable",
		content: "FSEG Mahdia",
		image: require('../images/seminaire.jpg').default,
		link: "/Activités1_04"
	  },
	{
		id: 5,
		heading: "La cérémonie de signature du contrat de financement de notre projet",
		content: "30/03/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/1.jpg?raw=true',
		link: "/Activités1_1"
	  },
	  {
		id: 6,
		heading: "Séance de travail pour les préparatifs du lancement du projet",
		content: "collège Ibn Charaf Menzel Bourguiba - 25/04/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/4.jpg',
		link: "/Activités1_2"
	  },
	  {
		id: 7,
		heading: "Séance de travail pour les préparatifs du lancement du  projet",
		content: " lycée Ibn sinaa Menzel Bourguiba - 25/04/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/5.jpg',
		link: "/Activités1_3"
	  },
	  {
		id: 8,
		heading: "Séance de travail pour les préparatifs du lancement du  projet ",
		content: "lycée Menzel Jemil - 29/04/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/8.jpg?raw=true',
		link: "/Activités1_4"
	  },
	  {
		id: 9,
		heading: "lancement de la préparation du groupe des élèves pour le projet ",
		content: "collège Menzel Jemil - 19/05/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/9.jpg?raw=true',
		link: "/Activités1_5"
	  },
	  {
		id: 10,
		heading: "lancement  de la préparation du groupe des élèves pour le projet ",
		content: "lycée Menzel Jemil - 19/05/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/12.jpg?raw=true',
		link: "/Activités1_6"
	  },
	  {
		id: 11,
		heading: "Lancement ce matin de la préparation du groupe des élèves pour le projet",
		content: "Lycée Ibn Sina Menzel Bourguiba - 21/05/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/15.jpg?raw=true',
		link: "/Activités1_7"
	  },
	  {
		id: 12,
		heading: "Lancement ce matin de la préparation du groupe des élèves pour le projet ",
		content: "collège Ibn Charaf Menzel Bourguiba - 29/05/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/18.jpg?raw=true',
		link: "/Activités1_8"
	  },
	  {
		id: 13,
		heading: "Démarrage de notre action de sensibilisation et d'éducation environnementale",
		content: "12/06/2021 - Andalucia Beach Hôtel Résidence",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/21.jpg?raw=true',
		link: "/Activités1_9"
	  },{
		id: 14,
		heading: "Le lancement de la première séance de travail du projet",
		content: "collège Ibn Charaf à Menzel Bourguiba - 28/06/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/24.jpg?raw=true',
		link: "/Activités1_10"
	  },{
		id: 15,
		heading: "relance des activités du projet ",
		content: "collège Iben Charaf Menzel Bourguiba 24/09/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/27.jpg?raw=true',
		link: "/Activités1_11"
	  },{
		id: 16,
		heading: "une séance de travail sur les préparatifs du lancement des activités",
		content: " collège Menzel Jemil - 27/09/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/30.jpg?raw=true',
		link: "/Activités1_12"
	  },{
		id: 17,
		heading: "la relance des activités du projet ",
		content: "lycée Menzel Jemil - 03/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/32.jpg?raw=true',
		link: "/Activités1_13"
	  },{
		id: 18,
		heading: " la relance des activités du projet ",
		content: " lycée Menzel Bouguiba Ibn Sina - 06/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/35.jpg?raw=true',
		link: "/Activités1_14"
	  },{
		id: 19,
		heading: "Séance de travail",
		content: " lycée Menzel Jemil - 06/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/38.jpg?raw=true',
		link: "/Activités1_15"
	  },{
		id: 20,
		heading: "une séance de travail avec la nouvelle Directrice",
		content: "collège  Ibn Charaf Menzel Bourguiba - 07/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/41.jpg?raw=true',
		link: "/Activités1_16"
	  },{
		id: 21,
		heading: "une réunion avec le directeur Mr Faycel Fray",
		content: "collègue Menzel jemil - 07/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/42.jpg?raw=true',
		link: "/Activités1_17"
	  },{
		id: 22,
		heading: "formation sur la pollution",
		content: "collège Menzel Jemil  - 08/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/45.jpg?raw=true',
		link: "/Activités1_18"
	  },{
		id: 23,
		heading: "Séance de travail",
		content: "lycée Ibn Sina Menzel Bourguiba - 16/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/48.jpg?raw=true',
		link: "/Activités1_19"
	  },{
		id: 24,
		heading: "Séance de travail",
		content: "Collège Ibn Charaf - 16/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/51.jpg?raw=true',
		link: "/Activités1_20"
	  },{
		id: 25,
		heading: "Séance de travail",
		content: " lycée Menzel jemil - 22/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/54.jpg?raw=true',
		link: "/Activités1_21"
	  },{
		id: 26,
		heading: "Séance de travail",
		content: " collègue Menzel Jemil - 22/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/57.jpg?raw=true',
		link: "/Activités1_22"
	  },{
		id: 27,
		heading: "Continuation de la formation sur la pollution",
		content: "collège Ibn Charaf à Menzel Bourguiba  - 23/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/60.jpg?raw=true',
		link: "/Activités1_23"
	  },{
		id: 28,
		heading: "Continuation de la formation sur la pollution",
		content: " lycée Ibn Sina - 23/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/64.jpg?raw=true',
		link: "/Activités1_24"
	  },{
		id: 29,
		heading: "Formation sur la communication et le développement personnel",
		content: "lycée Menzel Jemil - 29/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/67.jpg?raw=true',
		link: "/Activités1_25"
	  },{
		id: 30,
		heading: "Formation sur la communication et le développement personnel ",
		content: "lycée Ibn Sina - 30/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/70.jpg?raw=true',
		link: "/Activités1_26"
	  },{
		id: 31,
		heading: "Formation sur la pollution",
		content: "collège Ibn Charaf à Menzel Bourguiba - 30/10/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/71.jpg?raw=true',
		link: "/Activités1_27"
	  },{
		id: 32,
		heading: "Formation sur la communication et le développement personnel",
		content: " collège Ibn Charaf Menzel Bourguiba - 13/11/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/72.jpg?raw=true',
		link: "/Activités1_28"
	  },{
		id: 33,
		heading: "Formation sur la communication et développement personnel",
		content: "collège de Menzel Jemil - 26/11/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/75.jpg?raw=true',
		link: "/Activités1_29"
	  },{
		id: 34,
		heading: "Démarrage de la formation sur la gestion des déchets",
		content: "Collège Ibn Charaf Menzel Bourguiba - 27/11/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/80.jpg?raw=true',
		link: "/Activités1_30"
	  },{
		id: 35,
		heading: "Formation sur l'enquête ",
		content: "Lycée de Menzel Jemil - 20/12/2021",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/81.jpg?raw=true',
		link: "/Activités1_31"
	  },{
		id: 36,
		heading: "L'implantation de 12 oliviers",
		content: "Lycée Menzel Jemil - 11/02/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/84.jpg?raw=true',
		link: "/Activités1_32"
	  },{
		id: 37,
		heading: "Atelier sur les problèmes d'emballage, les professions d'avenir dans le domaine de l'environnement et la répartition du groupe de travail",
		content: "Collège de Menzel Jemil - 18/02/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/87.jpg?raw=true',
		link: "/Activités1_33"
	  },{
		id: 38,
		heading: "Atelier sur les problèmes d'emballage, les professions d'avenir dans le domaine de l'environnement et la répartition du groupe de travail",
		content: " Lycée de Menzel Jemil - 18/10/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/90.jpg?raw=true',
		link: "/Activités1_34"
	  },
	  {
		id: 39,
		heading: "Atelier sur les problèmes d'emballage, les professions d'avenir dans le domaine de l'environnement et la répartition du groupe de travail",
		content: "Collège Ibn Charaf de Menzel Bourguiba - 24/02/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/93.jpg?raw=true',
		link: "/Activités1_35"
	  },
	  {
		id: 40,
		heading: "Atelier sur les problèmes d'emballage, les professions d'avenir dans le domaine de l'environnement et la répartition du groupe de travail",
		content: "Lycée Ibn Sina de Menzel Bourguiba - 24/03/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/95.jpg?raw=true',
		link: "/Activités1_36"
	  },{
		id: 41,
		heading: "Une discussion et assistance des élèves sur leurs  projets créatifs",
		content: "Collège de Menzel Jemil - 11/03/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/98.jpg?raw=true',
		link: "/Activités1_37"
	  },{
		id: 42,
		heading: "Evénement sur les projets créatifs de gestion des déchets ménagers présentés par les groupes de travail",
		content: "4 établissements scolaires de Menzel Jemil et Menzel Bourguiba - 24/03/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/100.jpg?raw=true',
		link: "/Activités1_38"
	  },{
		id: 43,
		heading: "Elections du bureau exécutif  du club de développement durable",
		content: "Collège Menzel Jemil. - 06/05/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/104.jpg?raw=true',
		link: "/Activités1_39"
	  },{
		id: 44,
		heading: "Elections du bureau exécutif  du club de développement durable",
		content: "Lycée Menzel Jemil - 06/05/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/107.jpg?raw=true',
		link: "/Activités1_40"
	  },{
		id: 45,
		heading: "Elections du bureau exécutif  du club de développement durable",
		content: "Collège Ibn Charaf  Menzel Bourguiba - 07/05/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/111.jpg?raw=true',
		link: "/Activités1_41"
	  },{
		id: 46,
		heading: "Elections du bureau exécutif  du club de développement durable",
		content: "Lycée Ibn Sina Menzel Bourguiba - 07/05/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/114.jpg?raw=true',
		link: "/Activités1_42"
	  },{
		id: 47,
		heading: "Formation sur les objectifs du développement durable 2030",
		content: "Collège Menzel Jemil - 15/05/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/117.jpg?raw=true',
		link: "/Activités1_43"
	  },{
		id: 48,
		heading: "Formation sur les objectifs du développement durable 2030",
		content: "Lycée Menzel Jemil - 15/05/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/120.jpg?raw=true',
		link: "/Activités1_44"
	  },{
		id: 49,
		heading: "Formation sur les objectifs du développement durable 2030",
		content: "Collège Menzel Bourguibas - 15/05/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/123.jpg?raw=true',
		link: "/Activités1_45"
	  },{
		id: 50,
		heading: "Formation sur les objectifs du développement durable 2030",
		content: "Lycée Menzel Bourguiba - 15/05/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/126.jpg?raw=true',
		link: "/Activités1_46"
	  },{
		id: 51,
		heading: "Formation sur la gouvernance et la transparence pour atteindre les objectifs de l'agenda 2030",
		content: "Collège Ibn Sharaf Menzel Bourguiba - 19/05/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/129.jpg?raw=true',
		link: "/Activités1_47"
	  },{
		id: 52,
		heading: "Formation sur la gouvernance et la transparence pour atteindre les objectifs de l'agenda 2030",
		content: "Lycée Ibn Sina Menzel Bourguiba - 19/05/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/132.jpg?raw=true',
		link: "/Activités1_48"
	  },{
		id: 53,
		heading: "Formation sur la gouvernance et la transparence pour atteindre les objectifs de l'agenda 2030",
		content: "Collège Menzel Jemil  - 20/05/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/135.jpg?raw=true',
		link: "/Activités1_49"
	  },{
		id: 54,
		heading: "Formation sur la gouvernance et la transparence pour atteindre les objectifs de l'agenda 2030",
		content: "Lycée  Menzel jemil - 20/05/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/138.jpg?raw=true',
		link: "/Activités1_50"
	  },{
		id: 55,
		heading: "Formation a été organisé sur le thème des techniques de rédaction d'un article et le role du  journalisme",
		content: "Lycée Ibn Sina Menzel Bourguiba - 01/06/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/141.jpg?raw=true',
		link: "/Activités1_51"
	  },{
		id: 56,
		heading: "Formation a été organisé sur le thème des techniques de rédaction d'un article et le role du  journalisme",
		content: "collège Ibn Charaf Menzel Bourguiba  - 01/06/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/144.jpg?raw=true',
		link: "/Activités1_52"
	  },{
		id: 57,
		heading: "Formation a été organisé sur le thème des techniques de rédaction d'un article et le role du  journalisme",
		content: "Collège Menzel Jemil  - 03/06/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/147.jpg?raw=true',
		link: "/Activités1_53"
	  },{
		id: 58,
		heading: "Formation a été organisé sur le thème des techniques de rédaction d'un article et le role du  journalisme",
		content: "Lycée Menzel Jemil - 03/06/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/150.jpg?raw=true',
		link: "/Activités1_54"
	  },{
		id: 59,
		heading: " journée organisée par Ecopact sur la charte du développement durable de lagune de Bizerte ",
		content: "Hotel Nour - 15/06/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/153.jpg?raw=true',
		link: "/Activités1_55"
	  },{
		id: 60,
		heading: "Formation sur les techniques de la photographie & lancement du club de cinéma",
		content: "Maison d'Art - 08/07/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/159.jpg?raw=true',
		link: "/Activités1_56"
	  },{
		id: 61,
		heading: "formation sur techniques de la photographie & techniques et étapes de l'ecriture des scénarios",
		content: "lycée Menzel Jemil - 16/07/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/161.jpg?raw=true',
		link: "/Activités1_57"
	  },{
		id: 62,
		heading: "Séance du groupe de vidéo et montage",
		content: "maison d'Art - 21/07/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/167.jpg?raw=true',
		link: "/Activités1_58"
	  },{
		id: 63,
		heading: "formation sur techniques de la photographie & techniques et étapes de l'ecriture des scénarios",
		content: "lycée Menzel Jemil - 23/07/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/170.jpg?raw=true',
		link: "/Activités1_59"
	  },{
		id: 64,
		heading: "Séance du groupe de vidéo et montage",
		content: "maison d'Art - 27/07/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/173.jpg?raw=true',
		link: "/Activités1_60"
	  },{
		id: 65,
		heading: "Séance du groupe de vidéo et montage",
		content: "Lycée Menzel Jemil - 28/07/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/176.jpg?raw=true',
		link: "/Activités1_61"
	  },{
		id: 66,
		heading: "réunions avec les direteurs des collèges et lycées",
		content: "Menzel Jemil et Menzel Bourguiba - 20/10/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/179.jpg?raw=true',
		link: "/Activités1_62"
	  },{
		id: 67,
		heading: "Journée porte ouverte pour les nouveaux adhérants du club de développement durable",
		content: "Lycée Menzel Jemil - 26/10/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/182.jpg?raw=true',
		link: "/Activités1_63"
	  },{
		id: 68,
		heading: "Journée porte ouverte pour les nouveaux adhérants du club de développement durable",
		content: "Lycée Ibn Sina à Menzel Bouguiba - 01/11/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/185.jpg?raw=true',
		link: "/Activités1_64"
	  },{
		id: 69,
		heading: "Préparation de l'activité de compostage",
		content: "Lycée Ibn Sina Menzel Bourguiba - 19/11/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/188.jpg?raw=true',
		link: "/Activités1_65"
	  },{
		id: 70,
		heading: "Signature du contrat pour la réalisation du court métrage",
		content: "Maison de l'art à Menzel Bourguiba - 19/11/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/191.jpg?raw=true',
		link: "/Activités1_66"
	  },{
		id: 71,
		heading: "Préparatifs du court métrage avec les acteurs",
		content: "Maison de l'art à Menzel Bourguiba - 28/01/2023",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/194.jpg?raw=true',
		link: "/Activités1_67"
	  },{
		id: 72,
		heading: "Application de la méthodologie de la création du compost avec des composants naturels",
		content: "Jardin Lycée Menzel Jmil - 03/02/2022",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/197.jpg?raw=true',
		link: "/Activités1_68"
	  },{
		id: 73,
		heading: "Phase finale du tournage du court métrage ",
		content: "Lac de bizerte - 04/02/2023",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/200.jpg?raw=true',
		link: "/Activités1_69"
	  },{
		id: 74,
		heading: "La cérémonie de cloture du projet ",
		content: "Ecopact - 07/02/2023",
		image:'https://raw.githubusercontent.com/khalil-ryu/cspdd-images/master/project_one_remake/208.jpg?raw=true',
		link: "/Activités1_70"
	  }
];
const Activites = () => {
	const[isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return(	
		<>
		<Sidebar isOpen= {isOpen} toggle= {toggle}/>
		<Navbar toggle= {toggle}/>
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

export default Activites;