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
      <p style={{fontSize:'20px'}}>Hi! I am <strong>Naman Dwivedi</strong> (<strong>naman14</strong>). I am a software enginner primarily working on Android. 
      Currently, I am working over at <strong>Grofers</strong>.I graduated in 2018 from <strong>Delhi Techonological University</strong>.
       I am a open source enthusiast and most of my work can be found on my Github.
        I also work as a freelancer and if you have a project that you would like me to work on,
         drop me a <a style={{textDecoration: 'none', color: '#000000'}} href="mailto:namandwivedi14@gmail.com"><strong>mail.</strong></a></p>
    </div>

    <br></br>
    <h1>Featured work</h1>

    <br></br>

      <Grid fluid>
      <Row>
      { projectsData.getProjects("work").map((project, i) => <Work project={project}/>) }
        </Row>
      </Grid>    
    <div>

    <br></br>
    <h1>Featured projects</h1>

    <br></br>

      <Grid fluid>
      <Row>
        { projectsData.getProjects("featured").map((project, i) => <FeaturedProject project={project}/>) }
        </Row>
      </Grid>    

    <h1>Open source projects</h1>
    <br></br>
    <br></br>


    <Grid fluid>
      <Row>
      { projectsData.getProjects("oss").map((project, i) => <Project project={project}/>) }
        </Row>
      </Grid>


    </div>

    <h1>Talks and workshops</h1>
    <br></br>

    <Grid fluid>
      <Row>
      { projectsData.getProjects("talk").map((project, i) => <Hackathon project={project}/>) }
        </Row>
      </Grid>

    <h1>Hackathons</h1>
    <br></br>

    <Grid fluid>
      <Row>
      { projectsData.getProjects("hackathon").map((project, i) => <Hackathon project={project}/>) }
        </Row>
      </Grid>

<h1>News and media</h1>
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
