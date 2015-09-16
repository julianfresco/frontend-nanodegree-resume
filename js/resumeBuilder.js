'use strict';

// Define data
var bio = {
  'name' : 'Julian Soro',
  'role' : 'Software Developer',
  'contacts' : {
    'mobile': '987-654-3210',
    'email': 'julianfresco@users.noreply.github.com',
    'github': 'julianfresco',
    'twitter': '@julianFresco',
    'location': 'Los Angeles, CA'
  },
  'welcomeMessage': 'A dangerous coding ninja',
  'skills': ['JavaScript', 'PHP', 'HTML', 'CSS', 'Node.js', 'MySQL', 'Redis'],
  'biopic': 'http://julianfresco.com/assets/img/intro.jpg',
  'display': function(){
    // Create bio content HTML
    var formattedName = HTMLheaderName.replace('%data%', this.name);
    var formattedRole = HTMLheaderRole.replace('%data%', this.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', this.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
    var formattedContacts = [], formattedSkills = [];
    // Loop through this.contacts to create LI elements
    for(var item in this.contacts) {
      var newContactInfo = HTMLcontactGeneric.replace('%contact%', item)
          .replace('%data%', this.contacts[item]);
      formattedContacts.push(newContactInfo);
    }
    // Loop through this.skills to create LI elements
    this.skills.forEach(function(item){
      var newSkill = HTMLskills.replace('%data%', item);
      formattedSkills.push(newSkill);
    });

    // Prepend bio elements to #header
    $('#header').prepend(formattedRole)
        .prepend(formattedName);
    // Loop through and append contacts to page
    formattedContacts.forEach(function(item){
      $('#topContacts,#footerContacts').append(item);
    });
    // Append elements to #header
    $('#header').append(formattedBioPic)
        .append(formattedWelcomeMsg)
        .append(HTMLskillsStart);
    // Loop through and append skills to page
    formattedSkills.forEach(function(item){
      $('#skills').append(item);
    });
  }
};

var education = {
  'schools': [
    {
      'name': 'University of Southern California',
      'location': 'Los Angeles, CA',
      'degree': 'Bachelors',
      'majors': ['Biological Sciences', 'Italian'],
      'dates': 2012,
      'url': 'http://www.usc.edu/'
    }
  ],
  'onlineCourses': [
    {
      'title': 'JavaScript Basics',
      'school': 'Udacity',
      'date': 2015,
      'url': 'https://www.udacity.com/course/javascript-basics--ud804'
    }
  ],
  'display': function(){
    var formattedSchools = [], formattedOnlineCourses = [];
    // Loop through schools to create education-entry elements
    this.schools.forEach(function(item){
      var newSchool = HTMLschoolName.replace('%data%', item.name);
      newSchool += HTMLschoolDegree.replace('%data%', item.degree)
      newSchool += HTMLschoolDates.replace('%data%', item.dates)
      newSchool += HTMLschoolLocation.replace('%data%', item.location)
      newSchool += HTMLschoolMajor.replace('%data%', item.majors.join(', '))
      formattedSchools.push(newSchool);
    });
    // Loop through Online Coursess to create education-entry elements
    this.onlineCourses.forEach(function(item){
      var newOnlineCourse = HTMLonlineTitle.replace('%data%', item.title);
      newOnlineCourse += HTMLonlineSchool.replace('%data%', item.school);
      newOnlineCourse += HTMLonlineDates.replace('%data%', item.date);
      newOnlineCourse += HTMLonlineURL.replace('%data%', item.url);
      formattedOnlineCourses.push(newOnlineCourse);
    });

    // Loop through and append formattedSchools
    formattedSchools.forEach(function(item){
      $('#education').append(HTMLschoolStart);
      $('#education .education-entry:last').append(item);
    });
    // Loop through and append formattedOnlineCourses
    $('#education').append(HTMLonlineClasses);
    formattedOnlineCourses.forEach(function(item){
      $('#education').append(HTMLschoolStart);
      $('#education .education-entry:last').append(item);
    });
  }
};

var work = {
  'jobs': [
    {
      'employer': 'Ace Metrix, Inc.',
      'title': 'Software Engineer',
      'location': 'El Segundo, CA',
      'dates': '08/2015 - Present',
      'description': 'Developed dynamic web applications using technologies such as Node.js, Express, AngularJS, KnockoutJS, Redis, JavaScript, Java, PostgreSQL, HTML5, and CSS.'
    },
    {
      'employer': 'SAG-AFTRA',
      'title': 'Full-Stack Developer',
      'location': 'Los Angeles, CA',
      'dates': '07/2013 - 07/2015',
      'description': 'Developed and supported dynamic web applciations using technologies such as Laravel, PHP, Drupal, MySQL, HTML, CSS, JavaScript, and Java.'
    }
  ],
  'display': function(){
    // Create work content HTML
    var formattedJobs = [];
    // Loop through and create job HTML elements
    this.jobs.forEach(function(item){
      // Add elements to create work entry HTML string
      var newJob = HTMLworkEmployer.replace('%data%', item.employer);
      newJob += HTMLworkTitle.replace('%data%', item.title);
      newJob += HTMLworkDates.replace('%data%', item.dates);
      newJob += HTMLworkLocation.replace('%data%', item.location);
      newJob += HTMLworkDescription.replace('%data%', item.description);
      // Add work entry to formattedJobs
      formattedJobs.push(newJob);
    });

    // Loop through and add job elements to page
    formattedJobs.forEach(function(item){
      $('#workExperience').append(HTMLworkStart);
      $('#workExperience .work-entry:last').append(item);
    });
  }
};

var projects = {
  'projects': [
    {
      'title': 'Survey with NodeJS Service',
      'dates': '08/2015 - 12/2015',
      'description': 'An online survey application written in AngularJS, using a NodeJS/Express backend with Redis as the database. The backend services expose REST endpoints to teardown and setup new application instances on the Amazon Web Services platform.',
      'images': ['http://placekitten.com/g/400/250']
    },
    {
      'title': 'A Call To Arts',
      'dates': '05/2015 - 07/2015',
      'description': 'An online timesheet tracking mentors\' service hours and activities, written with Laravel and Bootstrap.',
      'images': ['http://placekitten.com/g/400/250']
    },
    {
      'title': 'AQMD RideShare Participation Log',
      'dates': '09/2014 - 04/2015',
      'description': 'An online tracking system for rideshare program participants, written with AngularJS, Laravel, and Bootstrap.',
      'images': ['http://placekitten.com/g/400/250']
    }
  ],
  'display': function(){
    var formattedProjects = [];
    // Loop through and create job HTML elements
    this.projects.forEach(function(item){
      // Add elements to create work entry HTML string
      var newProject = HTMLprojectTitle.replace('%data%', item.title);
      newProject += HTMLprojectDates.replace('%data%', item.dates);
      newProject += HTMLprojectDescription.replace('%data%', item.description);
      item.images.forEach(function(img){
        newProject += HTMLprojectImage.replace('%data%', img);
      });
      // Add work entry to formattedProjects
      formattedProjects.push(newProject);
    });

    // Loop through and add project elements to page
    formattedProjects.forEach(function(item){
      $('#projects').append(HTMLprojectStart);
      $('#projects .project-entry:last').append(item);
    });
  }
};

var map = {
  'display': function() {
    // Add map to page
    $('#mapDiv').append(googleMap);
  }
}

// Call display methods on data objects to build page content
bio.display();
work.display();
projects.display();
education.display();
map.display();




