
function pay(){
    var cardnumber=document.getElementById("cardno").value;
    if(cardnumber=='')
    {
        alert("    Enter Your Cardnumber. \n    Payement is incomplete...");
    }
    else{
    alert("    Your card number : "+cardnumber+"\n    Payement successful...!");
    }
 
}
function problems()
{
 var name=document.getElementById("contact-name").value;
 if(name=='')
 {
    alert("Enter your Name.");
 }
 else{
 alert(name+",Your problem had been send and will solve soon.");
 }
 document.getElementById("form2").reset();
}

function myFunction() {
     var element = document.body;
     element.classList.toggle("dark-mode");
     
  }
 jQuery(function($) {
  $('#Theme').on('click', function() {
    var $el = $(this),
      textNode = this.lastChild;
    $el.find('span').toggleClass('fas fa-moom  fas fa-sun');
    textNode.nodeValue = ($el.hasClass('Theme') ? ' Dark ' : ' Light ') + ' Theme ' 
    $el.toggleClass('Theme');
  });
}); 
 
