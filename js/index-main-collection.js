//console.log()
const tabsMain = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');
//const line = document.querySelectorAll('[data-tab]');


tabsMain.forEach(function (item) {
	item.addEventListener('click', function () {

		contentBoxes.forEach(function (item) {
			item.classList.add('hiden')
		});



		const contentBox = document.querySelector('#' + this.dataset.tab);
		contentBox.classList.remove('hiden');




	})
})

const btns = document.querySelectorAll('.product__counter');

btns.forEach(btn => {
	btn.addEventListener('click', function () {
		const direction = this.dataset.direction;
		const inp = this.parentElement.querySelector('.product__value');
		const currentValue = +inp.value;
		let newValue;


		if (direction === 'plus') {
			newValue = currentValue + 1;
		} else {
			newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
		}

		inp.value = newValue;
	})
})