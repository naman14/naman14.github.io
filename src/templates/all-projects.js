import React from 'react'
import { Link } from 'gatsby'

export default ({ pageContext: { allProjects } }) => (
    <div style={{ width: 960, margin: "4rem auto" }}>
      <h1>{project.name}</h1>     
      <Link to="/">Back to all projects</Link>
    </div>
  )