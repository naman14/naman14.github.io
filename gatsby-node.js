const projectsData = require('./data/get-projects.js')

exports.createProjectPages = async ({ actions: { createProjectPage } }) => {

    // `getProjectData` is a function that fetches our data
    const allProjects = projectsData.getProjects("all")
  
    // Create a page that lists all projects.
    createProjectPage({
      path: `/`,
      component: require.resolve("./src/templates/all-projects.js"),
      context: { allProjects },
    })
  
    // Create a page for each project.
    allProjects.forEach(project => {
      createProjectPage({
        path: `/project/${project.name}/`,
        component: require.resolve("./src/templates/project.js"),
        context: { project },
      })
    })
  }  
