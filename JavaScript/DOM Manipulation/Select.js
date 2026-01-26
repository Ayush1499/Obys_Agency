// select and save
var image1 = document.querySelector('#First');
var image2 = document.querySelector('.Second');
var heading1 = document.querySelector('.First_heading');
var heading2 = document.querySelector('#Second_heading');

// Agar bahut sare h3 hain toh ham sirf pehle wale h3 ko select kar payenge 
var h3 = document.querySelector("h3");

// Agar hamein saare h3 element ko select karna ho toh use:
var h3 = document.querySelectorAll("h3");

// for individual
document.getElementById('#First');
document.getElementsByClassName('.Second');
document.getElementsByTagName("body");