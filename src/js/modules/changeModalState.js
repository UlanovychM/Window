const changeModalState = state => {
	const windowForm = document.querySelectorAll('.balcon_icons_img');
	const windowWidth = document.querySelector('#width');
	const windowHeight = document.querySelector('#height');
	const windowType = document.querySelector('#view_type');
	const windowProfile = document.querySelector('.checkbox');

	windowForm.forEach((item, i) => {
		item.addEventListener('click', () => {
			state.form = i;
		});
	});
};

export default changeModalState;
