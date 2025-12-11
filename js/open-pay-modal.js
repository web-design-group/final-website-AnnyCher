const paymentBtn = document.querySelector('.payment-btn');
const modalPay = document.querySelector('.modal-pay');
const closeModalBtn = modalPay.querySelector('.modal-pay-button');
const modalOverlay = modalPay.querySelector('.modal-pay-overlay');

function openModal() {
	modalPay.classList.add('open');
}

function closeModal() {
	modalPay.classList.remove('open');
}

paymentBtn.addEventListener('click', (e) => {
	e.preventDefault();
	openModal();
});

closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', closeModal);
