
$("header").append("<div class='glitch-window'></div>");

$("h1.glitched").clone().appendTo(".glitch-window");

//POZE DE GRUP
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activ");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
// POZE DE FAMILIE
var coll = document.getElementsByClassName("collapsible1");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activ1");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


/*search */
function showResult(str) {
  if (str.length==0) {
  document.getElementById("livesearch").innerHTML="";
  document.getElementById("livesearch").style.border="0px";
  return;
  }
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
  if (this.readyState==4 && this.status==200) {
    document.getElementById("livesearch").innerHTML=this.responseText;
    document.getElementById("livesearch").style.border="1px solid #A5ACB2";
  }
  }
  xmlhttp.open("GET","../../livesearch.php?q="+str,true);
  xmlhttp.send();
}

// traducere
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'ro',
    includedLanguages: 'ro,en,ru',
    autoDisplay: false,
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
   
}
function meniu() {

  // Change font family and color
  $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
      .css({
          'color': '#544F4B',
          'font-family': 'Arial',
          'width':'200px'
      });
  // Change menu's padding
  $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');

  // Change menu's padding
  $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');

  // Change the padding of the languages
  $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '10px');

  // Change the width of the languages
  $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
  $("iframe").contents().find('td').css('width', '100%');

  // Change hover effects
  $("iframe").contents().find(".goog-te-menu2-item div").css('background-color', '#222').find('span.text').css('color', 'rgb(148, 148, 148)');
  $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
      $(this).css('background-color', 'white').find('span.text').css('color', '#222');
  }, function () {
      $(this).css('background-color', '#222').find('span.text').css('color', 'rgb(148, 148, 148)');
  });

  // Change Google's default blue border
  $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

  // Change the iframe's box shadow
  $(".goog-te-menu-frame").css('box-shadow', 'none');

  // Change the iframe's size and position?
  $(".goog-te-menu-frame").css({
      'height': 'auto',
      'width': '200px'
  });
  // Change iframes's size
  $("iframe").contents().find('.goog-te-menu2').css({
      'height': 'auto',
      'width': '100%'
  });
}