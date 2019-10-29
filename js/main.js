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
        $(".button").val("Оставить заявку");}, 1000); 
        alert("Сообщение успешно отправлено.");
        $("form").trigger("reset");  
        setTimeout(function() {
        $('#smallModal').modal('hide');}, 1000); 
        setTimeout(function() {
        $('#smallModal').modal('hide');}, 1000);
        setTimeout(function() {
        $('#smallModal').modal('hide');}, 1000);
        setTimeout(function() {
        $('#smallModal').modal('hide');}, 1000);
      } else {
        $(".button").val("Ошибка");
        setTimeout(function() {$(".button").val("Отправить");}, 2000);        
      }
      }
    });
  });
});

$('.sl').slick({
  cssEase: 'ease-in',  
  slidesToShow: 3,
  initialSlide: 0,
  autoplay: true,  
  autoplaySpeed: 15000,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
        centerMode: false
      }
    }
  ]
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuICAndXNlIHN0cmljdCc7XHJcbiQoJ2Zvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoIHRoaXMgKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJ3NlbmQucGhwJyxcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsIFxyXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsIFxyXG4gICAgICBkYXRhOiBmZCxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24obXNnKXtcclxuICAgICAgaWYobXNnID09ICdvaycpIHsgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5idXR0b25cIikudmFsKFwi0J7RgtC/0YDQsNCy0LvQtdC90L5cIik7fSwgMTApO1xyXG4gICAgICAgICQodGhpcykuZmluZChcImlucHV0XCIpLnZhbChcIlwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIuYnV0dG9uXCIpLnZhbChcItCe0YHRgtCw0LLQuNGC0Ywg0LfQsNGP0LLQutGDXCIpO30sIDEwMDApOyBcclxuICAgICAgICBhbGVydChcItCh0L7QvtCx0YnQtdC90LjQtSDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3Qvi5cIik7XHJcbiAgICAgICAgJChcImZvcm1cIikudHJpZ2dlcihcInJlc2V0XCIpOyAgXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcjc21hbGxNb2RhbCcpLm1vZGFsKCdoaWRlJyk7fSwgMTAwMCk7IFxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnI3NtYWxsTW9kYWwnKS5tb2RhbCgnaGlkZScpO30sIDEwMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnI3NtYWxsTW9kYWwnKS5tb2RhbCgnaGlkZScpO30sIDEwMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnI3NtYWxsTW9kYWwnKS5tb2RhbCgnaGlkZScpO30sIDEwMDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIuYnV0dG9uXCIpLnZhbChcItCe0YjQuNCx0LrQsFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyQoXCIuYnV0dG9uXCIpLnZhbChcItCe0YLQv9GA0LDQstC40YLRjFwiKTt9LCAyMDAwKTsgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbiQoJy5zbCcpLnNsaWNrKHtcclxuICBjc3NFYXNlOiAnZWFzZS1pbicsICBcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgaW5pdGlhbFNsaWRlOiAwLFxyXG4gIGF1dG9wbGF5OiB0cnVlLCAgXHJcbiAgYXV0b3BsYXlTcGVlZDogMTUwMDAsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMTAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA5NjAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNjQwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdXHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
