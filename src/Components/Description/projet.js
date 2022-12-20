import React from 'react'
import {
	InfoContainer,
	InfoWrapper3,	
	Column12,
	TextWrapper,
	TopLine,
	Heading2,
	Subtitle,
} from '../InfoSection/InfoElements';

const Description = ({lightBg, id, lightText, darkText}) => {
    return(
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper3>
                        <Column12>
                            <TextWrapper>
                                <Subtitle darkText={darkText}> 
                                    <strong>Trois phases composent le  projet : une phase de démarrage, une phase de mise en œuvre des activités propres de l’action et une phase finale de clôture de l’action. Les différentes activités (A) planifiées se complètent, elles sont abordées d’une façon progressive, riches en connaissances avec une approche d’apprentissage ludique et attractive afin d’aboutir aux résultats escomptés pour chaque objectif spécifique (OS) fixé.
                                    Différentes activités (A) sont planifiées dans le but  d’atteindre les résultats escomptés  pour chaque phase du projet, à savoir :</strong>
                                </Subtitle>
                                <br/>
                                <br/>
                                <br/>
                                <strong><TopLine>PHASE DE DEMARRAGE</TopLine></strong>
                                <Heading2 lightText={lightText}>OS0 : Dissémination et adhésion à l’action</Heading2>
                                <Subtitle darkText={darkText}>
                                <strong>A0 : Encadrement et dissémination de l’action.</strong>
                                <br/>   
                                • A0.1. Diffuser l’information sur l’action.
                                <br/>  
                                • A0.2.  Inscrire et former les groupes de travail (un groupe/établissement scolaire prévu).
                                <br/>  
                                • A0.3.   Créer un site web et une page Facebook pour le projet.</Subtitle>	


                                <TopLine><strong>PHASE DE MISE EN ŒUVRE DES ACTIVITES</strong></TopLine>
                                <Heading2 lightText={lightText}>OS1 : -Découvrir son territoire - Stimuler l’action et la participation- Porter un regard critique et autonome sur la situation environnementale des quartiers/villes limitrophes du Lac</Heading2>
                                <Subtitle darkText={darkText}>
                                <strong>A1 : Enquête ou sondage d’opinions et débats</strong>
                                <br/>   
                                •  A1.1. Développer des aptitudes pour l’enquête et d’attitudes d’écoute par la formation.
                                <br/>  
                                • A1.2. Réaliser une enquête d’opinions sur l’état de l’environnement dans les quartiers des élèves. 
                                <br/>  
                                • A1.3. Dépouiller, discuter et débattre les résultats obtenus de l’enquête.
                                Cette étude pourrait être utilisée par les élèves pour instruire des projets créatifs tels que préconisé dans l’activité A3.2. </Subtitle>

                                <Heading2 lightText={lightText}>OS2 : Développer des connaissances fondamentales sur les thématiques se rapportant à la pollution, les causes, les impacts sur l’environnement - Développer une conscience environnementale</Heading2>
                                <Subtitle darkText={darkText}>
                                <strong>A2 : Compréhension de la pollution et des problématiques environnementales</strong>
                                <br/>   
                                •  A2.1. Former et donner un sens au mot pollution - Sortie sur site.
                                <br/>  
                                • A2.2. Organiser un atelier sur un secteur industriel générateur de pollution- Secteur textile ou métaux lourds. 
                                <br/>  
                                </Subtitle>				

                                <Heading2 lightText={lightText}>OS3 : Comprendre la provenance de différents déchets - Prendre conscience des impacts environnementaux des rejets anarchiques des déchets – Développer la notion qu’en triant et réduisant les déchets, il est possible d’agir en faveur de la protection de l’environnement et la gestion durable des ressources.</Heading2>
                                <Subtitle darkText={darkText}>
                                <strong>A3 : Impacts des déchets sur l’environnement</strong>
                                <br/>   
                                •  A3.1. Former et apprendre à différencier les types de déchets –Découvrir la destination finale des déchets – Faire prendre conscience aux élèves des répercutions négatives des déchets sur le milieu naturel. 
                                <br/>  
                                • A3.2. Réflexion sur des alternatives de gestion des déchets –Visite d’une décharge –Lancer un projet de réhabilitation d’une décharge ou création d’une déchèterie. 
                                <br/>  
                                • A3.3. Organiser un atelier de sensibilisation et discussion sur des métiers d’avenir comme les filières vertes, l’éco-conseil.
                               </Subtitle>		

                                <Heading2 lightText={lightText}>OS4 : 1. Former des clubs de développement durable - Construire une pratique citoyenne par une attitude participative et responsable </Heading2>
                                <Subtitle darkText={darkText}>
                                <strong>A4 : Clubs de Développement Durable (CDD)</strong>
                                <br/>   
                                • A4.1. Créer un club de développement durable par établissement scolaire. 
                                <br/>  
                                • A4.2. Créer un réseau interclubs ou inter-jeunes de discussion et de dialogue.
                                <br/>  
                                • A4.3. Organiser deux ateliers de formation sur les objectifs du développement durable et  la gouvernance locale –Réaliser une action citoyenne.
                                <br/>
                                • A4.4. Former sur le journalisme et technique de rédaction d’article pour mettre en place un bulletin ou journal mensuel et une charte de bonne conduite pour la préservation de l’environnement. 
                                </Subtitle>		

                                 <Heading2 lightText={lightText}>OS5 : 1. Donner aux participants les clefs pour comprendre le discours cinématographique - Réaliser un court métrage sur l’état de l’environnement autour du Lac.</Heading2>
                                <Subtitle darkText={darkText}>
                                <strong>A5 : Club Audio-visuel (CAV)</strong>
                                <br/>   
                                • A5.1. Créer et former deux clubs audio-visuels – Former sur les techniques audio-visuelles pour amateurs afin de les initier à la culture cinématographique. 
                                <br/>  
                                • A5.2. Réaliser un court métrage autour du Lac, son histoire, ses problématiques et son avenir au regard des jeunes de la région – Former sur la réalisation d’un film.
                                <br/>  
                                <br/>
                                <TopLine><strong>PHASE	DE CLÔTURE DE L’ACTION	</strong></TopLine>
                                <br/>

                                • Organiser une conférence pour la clôture de l’action en présentant les résultats du projet.
                                <br/>
                                <br/>
                                <p>Ci-joint le plan d’actions du projet.</p>
                                <a href="https://github.com/khalil-ryu/cspdd-images/blob/master/AP01-05%20-Plan%20Actions.xlsx?raw=true" download>Plan d'action</a>
                                <p>Ci-joint le tableau d'état d'avancement du projet. </p>
                                <a href="https://github.com/khalil-ryu/cspdd-images/blob/master/Etat-Avancement-Action-P01-05_2021.xlsx?raw=true" download>Etat d'avancement du projet </a>
                                <p>Ci-joint les termes de référence pour le recrutement d'un chef de Projet pour l'action. </p>
                                <a href="https://github.com/khalil-ryu/cspdd-images/raw/master/AO-Recrutement.pdf?raw=true" download>Termes de référence pour le recrutement d'un chef de Projet pour l'action.</a>

                                </Subtitle>	
                                
                            </TextWrapper>
                        </Column12>
                </InfoWrapper3>
            </InfoContainer>
        </>
    ) 
    
}

export default Description;
