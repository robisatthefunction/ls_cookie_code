// user lands on https://auth.lambdaschool.com/register/ run this code or whatever the URL is the first step in applying

var setCookie = function(c_name,value,exdays,c_domain) {
   c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
   var exdate=new Date();
   exdate.setDate(exdate.getDate() + exdays);
   var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
   document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
 };

var getCookie = function(name) {
   var match = document.cookie.match(name+'=([^;]*)');
   if (!match) {
     setCookie(name,'1',90,'.lambdaschool.com');
   }
 };

getCookie('startedApply');

// IF RUNNING THE CODE IN OPTIMIZELY WEB, PLACE THIS IN THE PROJECT JAVASCRIPT CODE BOX

if(window.location.href == "URL of first step in application process") {
var setCookie = function(c_name,value,exdays,c_domain) {
   c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
   var exdate=new Date();
   exdate.setDate(exdate.getDate() + exdays);
   var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
   document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
 };

var getCookie = function(name) {
   var match = document.cookie.match(name+'=([^;]*)');
   if (!match) {
     setCookie(name,'1',90,'.lambdaschool.com');
   }
 };

getCookie('startedApply');
}
