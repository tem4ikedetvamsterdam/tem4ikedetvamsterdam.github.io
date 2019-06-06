$(document).ready(function(){
    $('.header').height($(window).height());
   })
  
   $("#insert").on("click", function(){
    if($("input[name=insert]:checked").val() === "plusik")
    {
    $("#list").append("<li>" +"их БеCкОнЕчНоСтЬ"+ "</li>");
    }
    else
    $("#list1").prepend("<li>" +"иХ НеТ"+ "</li>");
    });
    $(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
 })
 var p = localStorage.getItem('vhod');
 if (p==1)
$("#login").hide();
else if (p==0)
$("#logout").hide();
else {
$("#logout").hide();
$("#login").show();
}
window.onload = function(){
    document.getElementById('name').onclick = function vhod(){
        localStorage.setItem('imya','Tem4ik');
        localStorage.setItem('parol','amsterdam');
        var imya = document.getElementById('name').value;
        var parol = document.getElementById('parol').value;
        var imya1=localStorage.getItem('imya');
        var parol1 =localStorage.getItem('parol');
        if (imya===imya1 && parol==parol1){
            alert("POSTAVTYE ZA4ET POSHALUYSTA");
            $("#login").hide();
            $("#logout").show();
            $("#abc").hide();
            localStorage.setItem('vhod','1');
        }
        else alert("NE XO4Y NA PERESDA4Y");
        return;
    }
    document.getElementById('logout').onclick = function vhod(){
        window.location.reload();
        localStorage.setItem('vhod','0');
    }
}
localStorage.getItem('gorod','Amsterdam');
 