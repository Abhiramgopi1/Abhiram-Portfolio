import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, ToggleButton, ToggleGroup, Divider ,CardContainer} from '../Projects/ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';


const Projects = () => {
  const [toggle, setToggle] = useState('all');
    return (
      <Container id="projects">
        <Wrapper>
          <Title>Projects</Title>
          <Desc>
            I have worked on a wide range of projects. Here are some of my projects.
          </Desc>
          <ToggleGroup>
            {toggle === 'all' ?
              <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            }
            <Divider/>
            {toggle === 'android app' ?
              <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
              :
              <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
            }
            <Divider/>
            {toggle === 'games' ?
              <ToggleButton active value="games" onClick={() => setToggle('games')}>GAMES</ToggleButton>
              :
              <ToggleButton value="games" onClick={() => setToggle('games')}>GAMES</ToggleButton>
            }
            <Divider />
            {toggle === 'web app' ?
              <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
              :
              <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            }
          </ToggleGroup>
          <CardContainer>
            {toggle === 'all' && 
            projects.map((project) => <ProjectCard project={project} />)}
            {projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard project={project} />
              ))}
          </CardContainer>
          
        </Wrapper>
      </Container>
    );
  };
  
  export default Projects;