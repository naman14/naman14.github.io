import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Project from '../components/project'
import Work from '../components/work'
import Hackathon from '../components/hackathon'
import FeaturedProject from '../components/featured_project'
import { Grid, Row, Col } from 'react-flexbox-grid';

const projectsData = require('../data/get-projects.js')

const IndexPage = () => (
  <Layout>
    <SEO title="Naman Dwivedi" keywords={[`Naman`, `Android`, `Timber`]} />

    <div style={{textAlign: 'left'}}> 
      <p style={{fontSize:'20px'}}>Hi! I am <strong>Naman Dwivedi</strong> (also known as <strong>naman14</strong>). I am a software enginner primarily working on Android. 
      Currently, I am working over at <strong>Grofers</strong>.I graduated in 2018 from <strong>Delhi Techonological University</strong>. I am a open source enthusiast and most of my work can be found on my Github. I also work as a freelancer and if you have a project that you would like me to work on, drop me a mail.</p>
    </div>

    <br></br>
    <h2>Featured work</h2>

    <br></br>

      <Grid fluid>
      <Row>
      { projectsData.getProjects("work").map((project, i) => <Work project={project}/>) }
        </Row>
      </Grid>    
    <div>

    <br></br>
    <h2>Featured projects</h2>

    <br></br>

      <Grid fluid>
      <Row>
        { projectsData.getProjects("featured").map((project, i) => <FeaturedProject project={project}/>) }
        </Row>
      </Grid>    

    <h2>Open source projects</h2>
    <br></br>


    <Grid fluid>
      <Row>
      { projectsData.getProjects("all").map((project, i) => <Project project={project}/>) }
        </Row>
      </Grid>


    </div>

    <br></br>
    <h2>Talks and workshops</h2>
    <br></br>

    <Grid fluid>
      <Row>
      { projectsData.getProjects("talk").map((project, i) => <Hackathon project={project}/>) }
        </Row>
      </Grid>
    <br></br>

    {/* { projectsData.getProjects("talk").map((project, i) => 
    <div>
        <h2 style={{lineHeight:1}}>{project.name}</h2>
        <p>{project.description}</p>
        <p>{project.extra_desc}</p>   
        <br/>   
      </div>  
        ) 
    } */}

    <br></br>

    <br></br>
    <h2>Hackathons</h2>
    <br></br>

    <Grid fluid>
      <Row>
      { projectsData.getProjects("hackathon").map((project, i) => <Hackathon project={project}/>) }
        </Row>
      </Grid>
    <br></br>

<br></br>
<h2>News and media</h2>
<br></br>

<Grid fluid>
  <Row>
  { projectsData.getProjects("news").map((project, i) => <Hackathon project={project}/>) }
    </Row>
  </Grid>
<br></br>
</Layout>
)

export default IndexPage
