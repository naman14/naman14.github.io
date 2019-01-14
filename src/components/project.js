import React from 'react'
import PropTypes from 'prop-types' 
import { Col, Row } from 'react-flexbox-grid'

const Project = ({ project }) => (
    <Col lg={4} md={12} style={{marginBottom:'40px', verticalAlign: 'top'}}>

    <span style={{verticalAlign: 'top'}}>
    <img style={{width: '30px', height:"30px"}} src={project.icon}></img>
    <strong style={{color: '#484848', verticalAlign:'top', marginLeft:'0.7rem'}}>{project.name}</strong>
    </span>

    <p style={{marginRight:'1.5rem'}}>{project.description}</p>

    </Col>
)

Project.propTypes = {
    project: PropTypes.object,
}

export default Project