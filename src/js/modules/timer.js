const timer = (id, deadline) => {
	const getTimeRemaining = endtime => {
		const t = Date.parse(endtime) - Date.parse(new Date());
		const second = Math.floor((t / 1000) % 60);
		const minutes = Math.floor((t / 1000 / 60) % 60);
		const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		const days = Math.floor(t / (1000 * 60 * 60 * 24));

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			second: second,
		};
	};

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	const setClock = (selector, endtime) => {
		const timer = document.querySelector(selector);
		const days = timer.querySelector('#days');
		const hours = timer.querySelector('#hours');
		const minutes = timer.querySelector('#minutes');
		const second = timer.querySelector('#seconds');
		const timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.textContent = getZero(t.days);
			hours.textContent = getZero(t.hours);
			minutes.textContent = getZero(t.minutes);
			second.textContent = getZero(t.second);

			if (t.total <= 0) {
				days.textContent = '00';
				hours.textContent = '00';
				minutes.textContent = '00';
				second.textContent = '00';
				clearInterval(timeInterval);
			}
		}
	};

	setClock(id, deadline);
};

export default timer;
