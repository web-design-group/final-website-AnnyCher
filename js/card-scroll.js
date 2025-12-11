const buyButtons = document.querySelectorAll('.subscription-button');

const dropdownSelect = document.querySelector('.subscription-dropdown-select');
const dropdownSelected = document.querySelector('.subscription-dropdown-selected');
const dropdownListItems = document.querySelectorAll('.subscription-dropdown-list li');

buyButtons.forEach(button => {
	button.addEventListener('click', () => {
		const title = button.closest('.subscription-swiper-slide').querySelector('h3').textContent.trim();

		dropdownSelected.textContent = title;
		dropdownSelected.classList.remove('placeholder');

		const selectedItem = Array.from(dropdownListItems).find(li => li.textContent.trim() === title);
		if (selectedItem) {
			dropdownSelect.dataset.selected = selectedItem.dataset.value;
		}

		const form = document.querySelector('.form-input-container');
		form.scrollIntoView({ behavior: 'smooth' });

		dropdownSelect.classList.remove('active');
	});
});
