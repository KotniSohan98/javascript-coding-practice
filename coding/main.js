console.log("Hello World");

const ele = document.querySelector("input");

//before debouncing
// ele.addEventListener("keyup", () => {
//   console.log("Data received from server");
// });

//after debouncing
const outcome = (data) => {
  console.log("Data received from server", data);
};

//Here, why we are returning function inside hofDebounce to acheive the closure for timer which persist the timer for all event function called.
function hofDebounce(fn, timeOut) {
  let timer;
  return (...args) => {
    console.log("timer", timer);

    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(args);
    }, timeOut);
  };
}

const result = hofDebounce(outcome, 1000);
ele.addEventListener("keyup", (event) => result(event.target.value));
