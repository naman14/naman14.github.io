import React from 'react'
import PropTypes from 'prop-types' 
import { Col, Row } from 'react-flexbox-grid'
import { Link } from 'gatsby';

const ProfessionalWork = ({ project }) => (
    <Col lg={4} md={12} style={{marginBottom:'15px'}}>

    <div style={{display:'flex', justifyContent: 'flex-start',  alignItems: 'start'}}>

    <div>
    <img style={{width: '90px', height:"90px"}} src={project.icon}></img>
    </div>

    <div style={{marginLeft:'2rem', marginRight:'2rem'}}>


    <h3><a  style={{color: "#000000", textDecoration: 'none'}} href={project.links[0]}>{project.name}
        </a></h3>
    <p>{project.description}</p>
    </div>

    </div>

    </Col>
)

ProfessionalWork.propTypes = {
    project: PropTypes.object,
}

export default ProfessionalWork