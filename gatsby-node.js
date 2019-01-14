const projectsData = require('./src/data/get-projects.js')

exports.createPages = async ({ actions: { createPage } }) => {

    const allProjects = projectsData.getProjects("all")
  
    // createPage({
    //   path: `/`,
    //   component: require.resolve("./src/templates/all-projects.js"),
    //   context: { allProjects },
    // })
  
    allProjects.forEach(project => {
      createPage({
        path: `/project/${project.name.replace(/\s/g, "")}/`,
        component: require.resolve("./src/templates/project.js"),
        context: { project },
      })
    })
  }  
