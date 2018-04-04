$('document').ready(function(){
 //this will fire after all the HTML loads 
  $('#expired').hide();
 // showExpired(); 
  $('#success-msg').hide(); 
  myFunction(); 
 
  
  //myFunction(); 
  
});

function showExpired() {
    var x =     document.getElementById("snackbar2")

    x.className = "show";
  
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function myFunction() {
    var x =     document.getElementById("snackbar")

    x.className = "show";
  
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

function myFunction2() {

    $('success-msg').show(); 
    $('expire-msg').hide(); 
  
    var x =     document.getElementById("snackbar")

    x.className = "show";
  
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

/*
sessionExpired(fuction(){
    element.className.remove("mystyle");
})
**/
