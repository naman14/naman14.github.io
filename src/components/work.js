import React from 'react'
import { Col, Row } from 'react-flexbox-grid'

const Work = ({ project }) => (

    <Col lg={6} md={12} style={{marginBottom:'50px'}}>

    <div style={{display:'flex', justifyContent: 'flex-start',  alignItems: 'start'}}>

    <div>
    <img style={{width: '90px', height:"90px"}} src={project.icon}></img>
    </div>

    <div style={{marginLeft:'2rem', marginRight:'2.5rem'}}>

    <h3 style={{lineHeight:1}}>{project.name}</h3>
      <p>{project.description}</p>
      <p>{project.extra_desc}</p>
    </div>


    </div>

    </Col>
)

export default Work