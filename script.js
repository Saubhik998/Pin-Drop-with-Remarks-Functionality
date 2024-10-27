// Initialize the map and set view
const map = L.map('map').setView([20.5937, 78.9629], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const pinList = document.getElementById('pinList');
let pins = JSON.parse(localStorage.getItem('pins')) || [];

// Function to display pins in the sidebar
function displayPins() {
    pinList.innerHTML = '';
    pins.forEach((pin, index) => {
        const listItem = document.createElement('li');
        
        // Display remark and address
        const pinText = document.createElement('span');
        pinText.textContent = `${pin.remark} - ${pin.address || 'Address not available'}`;
        pinText.onclick = () => zoomToPin(pin, index);
        listItem.appendChild(pinText);
        
        // Delete button for each pin
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.onclick = () => deletePin(index);
        listItem.appendChild(deleteButton);

        pinList.appendChild(listItem);
    });
}

// Function to add a new pin
function addPin(lat, lng) {
    const popupContent = document.createElement('div');
    popupContent.className = 'popupForm';

    const remarkInput = document.createElement('input');
    remarkInput.placeholder = 'Enter remark';
    popupContent.appendChild(remarkInput);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Save Pin';
    popupContent.appendChild(submitButton);

    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(popupContent).openPopup();

    submitButton.onclick = async () => {
        const remark = remarkInput.value || 'No remark';
        let address = 'Fetching...';

        // Fetch address using Nominatim API (Optional)
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
            const data = await response.json();
            address = data.display_name || 'Address not found';
        } catch (error) {
            console.error('Error fetching address:', error);
        }

        const pin = { lat, lng, remark, address };
        pins.push(pin);
        localStorage.setItem('pins', JSON.stringify(pins));

        displayPins();
        marker.closePopup();
    };
}

// Function to delete a pin by index
function deletePin(index) {
    pins.splice(index, 1);
    localStorage.setItem('pins', JSON.stringify(pins));
    displayPins();
}

// Function to zoom to a saved pin location
function zoomToPin(pin, index) {
    map.setView([pin.lat, pin.lng], 15);
    const marker = L.marker([pin.lat, pin.lng]).addTo(map);
    marker.bindPopup(`<b>${pin.remark}</b><br>${pin.address}`).openPopup();
}

// Map click event to drop a pin and enter remarks
map.on('click', (e) => {
    const { lat, lng } = e.latlng;
    addPin(lat, lng);
});

// Load saved pins on page load
window.onload = displayPins;
