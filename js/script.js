// Select modal-btn, modal-overlay and close-btn

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

/* 
    Listen for click events on modal-btn and close-btn
    When user clicks modal-btn add .open-modal to modal-overlay
    When user clicks close-btn remove .open-modal from modal-overlay
*/

modalBtn.addEventListener('click', function() {
    modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', function() {
    modal.classList.remove('open-modal');
});
