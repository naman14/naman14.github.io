import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'
import Work from '../components/work'
import ProfessionalWork from '../components/professional_work'
import Hackathon from '../components/hackathon'
import FeaturedProject from '../components/featured_project'
import { Grid, Row, Col } from 'react-flexbox-grid';

const projectsData = require('../data/get-projects.js')

const IndexPage = () => (
  <Layout>
    <SEO title="Naman Dwivedi" keywords={[`Naman`, `Android`, `Timber`]} />

    <div style={{textAlign: 'left'}}> 
      <p style={{fontSize:'20px'}}>Hi! I am <strong>Naman Dwivedi</strong> (<strong>naman14</strong>). I am a fullstack software engineer primarily working on Android. 
      Currently, I am working at <strong>BharatPe</strong>. Previously, I worked at Doubtnut and Grofers. I graduated in 2018 from Delhi Techonological University.
      I am an open source enthusiast and most of my work can be found on my <strong><a style={{textDecoration: 'none', color: '#000000'}} 
      href="https://github.com/naman14">Github</a></strong>. I also work as a freelancer and if you have a project that you would like me to work on,
      drop me a <a style={{textDecoration: 'none', color: '#000000'}} href="mailto:namandwivedi14@gmail.com"><strong>mail.</strong></a></p>
    </div>

    <br/>
    <h1>Featured work</h1>

    <br/>
      <Grid fluid>
        <Row>
        { projectsData.getProjects("work").map((project, i) => <Work project={project}/>) }
        </Row>
      </Grid>    
    <div>

    <h1>Professional work</h1>

    <br/>
      <Grid fluid>
        <Row>
        { projectsData.getProjects("professional-work").map((project, i) => <ProfessionalWork project={project}/>) }
        </Row>
      </Grid>    

    <br/>
    <h1>Featured projects</h1>
    <br/>

      <Grid fluid>
        <Row>
          { projectsData.getProjects("featured").map((project, i) => <FeaturedProject project={project}/>) }
        </Row>
      </Grid>    

    <h1>Open source projects</h1>
    <br/>
    <br/>

    <Grid fluid>
        <Row>
          { projectsData.getProjects("oss").map((project, i) => <Project project={project}/>) }
        </Row>
    </Grid>

    </div>

    <h1>Talks and workshops</h1>
    <br/>

    <Grid fluid>
        <Row>
          { projectsData.getProjects("talk").map((project, i) => <Hackathon project={project}/>) }
        </Row>
    </Grid>

    <h1>Hackathons</h1>
    <br/>

    <Grid fluid>
        <Row>
          { projectsData.getProjects("hackathon").map((project, i) => <Hackathon project={project}/>) }
        </Row>
    </Grid>

  <h1>News and media</h1>
  <br/>

    <Grid fluid>
        <Row>
          { projectsData.getProjects("news").map((project, i) => <Hackathon project={project}/>) }
        </Row>
    </Grid>
  <br/>
</Layout>
)

export default IndexPage
