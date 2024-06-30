// script.js

// Import konfigurasi Firebase sebagai modul yang diberi nama
import { firebaseConfig } from './firebaseConfig.js';

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Export objek firebase untuk digunakan di tempat lain
export default firebase;

AOS.init();


// Handle form submission
document.getElementById('guestbook-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  
// Add a new message to the Firestore collection
  db.collection('guestbook').add({
    name: name,
    message: message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    document.getElementById('guestbook-form').reset();
  }).catch((error) => {
    console.error('Error adding document: ', error);
  });
});

// Function to create message element
function createMessageElement(data) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('mb-4', 'border-b', 'pb-2');

  const nameElement = document.createElement('h4');
  nameElement.classList.add('text-lg', 'font-semibold');
  nameElement.textContent = data.name;
  messageElement.appendChild(nameElement);

  const timestampElement = document.createElement('span');
  timestampElement.classList.add('text-gray-500', 'text-sm');
  if (data.timestamp) {
    const timestamp = data.timestamp.toDate();
    timestampElement.textContent = `Posted on ${timestamp.toLocaleDateString()} at ${timestamp.toLocaleTimeString()}`;
  }
  messageElement.appendChild(timestampElement);

  const messageText = document.createElement('p');
  messageText.classList.add('text-gray-700', 'whitespace-pre-wrap', 'break-words');
  messageText.textContent = data.message;
  messageElement.appendChild(messageText);

  return messageElement;
}

// Function to fetch and display messages
function fetchMessages() {
  db.collection('guestbook').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = '';
    snapshot.forEach((doc) => {
      const messageElement = createMessageElement(doc.data());
      messagesContainer.appendChild(messageElement);
    });
  });
}

fetchMessages();

// This function is called when the close button is clicked
function closeModal() {
  document.getElementById("modal").classList.add('hidden');
}

// Get the modal and modal image elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

// This function is called when a small image is clicked
function showModal(src) {
  modal.classList.remove('hidden');
  modalImg.src = src;
}

// Get all the img elements in the grid
const images = document.querySelectorAll('.grid img');

// Loop through each img element and add a click event listener
images.forEach(img => {
  img.addEventListener('click', () => {
    showModal(img.src);
  });
});

function updateCountdown() {
  // Set the date we're counting down to
  var countDownDate = new Date("Jul 25, 2024 13:00:00").getTime();

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML =
    "<div class='text-center'><div class='text-3xl font-bold'>" + days + "</div><div class='text-sm uppercase'>Hari</div></div>" +
    "<div class='text-center'><div class='text-3xl font-bold'>" + hours + "</div><div class='text-sm uppercase'>Jam</div></div>" +
    "<div class='text-center'><div class='text-3xl font-bold'>" + minutes + "</div><div class='text-sm uppercase'>Menit</div></div>" +
    "<div class='text-center'><div class='text-3xl font-bold'>" + seconds + "</div><div class='text-sm uppercase'>Detik</div></div>";

  // If the count down is over, write some text
  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}

// Update the countdown every 1 second
setInterval(updateCountdown, 1000);


//copy text

document.getElementById('copy-button').addEventListener('click', function() {
  // Get the text field
  var rekeningNumber = document.getElementById('rekening-number').innerText;

  // Create a temporary textarea element to hold the text to copy
  var tempInput = document.createElement('textarea');
  tempInput.value = rekeningNumber;
  document.body.appendChild(tempInput);

  // Select the text
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the temporary textarea
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(tempInput);

  // Provide feedback to the user
  alert('No. Rekening copied: ' + rekeningNumber);
});

const music = document.getElementById('music');
const toggleButton = document.getElementById('toggleButton');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

toggleButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        music.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
});

        


