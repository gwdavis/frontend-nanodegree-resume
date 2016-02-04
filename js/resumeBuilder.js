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
 	"location" : "New York",
 	"description" : ""},
 	{"title" : "Managing Director",
 	"employer" : "Royal Bank of Scotland",
 	"dates" : "2010-2015",
 	"location" : "Stamford",
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
 		"title" : "",
 		"date" : "",
 		"description" : "",
 		"image" : ""
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

function displayWork(){
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
displayWork()


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

 