
window.onscroll = function() {myFunction2()};

function myFunction2() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("contentLogo").className = "fade-in.appear";
  } else {
    document.getElementById("contentLogo").className = "fade-out";
  }
}

