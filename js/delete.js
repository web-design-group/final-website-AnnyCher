const deleteButton = document.querySelector('.input-delete-button')
const inputName = document.querySelector('.input-name')

deleteButton.addEventListener('click', () => {
	inputName.value = '';
	deleteButton.classList.remove('active');
})

inputName.addEventListener('input', () => {
	const length = inputName.value.length;
	if (length > 0) {
		deleteButton.classList.add('active');
	} else {
		deleteButton.classList.remove('active');
	}
})

