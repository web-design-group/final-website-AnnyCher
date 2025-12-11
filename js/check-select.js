document.querySelectorAll('.subscription-dropdown-select').forEach(dropdown => {
	const selected = dropdown.querySelector('.subscription-dropdown-selected');
	const options = dropdown.querySelectorAll('.subscription-dropdown-list li');

	selected.addEventListener('click', () => {
		dropdown.classList.toggle('active');
	});

	options.forEach(option => {
		option.addEventListener('click', () => {
			selected.textContent = option.textContent;
			selected.classList.remove('placeholder');
			dropdown.classList.remove('active');
			dropdown.dataset.selected = option.dataset.value;
		});
	});

	document.addEventListener('click', (e) => {
		if (!dropdown.contains(e.target)) {
			dropdown.classList.remove('active');
		}
	});
});
