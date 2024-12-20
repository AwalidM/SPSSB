// script.js - Handles the slot selection and UI updates

const slots = [
    { id: "A1", status: "Available" },
    { id: "A2", status: "Occupied" },
    { id: "B1", status: "Available" },
    { id: "B2", status: "Occupied" },
    { id: "C1", status: "Available" },
    { id: "C2", status: "Occupied" }
];

// Check if the user is logged in, if not, redirect to the login page
if (!isLoggedIn()) {
    window.location.href = 'index.html';
}

// Update the display of parking slots
function updateSlotStatus() {
    const slotsContainer = document.querySelector("#slotsContainer");
    slotsContainer.innerHTML = ""; // Clear previous content

    slots.forEach(slot => {
        const slotCard = document.createElement("div");
        slotCard.classList.add("col-md-4", "mb-3");

        slotCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Slot ${slot.id}</h5>
                    <p class="card-text">Status: ${slot.status}</p>
                    <button class="btn ${slot.status === "Available" ? "btn-success" : "btn-secondary"}" 
                        onclick="selectSlot('${slot.id}')">
                        ${slot.status === "Available" ? "Select Slot" : "Occupied"}
                    </button>
                </div>
            </div>
        `;
        slotsContainer.appendChild(slotCard);
    });
}

// Function to handle slot selection
function selectSlot(slotId) {
    const selectedSlot = slots.find(slot => slot.id === slotId);
    if (selectedSlot && selectedSlot.status === "Available") {
        selectedSlot.status = "Occupied"; // Change status to 'Occupied'
        alert(`You have selected Slot ${slotId}.`);
        updateSlotStatus(); // Refresh the slots display
    } else {
        alert(`Slot ${slotId} is already occupied.`);
    }
}

// Initialize the slots display when the page is ready
document.addEventListener("DOMContentLoaded", updateSlotStatus);
