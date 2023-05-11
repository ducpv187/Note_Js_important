/* 2 cách viết document ready Fuction */
/* 2 cách dưới chay khi mà các DOM đã sẵn sàng . viết dưới dạng html */


//c1
$(function () {
    $('').on('click', function () {        
    });
});

//c2
$( document ).ready(function() {
    console.log( "ready!" );
});


//c3 viết khi mà dom chưa sinh ra => TH Call Ajax

//Note:  $(document).on('click','.js-delete',function(){  }); -> luôn luôn có thể click đến đối tượng mình muốn bắt sự kiện -> không cần quan tâm là đã đc sinh ra  class đó hay chưa (có những class đc sinh ra khi chạy hêt một sự kiện vdu : ajax -> call -> sinh ra class )
// - $("").click(function() {  } -> chỉ chạy đc khi mà đã có sẵn class cố định(thường là fix cố định ở html ) -> cái đổi tượng mà mình muốn bắt skien 
$(document).on('click','.js-delete',function(){

});