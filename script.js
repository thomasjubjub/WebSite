function changeOpacity(x)
{
  var photo = document.getElementById('PhotoThomas');
  var text = document.getElementById(x);

  photo.style.opacity = "0.2";
  text.style.display = "block";
}

function changeOpacityTel(x, y)
{
  var photo = document.getElementById('PhotoThomasTel');
  var text = document.getElementById(x);
  var bouton = document.getElementById(y);

  if(text.style.display == "block")
  {
    text.style.display = "none";
    photo.style.opacity = "1";
    bouton.style.backgroundColor = "#212529";
    bouton.style.color = "white";
  }
  else{
    document.getElementById('VosEtudesTel').style.display = "none";
  document.getElementById('VosHobbiesTel').style.display = "none";
 document.getElementById('LeptitTel').style.display = "none";


  document.getElementById('BoutonEtudesTel').style.backgroundColor = "#212529";
  document.getElementById('BoutonEtudesTel').style.color = "white";

  document.getElementById('BoutonHobbiesTel').style.backgroundColor = "#212529";
  document.getElementById('BoutonHobbiesTel').style.color = "white";

  document.getElementById('BoutonLeptitTel').style.backgroundColor = "#212529";
  document.getElementById('BoutonLeptitTel').style.color = "white";
  


  photo.style.opacity = "0.2";
  bouton.style.backgroundColor = "white";
  bouton.style.color = "#212529";
  text.style.display = "block";


  }

  if(x == "LeptitTel")
  {
    text.className = "leptitScroll";
  }
  
  
}

function setBackOpacity(x)
{
  var photo = document.getElementById('PhotoThomas');
  var text = document.getElementById(x);

  photo.style.opacity = "1";
  text.style.display = "none";

}

function clair()
{
  document.getElementById('DetailECE').style.display = "none";
    document.getElementById('DetailWalt').style.display = "none";
    document.getElementById('DetailLandor').style.display = "none";
    document.getElementById('DetailSocrate').style.display = "none";
    document.getElementById('DetailOneAdobe').style.display = "none";
    document.getElementById('DetailBDS').style.display = "none";
    document.getElementById('DetailOctopussy').style.display = "none";
    document.getElementById('BoutonCache').style.display = "none";

    window.open("#MonParcours", "_top");
}

function displayDetail(x)
{
    var text = document.getElementById(x);
    document.getElementById('DetailECE').style.display = "none";
    document.getElementById('DetailWalt').style.display = "none";
    document.getElementById('DetailLandor').style.display = "none";
    document.getElementById('DetailSocrate').style.display = "none";
    document.getElementById('DetailOneAdobe').style.display = "none";
    document.getElementById('DetailBDS').style.display = "none";
    document.getElementById('DetailOctopussy').style.display = "none";

    document.getElementById('BoutonCache').style.display = "block";
    text.style.display = "block"; 
}

function afficherTravaux(x)
{
  document.getElementById('Photographie').style.display = "none";
  document.getElementById('Photoshop').style.display = "none";
  document.getElementById('Illustrator').style.display = "none";
   document.getElementById('AdobeXD').style.display = "none";
 /* document.getElementById('3D').style.display = "none"; */

  document.getElementById(x).style.display = "block";
  document.getElementById('BoutonCacheTravaux').style.display = "block";
}

function clairTravaux()
{
  var x = document.getElementById('BoutonCacheTravaux');

  document.getElementById('Photographie').style.display = "none";
  document.getElementById('Photoshop').style.display = "none";
  document.getElementById('Illustrator').style.display = "none";
  document.getElementById('AdobeXD').style.display = "none";

  x.style.display = "none";
  window.open("#MesTravaux", "_top");

}

function copierEmail()
{
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999) /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");


}

function ouvrirMenu()
{
  document.getElementById("Hamburger").style.display = "none";
  document.getElementById("Leave").style.display = "block";
  document.getElementById("Choix").style.display = "block";
  document.getElementById("MenuTel").style.backgroundColor = "white";

}

function fermerMenu()
{
  document.getElementById("Hamburger").style.display = "block";
  document.getElementById("Leave").style.display = "none";
  document.getElementById("Choix").style.display = "none";
  document.getElementById("MenuTel").style.backgroundColor = "transparent";

}