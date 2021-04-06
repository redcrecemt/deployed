
// console.log(global);

setTimeout(() => {
    console.log('Timed out');
    clearInterval(int);
}, 3000);

const int=setInterval(() => {
    console.log('In Interval');
},1000);