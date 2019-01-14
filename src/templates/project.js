export default ({ pageContext: { project } }) => (
    <div style={{ width: 960, margin: "4rem auto" }}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <Link to="/">Back to all projects</Link>
    </div>
  )