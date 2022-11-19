import './modules/slider';
import modals from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	modals();
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
	tabs(
		'.decoration_slider',
		'.no_click',
		'.decoration_content > div > div',
		'after_click'
	);
	forms();
});
