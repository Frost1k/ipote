$(document).ready(function(){
$("input[name=user_phone]").inputmask("+7 (999)-999-99-99");
Inputmask().mask(document.querySelectorAll("input"));
});
$(function(){
  'use strict';
   $('form').on('submit', function(e){
    e.preventDefault();
    var fd = new FormData( this );
    $.ajax({
      url: 'send.php',
      type: 'POST',
      contentType: false, 
      processData: false, 
      data: fd,
      success: function(msg){
						if(msg == 'ok') {  
						  setTimeout(function() {
						  $(".button").val("Отправлено");}, 10);
						  $(this).find("input").val("");
						  setTimeout(function() {
						  $(".button").val("Отправить заявку");}, 1000); 
						  alert("Сообщение успешно отправлено.");
						  $("form").trigger("reset"); 
						  setTimeout(function() {
              $('#smallModal').modal('hide');}, 500); 						  
						} else {
        $(".button").val("Ошибка");
        setTimeout(function() 
          {$(".button").val("Отправить заявку");}, 2000);        
      }
      }
    });
  });
});		
(function(){ var widget_id = 'yf2u3FY4iN';var d=document;var w=window;function l(){
  var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhamZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuJChcImlucHV0W25hbWU9dXNlcl9waG9uZV1cIikuaW5wdXRtYXNrKFwiKzcgKDk5OSktOTk5LTk5LTk5XCIpO1xyXG5JbnB1dG1hc2soKS5tYXNrKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7XHJcbn0pO1xyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gICAkKCdmb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGZkID0gbmV3IEZvcm1EYXRhKCB0aGlzICk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICdzZW5kLnBocCcsXHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgY29udGVudFR5cGU6IGZhbHNlLCBcclxuICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCBcclxuICAgICAgZGF0YTogZmQsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKG1zZyl7XHJcblx0XHRcdFx0XHRcdGlmKG1zZyA9PSAnb2snKSB7ICBcclxuXHRcdFx0XHRcdFx0ICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQgICQoXCIuYnV0dG9uXCIpLnZhbChcItCe0YLQv9GA0LDQstC70LXQvdC+XCIpO30sIDEwKTtcclxuXHRcdFx0XHRcdFx0ICAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKS52YWwoXCJcIik7XHJcblx0XHRcdFx0XHRcdCAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0ICAkKFwiLmJ1dHRvblwiKS52YWwoXCLQntGC0L/RgNCw0LLQuNGC0Ywg0LfQsNGP0LLQutGDXCIpO30sIDEwMDApOyBcclxuXHRcdFx0XHRcdFx0ICBhbGVydChcItCh0L7QvtCx0YnQtdC90LjQtSDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3Qvi5cIik7XHJcblx0XHRcdFx0XHRcdCAgJChcImZvcm1cIikudHJpZ2dlcihcInJlc2V0XCIpOyBcclxuXHRcdFx0XHRcdFx0ICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICQoJyNzbWFsbE1vZGFsJykubW9kYWwoJ2hpZGUnKTt9LCA1MDApOyBcdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG4gICAgICAgICQoXCIuYnV0dG9uXCIpLnZhbChcItCe0YjQuNCx0LrQsFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgXHJcbiAgICAgICAgICB7JChcIi5idXR0b25cIikudmFsKFwi0J7RgtC/0YDQsNCy0LjRgtGMINC30LDRj9Cy0LrRg1wiKTt9LCAyMDAwKTsgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcdFx0XHJcbihmdW5jdGlvbigpeyB2YXIgd2lkZ2V0X2lkID0gJ3lmMnUzRlk0aU4nO3ZhciBkPWRvY3VtZW50O3ZhciB3PXdpbmRvdztmdW5jdGlvbiBsKCl7XHJcbiAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsgcy50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7IHMuYXN5bmMgPSB0cnVlOyBzLnNyYyA9ICcvL2NvZGUuaml2b3NpdGUuY29tL3NjcmlwdC93aWRnZXQvJyt3aWRnZXRfaWQ7IHZhciBzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTsgc3MucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocywgc3MpO31pZihkLnJlYWR5U3RhdGU9PSdjb21wbGV0ZScpe2woKTt9ZWxzZXtpZih3LmF0dGFjaEV2ZW50KXt3LmF0dGFjaEV2ZW50KCdvbmxvYWQnLGwpO31lbHNle3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsbCxmYWxzZSk7fX19KSgpOyJdLCJmaWxlIjoiYWpmb3JtLmpzIn0=
