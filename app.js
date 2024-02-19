



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
const button = document.getElementById("J4").addEventListener("click", function (e) {
    e.target.style.backgroundColor = "lime";
    button.disabled = true;
});




const allBtn = document.getElementsByClassName("btn-seat");

let count = 0;

for (const btn of allBtn) {
    btn.addEventListener("click", function () {

        count = count + 1;

        document.getElementById("seat-count").innerText = count;

        let price = 550;
        let totalSeatPrice = price * 1;

        const totalPrice = document.getElementById("totalCost").innerText;
        const convertedTotalPrice = parseInt(totalPrice);
        document.getElementById("totalCost").innerText = convertedTotalPrice + parseInt(totalSeatPrice);


        const grandTotalCost = document.getElementById("grandTotal").innerText;
        const convertedGrandTotal = parseInt(grandTotalCost);
        document.getElementById("grandTotal").innerText = convertedGrandTotal + parseInt(totalSeatPrice);


        if (count > 4) {

            alert("You can perchase only 4 tickets at a time");

        } return;


    })
}


let total = 40;

for (const btn of allBtn) {
    btn.addEventListener("click", function () {

        total = total - 1;

        document.getElementById("seat-left").innerText = total;

        if (total < 0) {
            alert("All Seat Booked");
        }
        return;

    })
}





function applyCoupon() {

    const couponInputValue = document.getElementById("coupon-input").value;
    // const getNotification = document.getElementById("notification");

    const convertedGrandTotal = parseFloat(document.getElementById("grandTotal").innerText);

    let discountedGrandTotal = convertedGrandTotal;

    if (couponInputValue === "NEW15") {
        // Apply 15% discount

        discountedGrandTotal -= convertedGrandTotal * 0.15;

        // getNotification.innerText = "Discount applied successfully";
        // getNotification.style.display = "block";

    } else if (couponInputValue === "Couple 20") {
        // Apply 20% discount

        discountedGrandTotal -= convertedGrandTotal * 0.20;

        // getNotification.innerText = "Discount applied successfully";
        // getNotification.style.display = "block";
    } else {

        alert("Invalid coupon code!");
    }

    document.getElementById("grandTotal").innerText = discountedGrandTotal;


    document.getElementById("coupon-input").value = " ";
    document.getElementById("coupon-input").style.display ='none';
    document.getElementById("btn-apply").style.display = "none";
};



// append divvvvvvvvvvvvv


function createAndAppendNewDiv(buttonText) {
    const price = 550;

    const newDiv = document.createElement('div');
    newDiv.classList.add('flex', 'justify-between');

    const tag1 = document.createElement('p');
    tag1.innerText = buttonText;

    const tag2 = document.createElement('p');
    tag2.innerText = 'Economy';

    const tag3 = document.createElement('p');
    tag3.innerText = price;


    newDiv.appendChild(tag1);
    newDiv.appendChild(tag2);
    newDiv.appendChild(tag3);


    const bookingSit = document.getElementById('booking-sit');
    bookingSit.appendChild(newDiv);
}


const seatButtons = document.querySelectorAll('.btn-seat');


seatButtons.forEach(button => {
    button.addEventListener('click', function () {
        createAndAppendNewDiv(button.innerText);
    });

});


// form section

const numberInput = document.getElementById("number");

numberInput.addEventListener('input', checkNumberValidity);


function checkNumberValidity() {



    const nextButton = document.getElementById("next-Button");
    const inputValue = parseInt(numberInput.value);

    if (inputValue >= 1) {
        nextButton.removeAttribute('disabled');
    }
    else {
        nextButton.setAttribute('disabled');
    }return 0;

}





