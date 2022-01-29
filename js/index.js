const $hamburger = document.getElementById('hamburger');
const $spNav = document.getElementById('sp-header__nav'); 
const $trialBtn = document.getElementById('trial-btn');              

$hamburger.addEventListener('click', function(){
    $hamburger.classList.toggle('open');
    $spNav.classList.toggle('open');
    $trialBtn.classList.toggle('hidden');
});
