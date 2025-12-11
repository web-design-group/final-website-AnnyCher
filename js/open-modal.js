const sendButton = document.querySelector('.form-button');
const modal = document.querySelector('.modal');
const backButton = modal.querySelector('.modal-button')

function toggleModal() {
	modal.classList.toggle('open');
}

sendButton.addEventListener('click', (evt) => {
	evt.preventDefault();
	toggleModal()
})

backButton.addEventListener('click', () => {
	toggleModal()
})
