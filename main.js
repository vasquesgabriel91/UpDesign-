const target = document.querySelectorAll('[data-anima]');
const animateclass = 'animate';

function animacaoscroll(){
    const windowtop = window.pageYOffset + ((window.innerHeight * 3) /4) ;
    target.forEach(function(element){
        if((windowtop)> element.offsetTop){
            element.classList.add(animateclass);
        } else {
            element.classList.remove(animateclass);
        }
       /* console.log(element.offsetTop);*/
    })
}
animacaoscroll();

if(target.length){
window.addEventListener('scroll',function(){
    animacaoscroll();
})
}


function menuscroll(){
    var menu = document.querySelectorAll('.header');
    var scrollmenu =window.scrollY;
        if(scrollmenu >=80){
             menu.classList.add('ativo');
        }else {
             menu.classList.remove('ativo') ;
        }
}
window.addEventListener('scroll',ativo);