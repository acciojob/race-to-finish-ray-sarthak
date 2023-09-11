window.promises = [
	promise1 = new Promise((resolve) => setTimeout(resolve, 900, 'quick')),
promise2 = new Promise((resolve) => setTimesolveout(resolve, 600, 'quick')),
 promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow')),
 promise4 = new Promise((re) => setTimeout(resolve, 500, 'slow')),
 promise5 = new Promise((resolve) => setTimeout(resolve, 500, 'slow')),
// allPromise = [promise1, promise2,promise3,promise4,promise5]
];
	

Promise.any(promises).then((value) =>{
	document.getElementById("output").innerHTML=value;
});

// Do not change the code above this
// add your promises to the array `promises`
