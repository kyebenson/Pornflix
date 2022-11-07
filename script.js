var menuicon = document.querySelector(".menu-icon");
var menuicon = document.querySelector(".sidebar");
var logo = document.querySelector("logo");

menuicon.onclick = function(){
    sidebar.classlist.toggle("small-sidebar");
}



logo.onclick = function(){
    sidebar.classlist.toggle("small-sidebar")
}