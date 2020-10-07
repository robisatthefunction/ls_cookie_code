// This code should run when a visitor completes their application

var setCookie = function(c_name,value,exdays,c_domain) {
   c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
   var exdate=new Date();
   exdate.setDate(exdate.getDate() + exdays);
   var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
   document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
 };


setCookie('startedApply', '', -1, '.lambdaschool.com');
 console.log('startApply cookie deleted');
// setCookie('registered','2',1,'.lambdaschool.com');
// console.log('new cookie value set');


// IF RUNNING THE CODE IN OPTIMIZELY WEB, PLACE THIS IN THE PROJECT JAVASCRIPT CODE BOX

if(window.location.href == "URL visitor lands on when they complete the application") {
var setCookie = function(c_name,value,exdays,c_domain) {
   c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
   var exdate=new Date();
   exdate.setDate(exdate.getDate() + exdays);
   var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
   document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
 };


setCookie('startedApply', '', -1, '.lambdaschool.com');
 console.log('startApply cookie deleted');
// setCookie('registered','2',1,'.lambdaschool.com');
// console.log('new cookie value set');
}
