const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const counterValue = document.querySelector("#counterValue");

let count = 0;

increment.addEventListener('click', () => {
    count++;
    counterValue.innerHTML = count;
})

decrement.addEventListener('click', () => {
    count--;
    counterValue.innerHTML = count;
})