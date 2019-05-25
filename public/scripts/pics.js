var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (x.length > 0){
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }
}

function goNext(){
  plusDivs(1);
  setTimeout(goNext, 10000);
}

setTimeout(goNext, 3000);

function clickOrigin(e){
    var target = e.target;
    var tag = [];
    tag.tagType = target.tagName.toLowerCase();
    tag.tagClass = target.className.split(' ');
    tag.id = target.id;
    tag.parent = target.parentNode.tagName.toLowerCase();

    return tag;
}

var tagsToIdentify = ['img','a'];

document.body.onclick = function(e){
    elem = clickOrigin(e);

    for (i=0;i<tagsToIdentify.length;i++){
        if (elem.tagType == tagsToIdentify[i]){
           if (elem.id == "contactlink" ){
             document.getElementById("everythingButMap").style.display = "none";
             document.getElementById("contactDiv").style.display = "block";
             console.log('You\'ve clicked a monitored tag (' + elem.tagType + ', in this case).');
             return true; // or do something else.
	   }
           if ( elem.id == "homelink" || elem.id == "eventslink" || elem.id == "gameslink" ){
	     document.getElementById("everythingButMap").style.display = "block";
             document.getElementById("contactDiv").style.display = "none"; 
	   }
        }
    }
};


