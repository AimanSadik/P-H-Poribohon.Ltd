document.addEventListener('DOMContentLoaded', function () {
    const seatMap = document.getElementById('seat-map');
    const selectedSeatsText = document.getElementById('selected-seats');
    const seatQuantityText = document.getElementById('seat-quantity');
    const seatClassText = document.getElementById('seat-class');
    const totalPriceText = document.getElementById('total-price');
    const bookButton = document.getElementById('book-btn');

    const rows = 10;
    const cols = 4;
    const perSeatCost = 550;

    const availableSeats = generateSeatNumbers(rows, cols);
    const selectedSeats = [];

    function generateSeatNumbers(rows, cols) {
        const seatNumbers = [];
        const rowLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                seatNumbers.push(`${rowLabels[row]}${col + 1}`);
            }
        }
        return seatNumbers;
    }

    function renderSeatMap() {
        seatMap.innerHTML = '';
        let seatIndex = 0;
        for (let row = 0; row < rows; row++) {
            const rowContainer = document.createElement('div');
            rowContainer.classList.add('row');
            for (let col = 0; col < cols; col++) {
                const seatNumber = availableSeats[seatIndex++];
                const seat = document.createElement('div');
                seat.classList.add('seat');
                if (selectedSeats.includes(seatNumber)) {
                    seat.classList.add('selected');
                }
                seat.innerText = seatNumber;
                seat.addEventListener('click', () => toggleSeat(seatNumber));
                rowContainer.appendChild(seat);
            }
            seatMap.appendChild(rowContainer);
        }
    }

    function toggleSeat(seatNumber) {
        const index = selectedSeats.indexOf(seatNumber);
        if (index === -1) {
            selectedSeats.push(seatNumber);
        } else {
            selectedSeats.splice(index, 1);
        }
        renderSeatMap();
        updateSelectedSeatsText();
    }

    function updateSelectedSeatsText() {
        selectedSeatsText.innerText = selectedSeats.join(', ');
        seatQuantityText.innerText = selectedSeats.length;
        seatClassText.innerText = "Standard"; // Assuming all seats are standard
        totalPriceText.innerText = selectedSeats.length * perSeatCost;
    }

    bookButton.addEventListener('click', () => {
        if (selectedSeats.length > 0) {
            alert(`You have booked seats: ${selectedSeats.join(', ')}`);
            // Perform further actions like sending selected seats to the server for booking
            // Clear selected seats array after booking
            selectedSeats.length = 0;
            renderSeatMap(); // Refresh seat map display
            updateSelectedSeatsText(); // Update selected seats text
        } else {
            alert('Please select at least one seat.');
        }
    });

    // Initial render
    renderSeatMap();
    updateSelectedSeatsText();
});