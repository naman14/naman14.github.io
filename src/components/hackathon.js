import React from 'react'
import { Col, Row } from 'react-flexbox-grid'

const Hackathon = ({ project }) => (

    <Col lg={6} md={12} style={{marginBottom:'50px'}}>

    <div style={{display:'flex', justifyContent: 'flex-start',  alignItems: 'start'}}>

    <div style={{marginLeft:'0rem', marginRight:'2rem'}}>

    { project.links != undefined ?
        <h3><a  style={{color: "#000000", textDecoration: 'none'}} href={project.links[0]}>{project.name}
        </a></h3>
        :<h3>{project.name} </h3>
    }
      <p>{project.description}</p>
      <p>{project.extra_desc}</p>
    </div>


    </div>

    </Col>
)

export default Hackathon