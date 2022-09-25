// IIFE 

function $(id) {
    return document.getElementById(item);
}
(function (){
    function Start(){
        console.log('App Started');
    }

    window.addEventListener('load', Start);

})();

