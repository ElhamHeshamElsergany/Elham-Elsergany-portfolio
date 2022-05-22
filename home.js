var typed = new Typed('.element', {
    strings: ['Hello I am Elham Hesham ', 'Web Developer', 'Creative', 'Enthusiastic', 'hard worker','self learner'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
});
////side navbar
$(document).ready(function () {
    let colorboxwidth = $(".colorbox").outerWidth();
    $('#optionbox').animate({ right: `-${colorboxwidth}` }, 0);

})



//   my photo changes 
let myimg = document.getElementById('myImg');
myimg.addEventListener('mouseenter', function () {
    myimg.style.transform = "scale(1.2)";
    myimg.style.transitionDuration = "1s";
});
myimg.addEventListener('mouseleave', function () {
    myimg.style.transform = "scale(1)";
    myimg.style.transitionDuration = "1s";
})
document.documentElement.style.setProperty('--animate-duration', '3s');

// change them colors 

$('#toggleBtn').click(function () {
    let colorboxwidth = $(".colorbox").outerWidth();
    if ($('#optionbox').css('right') == '0px') {
        $('#optionbox').animate({ right: `-${colorboxwidth}` }, 1000);
    }
    else {
        $('#optionbox').animate({ right: `0px` }, 1000);
    }
});
let colorItem = $('.coloritem');
colorItem.eq(0).css('backgroundColor', 'rgb(2, 245, 184)');
colorItem.eq(1).css('backgroundColor', 'rgba(53, 50, 205, 0.698)');
colorItem.eq(2).css('backgroundColor', 'black');
colorItem.eq(3).css('backgroundColor', '#c832cdfb');
colorItem.eq(4).css('backgroundColor', 'white');

colorItem.click(function (e) {
    let bgcolor = $(e.target).css('backgroundColor');
    console.log(e.target)
    $("h1,h4").css('color', bgcolor, "important");
});
let fontfamily = $('.fontfamily');
fontfamily.eq(0).css('font-family', 'Brush Script MT');
fontfamily.eq(1).css('font-family', 'Garamond');


fontfamily.click(function (e) {
    let fontStyle = $(e.target).css('font-family');
    console.log(e.target)
    $("h1,h4").css('font-family', fontStyle, "important");

});

// contact me 
///لسه هكمل عليها 
function sendEmail() {
		 alert(" thank you mail sent successfully");
         
}
// about section 
