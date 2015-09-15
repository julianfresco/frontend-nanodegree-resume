// Define data
var bio = {
  "name" : "Julian Soro",
  "role" : "Software Developer",
  "contacts" : {
    "mobile": "987-654-3210",
    "email": "julianfresco@users.noreply.github.com",
    "github": "https://github.com/julianfresco",
    "twitter": "https://twitter.com/julianFresco",
    "location": "Los Angeles, CA"
  },
  "welcomeMessage": "A dangerous coding ninja",
  "skills": ["JavaScript", "PHP", "HTML", "CSS", "Node.js", "MySQL", "Redis"],
  "biopic": "http://julianfresco.com/assets/img/intro.jpg",
  "display": function(){
    // Convert bio properties to HTML elements using templates
    var formattedName = HTMLheaderName.replace('%data%', this.name);
    var formattedRole = HTMLheaderRole.replace('%data%', this.role);
    var formattedContacts = [];
    // Loop throught this.contacts to create LI elements
    for(item in this.contacts) {
      var newListItem = HTMLcontactGeneric.replace('%contact%', item)
          .replace('%data%', this.contacts[item]);
      formattedContacts.push(newListItem);
    }
    // Append bio elements to page
    $('#header').prepend(formattedRole).prepend(formattedName);
    for(item in formattedContacts) {
      $('#topContacts').append(formattedContacts[item]);
    }
  }
};

var education = {
  "schools": [
    {
      "name": "University of Southern California",
      "location": "Los Angeles, CA",
      "degree": "Bachelors",
      "majors": ["Biological Sciences", "Italian"],
      "dates": 2012,
      "url": "http://www.usc.edu/"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "date": 2015,
      "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }
  ],
  "display": function(){}
};

var work = {
  "jobs": [
    {
      "employer": "Ace Metrix, Inc.",
      "title": "Software Engineer",
      "location": "El Segundo, CA",
      "dates": "08/2015 - Present",
      "description": "Developed dynamic web applications using technologies such as Node.js, Express, AngularJS, KnockoutJS, Redis, JavaScript, Java, PostgreSQL, HTML5, and CSS."
    },
    {
      "employer": "SAG-AFTRA",
      "title": "Full-Stack Developer",
      "location": "Los Angeles, CA",
      "dates": "07/2013 - 07/2015",
      "description": "Developed and supported dynamic web applciations using technologies such as Laravel, PHP, Drupal, MySQL, HTML, CSS, JavaScript, and Java."
    }
  ],
  "display": function(){}
};

var projects = {
  "projects": [
    {
      "title": "Survey with NodeJS Service",
      "dates": "08/2015 - 12/2015",
      "description": "An online survey application written in AngularJS, using a NodeJS/Express backend with Redis as the database. The backend services expose REST endpoints to teardown and setup new application instances on the Amazon Web Services platform.",
      "images": ["http://placekitten.com/g/400/250"]
    },
    {
      "title": "A Call To Arts",
      "dates": "05/2015 - 07/2015",
      "description": "An online timesheet tracking mentors' service hours and activities, written with Laravel and Bootstrap.",
      "images": ["http://placekitten.com/g/400/250"]
    },
    {
      "title": "AQMD RideShare Participation Log",
      "dates": "09/2014 - 04/2015",
      "description": "An online tracking system for rideshare program participants, written with AngularJS, Laravel, and Bootstrap.",
      "images": ["http://placekitten.com/g/400/250"]
    }
  ],
  "display": function(){}
};


// Iterate over JSON data, append to DOM
bio.display();



