let elem = document.querySelector('.right-navbar__img_1');
let elemItem1 = document.querySelector('.right-navbar__item_1');
console.log('elem:', elem);
// console.log(elem.clientWidth);
// console.log(elem.clientHeight);
let parElem = elem.parentElement;
console.log('elem parent:', parElem);
// console.log(parElem.clientWidth);
// console.log(parElem.clientHeight);
console.log(elemItem1);

// console.log(elemItem1.clientHeight);
// console.log(elemItem1.clientWidth);

function resizeScreen(x, y){
	// window.resizeTo(500, 500)
	console.log('x:', x);
	console.log('y:', y);
	
	console.log('type x:', typeof x);
	
	window.resizeTo(Number(x), Number(y));
	// xSizeArea.value = '500';
}

let buttonChangeSize = document.querySelector('.change-screen-size');
// buttonChangeSize.addEventListener('click', newGame.bind(null, StartMoveColor, downsideColor));

let xSizeArea = document.querySelector('.x-size');
let ySizeArea = document.querySelector('.y-size');
console.log(xSizeArea);
let xSize;
xSizeArea.value = 1200;
ySizeArea.value = 600;

function showXSize(xSizeArea, ySizeArea){
	console.log('xvalue:', xSizeArea.value);
	console.log('yvalue:', ySizeArea.value);
	resizeScreen(xSizeArea.value, ySizeArea.value);
	return xSizeArea.value;

}
// document.documentElement.style.overflow = 'hidden';
console.log('window.innerWidth', window.innerWidth);
console.log('documentElement.clientWidth', document.documentElement.clientWidth);
console.log('DocumentElement.clientHeight', document.documentElement.clientHeight);
console.log(2, window.innerHeight);
// window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
// window.resizeTo(500, 500);
console.log(3, window.innerWidth);
console.log('window.screen.availWidth:', window.screen.availWidth);
console.log('window.screen.availHeight:', window.screen.availHeight);
// window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
function quarter() {


		window.innerWidth = 700;
  }
// quarter();
console.log('window.screen.availWidth:', window.screen.availWidth);
console.log('window.screen.availHeight:', window.screen.availHeight);
// setInterval(showXSize, 1000, xSizeArea, ySizeArea);
  
// let xSize = 



// buttonChangeSize.addEventListener('click', newSize.bind(null));
function newSize(){
	console.log('buttonChangeSize.value:' , buttonChangeSize.value);
	let num = Number(xSizeArea.value) + 10;
	xSizeArea.value =  num;
	// console.log('typeof xSizeArea.value', typeof (xSizeArea.value));
	console.log('typeof num', typeof (num), 'num:', num);
	
	window.innerWidth = Number(xSizeArea.value);
	window.resizeTo(Number(xSizeArea.value), Number(ySizeArea.value));
	// xSizeArea.innerText =  xSizeArea.value;
}