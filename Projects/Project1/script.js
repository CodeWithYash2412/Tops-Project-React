const bookingFormFieldsDiv = document.getElementById('booking-form-fields');
const bookingDataDiv = document.getElementById('booking-data');
const bookingTypeSelect = document.getElementById('booking-type');
let bookingDate, bookingSlot, bookingCount, bookingNames, bookingDuration;

function showBookingForm() {
    const bookingType = bookingTypeSelect.value;

    switch (bookingType) {
        case 'full-day':
            bookingFormFieldsDiv.innerHTML = `
            <label for="booking-date">Date:</label>
            <input type="date" id="booking-date" required><br><br>
            <label for="booking-count">Total person count:</label>
            <input type="number" id="booking-count" required><br><br>
            <label for="booking-names">Names:</label>
            <input type="text" id="booking-names" required><br><br>
          `;
            break;
        case 'half-day':
            bookingFormFieldsDiv.innerHTML = `
            <label for="booking-date">Date:</label>
            <input type="date" id="booking-date" required><br><br>
            <label for="booking-slot">Slot:</label>
            <select id="booking-slot" required>
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
            </select><br><br>
            <label for="booking-count">Total person count:</label>
            <input type="number" id="booking-count" required><br><br>
        <label for="booking-names">Names:</label>
        <input type="text" id="booking-names" required><br><br>
      `;
            break;
        case 'custom':
            bookingFormFieldsDiv.innerHTML = `
        <label for="booking-date">Date:</label>
        <input type="date" id="booking-date" required><br><br>
        <label for="booking-duration">Duration (hours):</label>
        <input type="number" id="booking-duration" required><br><br>
        <label for="booking-count">Total person count:</label>
        <input type="number" id="booking-count" required><br><br>
        <label for="booking-names">Names:</label>
        <input type="text" id="booking-names" required><br><br>
      `;
            break;
        default:
            bookingFormFieldsDiv.innerHTML = '';
    }
}

bookingTypeSelect.addEventListener('change', showBookingForm);

function validateBookingData() {
    bookingDate = document.getElementById('booking-date').value;
    bookingCount = document.getElementById('booking-count').value;
    bookingNames = document.getElementById('booking-names').value;
    if (bookingTypeSelect.value === 'half-day') {
        bookingSlot = document.getElementById('booking-slot').value;
    }
    if (bookingTypeSelect.value === 'custom') {
        bookingDuration = document.getElementById('booking-duration').value;
    }

    if (!bookingDate || !bookingCount || !bookingNames || (bookingTypeSelect.value === 'half-day' && !bookingSlot) || (bookingTypeSelect.value === 'custom' && !bookingDuration)) {
        alert('Please fill in all required fields!');
        return false;
    }

    if (!/^\d+$/.test(bookingCount)) {
        alert('Total person count must be a number!');
        return false;
    }

    if (bookingNames.split(',').length > bookingCount) {
        alert(`Please enter a maximum of ${bookingCount} names!`);
        return false;
    }

    return true;
}

function submitBookingForm() {
    if (validateBookingData()) {
        let bookingDataHtml = `
      <p><strong>Booking Type:</strong> ${bookingTypeSelect.value}</p>
      <p><strong>Date:</strong> ${bookingDate}</p>
      `;
        if (bookingTypeSelect.value === 'half-day') {
            bookingDataHtml += `<p><strong>Slot:</strong> ${bookingSlot}</p>`;
        } else if (bookingTypeSelect.value === 'custom') {
            bookingDataHtml += `<p><strong>Duration (hours):</strong> ${bookingDuration}</p>`;
        }
        bookingDataHtml += `
      <p><strong>Total Person Count:</strong> ${bookingCount}</p>
      <p><strong>Names:</strong> ${bookingNames}</p>
    `;

        bookingDataDiv.innerHTML = bookingDataHtml;
    }
}

const bookingSubmitButton = document.getElementById('booking-submit');
bookingSubmitButton.addEventListener('click', submitBookingForm);