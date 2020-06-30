
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

window.onscroll = function() {myFunction2()};

function myFunction2() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("contentLogo").className = "fade-in.appear";
  } else {
    document.getElementById("contentLogo").className = "fade-out";
  }
}

