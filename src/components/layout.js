import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
        <Header />
        {children}
        <hr></hr>
        <div style={{float: 'center', textAlign:'center', marginTop:'2rem'}}>
            <FontAwesomeIcon icon={faGithub} size="2x"/>
            <FontAwesomeIcon icon={faTwitter} size="2x" style={{marginLeft: '2.5rem'}}/>
            <FontAwesomeIcon icon={faFacebook} size="2x" style={{marginLeft: '2.5rem'}}/>
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{marginLeft: '2.5rem'}}/>
            </div>

        </div>      
      </>
    )}
  />
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
