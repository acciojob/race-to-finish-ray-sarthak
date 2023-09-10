window.promises = [];
	const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
const promise4 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
const promise5 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
const allPromise = [promise1, promise2,promise3,promise4,promise5];

Promise.any(allPromise).then((value) =>{
	document.getElementById("output").innerHTML=value;
});

// Do not change the code above this
// add your promises to the array `promises`
