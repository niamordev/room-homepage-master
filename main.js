




var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("slide-txt");
  var z = document.getElementsByClassName("mySlidesMobile");
  if (n > x.length) {
    slideIndex = 1
}

  if (n < 1) {
    slideIndex = x.length
    slideIndex = y.length
    slideIndex = z.length

}

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
    z[i].style.display = "none";

  }
  
  x[slideIndex-1].style.display = "block";  
  y[slideIndex-1].style.display = "block"; 
  z[slideIndex-1].style.display = "block"; 
}


