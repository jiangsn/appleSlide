
$("ul>li").on('click',(e)=>{
    let $button = $(e.currentTarget) 
    $button.children().addClass("active")
    console.log( $button.siblings())
    $button.siblings().children().removeClass('active') 

    let index = $button.index()
$(".wrapper").css({
    'transform': 'translate('+ index * -100+'%)'
})
})

var li = $("ul>li")  ;
console.log(li)
var n = 0;
var time = autoPlay();
function autoPlay(){
    return setInterval(() => {
        li.eq(n % 5 ).trigger('click')
        n +=1;
     }, 1000);
}

$('.window').on('mouseenter',()=>{
    window.clearInterval(time)
})

$('.window').on('mouseleave',()=>{
    time = autoPlay();
})

document.addEventListener("visibilitychange",()=>{
    if(document.hidden){
        window.clearInterval(time)
    } else{
        time = autoPlay();
    } 
})