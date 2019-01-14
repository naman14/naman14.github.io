import React from 'react'
import { Col, Row } from 'react-flexbox-grid'

const Hackathon = ({ project }) => (

    <Col lg={6} md={12} style={{marginBottom:'50px'}}>

    <div style={{display:'flex', justifyContent: 'flex-start',  alignItems: 'start'}}>

    {/* { 
        project.images.map((image, i) => <img style={{width: '25%', height:'100%'}} src={image}></img>)
     } */}

    <div style={{marginLeft:'0rem', marginRight:'2rem'}}>

    <h3 style={{lineHeight:1}}>{project.name}</h3>
      <p>{project.description}</p>
      <p>{project.extra_desc}</p>
    </div>


    </div>

    </Col>
)

export default Hackathon