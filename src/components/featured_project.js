import React from 'react'
import { Col, Row } from 'react-flexbox-grid'
import { Link } from 'gatsby';

const FeaturedProject = ({ project }) => (

    <Col lg={6} md={12} style={{marginBottom:'50px'}}>
    {  
        project.images.slice(0,2).map((image, i) => <img style={{maxWidth: '150px', maxHeight:'220px', marginRight:'1rem', verticalAlign:'center'}} src={image}></img>)
     }

    <Link style={{ textDecoration: 'none', color: "#000000" }} to={`/project/${project.name}/`} ><h3 style={{lineHeight:1}}>{project.name}</h3></Link>
      <p>{project.description}</p>
      <p>{project.extra_desc}</p>

    </Col>
)

export default FeaturedProject