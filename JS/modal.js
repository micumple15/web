//DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

//Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

//Open
function openModal() {
  modal.style.display = 'block';
}

//Close
function closeModal() {
  modal.style.display = 'none';
}

//Close Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}








function openModal1(modalId) {
  var modal1 = document.getElementById(modalId);
  var modalBackground = document.querySelector('.modal-background');
  modal1.style.display = 'flex';
  modalBackground.style.display = 'block';
}

function closeModal1(modalId) {
  var modal1 = document.getElementById(modalId);
  var modalBackground = document.querySelector('.modal-background');
  modal1.style.display = 'none';
  modalBackground.style.display = 'none';
}

function closeAllModals() {
  var modals = document.querySelectorAll('.modalIcons');
  var modalBackground = document.querySelector('.modal-background');
  modals.forEach(function(modal) {
    modal.style.display = 'none';
  });
  modalBackground.style.display = 'none';
}
