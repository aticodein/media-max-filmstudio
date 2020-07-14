
window.onscroll = function() {myFunction2()};

function myFunction2() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("contentLogo").className = "fade-in.appear";
  } else {
    document.getElementById("contentLogo").className = "fade-out";
  }
}

/*-- WebGalamb Hírlevélkód - form JavaScript ellenőrző kód eleje --*/

function fvalidate_5(fname)
{
   var formx=document.getElementById(fname);
   var hiba='';
   var mregexp=/^([a-zA-Z0-9_\.\-\+&])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
   if(!mregexp.test(formx.subscr.value))
   {
     hiba='* Hibás a megadott e-mail cím!';
     formx.subscr.focus();
   }

   if (!formx.f_14.value)
     {
   hiba+= (hiba?"\n":'')+'* Név nincs megadva!';
   formx.f_14.focus();
     }
   if (!formx.f_15.value)
     {
   hiba+= (hiba?"\n":'')+'* Rövid Üzenet nincs megadva!';
   formx.f_15.focus();
     }
if(hiba)alert(hiba); else return true;
}

/*--WebGalamb Hírlevélkód JavaScript ellenőrző kód vége --*/

/*--  Cookie JS --*/

const cookieContainer = document.querySelector(".cookie-container")
const cookieButton = document.querySelector(".cookie-button")

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout( () => {
    if (!localStorage.getItem("cookieBannerDisplayed"))
      cookieContainer.classList.add("active");
}, 3000);



