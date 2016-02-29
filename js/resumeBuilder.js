/*
 resumeBuilder.js
 contains the JSON with the data to publish
 and the display methods
by Gary W. Davis
*/
 
var model = {
	bio:  {
 	"name" : "Gary W. Davis",
 	"role" : "Treasurer",
 	"contacts" : {
 		"email" : "gary.davis@davisfamily.com",
 		"location": "New York, NY",
 		"phone" : "+1-914-419-9788"
 	},
 	"cell" : "+1-914-419-9788",
 	"photo" : "http://s.gravatar.com/avatar/2c4d8d5e413f44946391fc134d28e04a?s=80",
	"skills" : ["WordPress", "Python"]
 },

	work: {
 	"jobs" : [
 	{
 		"title" : "Consultant",
	 	"employer" : "Self",
	 	"dates" : "2013-Present",
	 	"location" : "New York, NY",
	 	"description" : ""
	 },
 	{
 		"title" : "Managing Director",
	 	"employer" : "Royal Bank of Scotland",
	 	"dates" : "2010-2013",
	 	"location" : "Stamford, CT",
	 	"description" : ""
	 }
 	]
 },

 	education: {
 	"schools" : [
 	{
 		"name" : "Harvard Business School",
 		"location" : "Cambridge, MA",
 		"degree" : "MBA",
 		"year" : "1987",
 		"url" : ""
 	},
 	{
 		"name" : "Queen's University",
 		"location" : "Kingston, ON",
 		"degree" : "B.Sc. Mining",
 		"years" : "1979",
 		"url" : ""
 	}
 	],
 	"onlineCourses" : [
 	{
 		"title" : "",
 		"school": "",
 		"dates" : "",
 		"url" : ""
 	}
 	]
 },


 	"projects" : [
 	{
 		"title" : "Project 1",
 		"dates" : "2015",
 		"description" : "some full-stack project",
 		"image" : "images/RowingRegattaApp.png"
 	}
 	]
};

var cntlr = {
	
	getBio: {
		"formattedName": HTMLheaderName.replace("%data%",model.bio.name),
		"formattedRole": HTMLheaderRole.replace("%data%",model.bio.role),
		"formattedBioPic": HTMLbioPic.replace('%data%',model.bio.photo),
		"formattedSkills": function() {
			if(model.bio.skills.length > 0) {
				var formattedSkills = [];
				for (i in model.bio.skills){
					formattedSkills.push(HTMLskills.replace("%data%",model.bio.skills[i]));
				};
				}
			return formattedSkills;
			}()
		
	},
	
	getWork: function() {
		if(model.work.jobs.length > 0){
			var workExperience = [];
			for (i in model.work.jobs){
				var job = {};
				job.formattedWorkEmployer = HTMLworkEmployer.replace("%data%",model.work.jobs[i].employer);
				job.formattedWorkTitle = HTMLworkTitle.replace("%data%",model.work.jobs[i].title);
				job.formattedWorkEmployerTitle = job.formattedWorkEmployer + job.formattedWorkTitle
				job.formattedWorkDescription = HTMLworkDescription.replace("%data%",model.work.jobs[i].description)
				job.formattedWorkLocation = HTMLworkLocation.replace("%data%",model.work.jobs[i].location)
				job.formattedWorkDates = HTMLworkDates.replace("%data%",model.work.jobs[i].dates)
				workExperience.push(job);
 			}
		}
		return workExperience;
	},
	
	/* Internationalize Names
	Includes a button from helper.js and a function that capitalizes the last name
	*/

	inName: function(name) {
		// Splits a two word name, capitalizing the first name and putting second name in all caps
		var splitName = name.trim().split(" ");
		//first name to lowercase and first letter in caps
		var fname = splitName[0][0].toUpperCase() + splitName[0].slice(1).toLowerCase()
		//last name to all upper case
		var lname = splitName[1].toUpperCase();
		//combine names
		intName = fname + " " + lname;
		return intName;
	},


	getProjects: function() {
		if(model.projects.length >0){
			var projects = [];
			for (var i=0; i<model.projects.length; i++) {
				project = {};
				project.formattedProjectsTitle = HTMLprojectTitle.replace('%data%', model.projects[i].title);
				project.formattedProjectsDates = HTMLprojectDates.replace('%data%', model.projects[i].dates);
				project.formattedProjectsDescription = HTMLprojectDescription.replace('%data%', 				   			model.projects[i].description);
				project.formattedProjectsImage = HTMLprojectImage.replace('%data%', model.projects[i].image);
				projects.push(project);
			}
			return projects;
		}
	}
	
		
	
	
//projects.display = function(){
//	if(projects.projects.length >0){
//		console.log(projects.projects.length);
//		for (i in projects.projects){
//			$('#projects').append(HTMLprojectStart);
//			var formattedProjectsTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
//			var formattedProjectsDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
//			var formattedProjectsDescription = HTMLprojectDescription.replace('%data%', 				   projects.projects[i].description);
//			var formattedProjectsImage = HTMLprojectImage.replace('%data%', projects.projects[i].image);
//			$('.project-entry:last').append(formattedProjectsTitle);
//			$('.project-entry:last').append(formattedProjectsDates);
//			$('.project-entry:last').append(formattedProjectsDescription);
//			$('.project-entry:last').append(formattedProjectsImage);
//		}
//	}




};

var view = {
	displayBio: function() {
		var formattedRole = cntlr.getBio.formattedRole,
			formattedName = cntlr.getBio.formattedName,
			formattedBioPic = cntlr.getBio.formattedBioPic,
			formattedSkills = cntlr.getBio.formattedSkills;
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$('#header').prepend(formattedBioPic);
		if(formattedSkills.length > 0){
			$("#header").append(HTMLskillsStart);
			$("#skills").append(formattedSkills);
		}
	},
	
	displayWork: function() {
		if(cntlr.getWork().length > 0){
			for (var i=0; i< cntlr.getWork().length; i++){
				$("#workExperience").append(HTMLworkStart);
				$(".work-entry:last").append(cntlr.getWork()[i].formattedWorkEmployerTitle)
				$(".work-entry:last").append(cntlr.getWork()[i].formattedWorkLocation)
				$(".work-entry:last").append(cntlr.getWork()[i].formattedWorkDates)
				$(".work-entry:last").append(cntlr.getWork()[i].formattedWorkDescription)
			}
		}
	},
	
	displayProjects: function() {
		if(cntlr.getProjects().length >0){
			for (var i=0; i<cntlr.getProjects().length; i++) {
				$('#projects').append(HTMLprojectStart);
				$('.project-entry:last').append(cntlr.getProjects()[i].formattedProjectsTitle);
				$('.project-entry:last').append(cntlr.getProjects()[i].formattedProjectsDates);
				$('.project-entry:last').append(cntlr.getProjects()[i].formattedProjectsDescription);
				$('.project-entry:last').append(cntlr.getProjects()[i].formattedProjectsImage);
			}
		}	
	}	
	
};


// Prints out locations worked in work object as passed to the function
 
 function locationizer(work_obj){
 	var locationsArray = []
 	for (i in work_obj){
 		var workLocations = work_obj[i].location
 		locationsArray.push(workLocations)
 	}
 	return locationsArray
 }


// Prints to the log the location of clicks on the page
 
 $(document).click(function(loc) {
   var x = loc.pageX;
   var y = loc.pageY;
   logClicks(x,y);
 });
//////////////////////////////////MAIN////////////////////////////////////////
view.displayBio();
view.displayWork();
view.displayProjects();
//projects.display();
$("#Main").append(internationalizeButton);
//$('#mapDiv').append(googleMap);
console.log(cntlr.inName("gary davis"));

 // to include the map function... need to add cntlr calls in helper.js

