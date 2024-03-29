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
      <p style={{fontSize:'20px'}}>Hi! I am <strong>Naman Dwivedi</strong> (<strong>naman14</strong>). I am a software engineer primarily working with Web3 and Android. 
      Currently, I am building Xtremeverse and BTX mobile shooter game at <strong>Glip</strong> . Previously, I worked at <strong>BharatPe</strong>, <strong>Doubtnut</strong> and <strong>Grofers</strong>. I graduated in 2018 from Delhi Techonological University.
      I am an open source enthusiast and most of my work can be found on my <strong><a style={{textDecoration: 'none', color: '#000000'}} 
      href="https://github.com/naman14">Github</a></strong>.</p>
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
