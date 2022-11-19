const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const trigger = document.querySelectorAll(triggerSelector);
		const modal = document.querySelector(modalSelector);
		const close = document.querySelector(closeSelector);
		const windows = document.querySelectorAll('[data-modal]');

		trigger.forEach(item => {
			item.addEventListener('click', e => {
				if (e.target) {
					e.preventDefault();
				}

				windows.forEach(item => {
					item.style.display = 'none';
				});

				modal.style.display = 'block';
				document.body.classList.add('modal-open');
			});
		});

		close.addEventListener('click', () => {
			windows.forEach(item => {
				item.style.display = 'none';
			});

			modal.style.display = 'none';
			document.body.classList.remove('modal-open');
		});

		modal.addEventListener('click', e => {
			windows.forEach(item => {
				item.style.display = 'none';
			});

			if (e.target === modal) {
				modal.style.display = 'none';
				document.body.classList.remove('modal-open');
			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.classList.add('modal-open');
		}, time);
	}

	bindModal(
		'.popup_engineer_btn',
		'.popup_engineer',
		'.popup_engineer .popup_close'
	);
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');

	// showModalByTime('.popup', 60000);
};

export default modals;
