const $hamburger = document.getElementById('hamburger');
const $spMenu = document.getElementById('sp-header__menu'); 
const $trialBtn = document.getElementById('trial-btn');              

$hamburger.addEventListener('click', function(){
    $hamburger.classList.toggle('open');
    $spMenu.classList.toggle('open');
    $trialBtn.classList.toggle('hidden');
});