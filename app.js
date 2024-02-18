



function purchase() {

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
function goBack() {
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

document.getElementById("A1").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("A2").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("B1").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("B2").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("C1").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("C2").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("D1").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("D2").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("E1").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("E2").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("F1").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("F2").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("G1").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("G2").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("H1").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("H2").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("I1").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("I2").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("J1").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("J2").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});


document.getElementById("A3").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("A4").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("B3").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("B4").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("C3").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("C4").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("D3").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("D4").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("E3").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("E4").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("F3").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("F4").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("G3").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("G4").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("H3").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("H4").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("I3").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("I4").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("J3").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});
document.getElementById("J4").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
});

const allBtn = document.getElementsByClassName("btn-seat");

let count = 0;

for (const btn of allBtn) {
    btn.addEventListener("click", function () {

        count = count + 1;

        document.getElementById("seat-count").innerText = count;

    })
}

let total = 40;

for (const btn of allBtn) {
    btn.addEventListener("click", function () {

        total = total - 1;

        btn.addEventListener("click",function(e){
            console.log(e.target.parentNode.childNode.innerText);

        })




        document.getElementById("seat-left").innerText = total;

        if (total < 0) {
            alert("All Seat Booked");
        }
    })
}
