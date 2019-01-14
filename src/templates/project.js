import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default ({ pageContext: { project } }) => (
    <Layout>

      <div style={{marginLeft:'20px', marginRight:'20px'}}>

      <h1>{project.name}</h1>
      <p>{project.description}</p>

    {   project.links != undefined  ?
        project.links.map((link, i) => <a href={link}>{link}<br></br><br></br></a>)
        : null
     }

      <p>{project.extra_desc}</p>

      <br/>

      { 
        project.images != undefined 
        ? project.images.map((image, i) => <img style={{maxWidth: '250px', maxHeight:'320px', marginRight:'1rem', verticalAlign:'center'}} src={`/${image}`}></img>)
        : null
      }

     <br/>
     <br/>
     <br/>
      <Link to="/">Back to all projects</Link>
      <br/>
      <br></br>

      </div>
      
    </Layout>
  )