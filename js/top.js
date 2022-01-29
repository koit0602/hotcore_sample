const $topHeader = document.getElementById('top-header');
const $topHeaderNav = document.getElementById('top-header__nav');


window.addEventListener('scroll',function(){
    let scroll = document.documentElement.scrollTop;
    if (100 < scroll) {
        $topHeader.classList.add('scroll');
        $topHeaderNav.classList.add('scroll');
    }else{
        $topHeader.classList.remove('scroll');
        $topHeaderNav.classList.remove('scroll');
    }
})