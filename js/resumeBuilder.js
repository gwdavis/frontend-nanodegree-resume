/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var bio = {
 	"name" : "Gary W. Davis",
 	"role" : "Treasurer",
 	"contact" : {
 		"email" : "gary.davis@davisfamily.com",
 		"phone" : "+1-914-419-9788"
 	},
 	"cell" : "+1-914-419-9788",
 	"photo" : "http://s.gravatar.com/avatar/2c4d8d5e413f44946391fc134d28e04a?s=80",
	"skills" : ["Derivatives", "Structured Credit Products"]
 };

 var work = {
 	"jobs" : [
 	{"title" : "Consultant",
 	"employer" : "Self",
 	"dates" : "2015-Present",
 	"location" : "New York, NY",
 	"description" : ""},
 	{"title" : "Managing Director",
 	"employer" : "Royal Bank of Scotland",
 	"dates" : "2010-2015",
 	"location" : "Stamford, CT",
 	"description" : ""}
 	]
 }

 var education = {
 	"school" : [
 	{
 		"name" : "Harvard Business School",
 		"city" : "Cambridge, MA",
 		"degree" : "MBA",
 		"year" : "1987",
 		"url" : ""
 	},
 	{
 		"name" : "Queen's University",
 		"city" : "Kingston, ON",
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
 	}]}

 var projects = {
 	"projects" : [
 	{
 		"title" : "Project 1",
 		"dates" : "2015",
 		"description" : "some full-stack project",
 		"image" : "images/RowingRegattaApp.png"
 	}
 	]
 }

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if(bio.skills.length > 0){
 	
 	$("#header").append(HTMLskillsStart);
 	for (i in bio.skills){
 		var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
 		$("#skills").append(formattedSkills)
 	}
 }

work.display = function (){
 	if(work.jobs.length > 0){
 	// console.log(work.jobs.length)
	 	for (i in work.jobs){
	 		$("#workExperience").append(HTMLworkStart);
	 		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
	 		var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
	 		var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle
	 		var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description)
	 		var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location)
	 		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[i].dates)
	 		$(".work-entry:last").append(formattedWorkEmployerTitle)
	 		$(".work-entry:last").append(formattedWorkLocation)
	 		$(".work-entry:last").append(formattedWorkDates)
	 		$(".work-entry:last").append(formattedWorkDescription)
 		}
 	}
}
work.display()

projects.display = function(){
	if(projects.projects.length >0){
		console.log(projects.projects.length);
		for (i in projects.projects){
			$('#projects').append(HTMLprojectStart);
			var formattedProjectsTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
			var formattedProjectsDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
			var formattedProjectsDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
			var formattedProjectsImage = HTMLprojectImage.replace('%data%', projects.projects[i].image);
			$('.project-entry:last').append(formattedProjectsTitle);
			$('.project-entry:last').append(formattedProjectsDates);
			$('.project-entry:last').append(formattedProjectsDescription);
			$('.project-entry:last').append(formattedProjectsImage);
		}
	}
}
projects.display()

function displayMap(){
	$('#mapDiv').append(googleMap);
}
displayMap();

/* Internationalize Names
Includes a button from helper.js and a function that capitalizes the last name
*/

$("#Main").append(internationalizeButton);

function inName (name) {
	// Splits a two word name, capitalizing the first name and putting second name in all caps
	var splitName = name.trim().split(" ");
	//first name to lowercase and first letter in caps
	var fname = splitName[0][0].toUpperCase() + splitName[0].slice(1).toLowerCase()
	//last name to all upper case
	var lname = splitName[1].toUpperCase();
	//combine names
	intName = fname + " " + lname;
	return intName;
}
console.log(inName("gary davis"))
// Prints out locations worked in work object as passed to the function
// 
// function locationizer(work_obj){
// 	var locationsArray = []
// 	for (i in work_obj){
// 		var workLocations = work_obj[i].location
// 		locationsArray.push(workLocations)
// 	}
// 	return locationsArray
// }


// Prints to the log the location of clicks on the page
// 
// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x,y);
// });

 