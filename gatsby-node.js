const projectsData = require('./src/data/get-projects.js')

exports.createPages = async ({ actions: { createPage } }) => {

    // `getProjectData` is a function that fetches our data
    const allProjects = projectsData.getProjects("all")
  
    // Create a page that lists all projects.
    createPage({
      path: `/`,
      component: require.resolve("./src/templates/all-projects.js"),
      context: { allProjects },
    })
  
    // Create a page for each project.
    allProjects.forEach(project => {
      createPage({
        path: `/project/${project.name}/`,
        component: require.resolve("./src/templates/project.js"),
        context: { project },
      })
    })
  }  
