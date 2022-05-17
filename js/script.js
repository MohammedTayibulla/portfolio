let menu =document.querySelector("#menu-bars");
let header=document.querySelector("header");

menu.onclick=()=>{
	menu.classList.toggle('fa-times');
	header.classList.toggle('active');
}
window.onscroll=()=>{
	menu.classList.remove('fa-times');
	header.classList.remove('active');
}
	function dark(){
		document.body.classList.toggle("dark");
	}

	function typing(){
	var options = {
  strings: ['Mohammed Tayibulla','FullStack developer','quick learner','Passionate creator'],
  typeSpeed: 100,
  backspeed:200,
 
};

var typed = new Typed('.type', options);
}

window.onscroll = function() {goTopFunction(); scrollFunction();};
// When the user scrolls the page, execute myFunction 

// window.onscroll = function() {goTopFunction()}
function goTopFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}