document.addEventListener("click", function (e) {

	// КНОПКА ПЛЮС
	if (e.target.classList.contains("cards-favourite-button-up")) {
		const container = e.target.closest(".cards-favourite-num-container");
		const input = container.querySelector(".cards-favourite-input");

		let value = parseInt(input.value) || 1;
		value++;
		input.value = value;

		updateCardPrice(container);
	}

	// КНОПКА МИНУС
	if (e.target.classList.contains("cards-favourite-button-down")) {
		const container = e.target.closest(".cards-favourite-num-container");
		const input = container.querySelector(".cards-favourite-input");

		let value = parseInt(input.value) || 1;
		value = Math.max(1, value - 1);
		input.value = value;

		updateCardPrice(container);
	}
});


// ФУНКЦИЯ: обновляет цену в карточке
function updateCardPrice(container) {
	const card = container.closest(".cards-favourite-item"); // сама карточка
	const priceElement = card.querySelector(".cards-favourite-price span"); // число цены
	const basePrice = +priceElement.dataset.baseprice || +priceElement.textContent;

	// Сохраняем базовую цену, если еще не сохранена
	if (!priceElement.dataset.baseprice) {
		priceElement.dataset.baseprice = basePrice;
	}

	const count = +card.querySelector(".cards-favourite-input").value;

	priceElement.textContent = basePrice * count;
}

