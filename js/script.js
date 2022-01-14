// console.log(window.pageXOffset);

// let q  = () => console.log(window.pageYOffset);
// setTimeout(q, 1000);


// window.scrollBy(0, 920);
// console.log(window.pageYOffset);


function changeImg(btn, item1, item2){
	btn.onclick = function() {
		item1.classList.toggle('display-none');
		item2.classList.toggle('display-none');
		btn.classList.toggle('btn-color-active');
		btn.classList.toggle('btn-color-passive');
		console.log('btn:', btn);
	}
	setTimeout(changeImg, 20000, btn, item1, item2);

}



let btn = document.querySelector('.but-change');
let worldCupItem = document.querySelector('.world-cup');
let filmItem = document.querySelector('.film');

setTimeout(changeImg, 2000, btn, worldCupItem, filmItem);


// console.log('worldCupItem:', worldCupItem.classList.contains('item-hidden'));
// console.log('filmItem:',  filmItem.classList.contains('item-hidden'));
// worldCupItem.classList.toggle('item-hidden');
// filmItem.classList.toggle('item-hidden');
// console.log('worldCupItem:', worldCupItem.classList.contains('item-hidden'));
// console.log('filmItem:', filmItem.classList.contains('item-hidden'));
// worldCupItem.classList.toggle('item-hidden');
// filmItem.classList.toggle('item-hidden');
// console.log('worldCupItem:', worldCupItem.classList.contains('item-hidden'));
// console.log('filmItem:', filmItem.classList.contains('item-hidden'));

// btn.addEventListener('click', changeImg.bind(null, btn, worldCupItem, filmItem, true));

let elem = document.querySelector('.foot__title');
console.log(elem);

console.log(elem.classList);
// console.log(elem.textalign);


// console.log(worldCupItem);
// console.log(btn);
// console.log(filmItem);
