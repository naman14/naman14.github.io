import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <Grid fluid>

    <Row>
      
      <Col lg={6} md={12}>
      <h1 style={{ margin: 0, color: '#484848', textAlign:'center'}}>
        <Link
          to="/"
          style={{
            color: `#484848`,
            textDecoration: `none`,
          }}
        >Naman Dwivedi
        </Link>
      </h1>
      </Col>

      <Col lg={6} md={12}>

      <ul style={{ listStyle: `none`, textAlign: 'center' }}>
        <ListLink to="/">Blog</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>

      </Col>
      </Row>
      </Grid>
    </div>
  </div>
)

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `2rem` }}>
    <Link style={{ textDecoration: 'none', color: '#484848', fontSize:'18px' }} to={props.to}>{props.children}</Link>
  </li>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
