const projects = require('../data/projects.json');

exports.getProjects = filter => projects.filter(project => 
    project.tags.includes(filter))
