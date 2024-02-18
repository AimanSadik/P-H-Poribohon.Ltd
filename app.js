function purchase(){

    const homeScreen = document.getElementById("banner-section");
    homeScreen.classList.add('hidden');
    const couponScreen = document.getElementById("discount-section");
    couponScreen.classList.add('hidden');
    const threeDivScreen = document.getElementById("three-div-section");
    threeDivScreen.classList.add('hidden');
    const footerScreen = document.getElementById("footer-section");
    footerScreen.classList.add('hidden');

    const ticketScreen = document.getElementById("ticket-section");
    ticketScreen.classList.remove('hidden')

}
function goBack(){
    const backToHome = document.getElementById("ticket-section");
    backToHome.classList.add('hidden');

    const homeScreen = document.getElementById("banner-section");
    homeScreen.classList.remove('hidden');
    const couponScreen = document.getElementById("discount-section");
    couponScreen.classList.remove('hidden');
    const threeDivScreen = document.getElementById("three-div-section");
    threeDivScreen.classList.remove('hidden');
    const footerScreen = document.getElementById("footer-section");
    footerScreen.classList.remove('hidden');


}