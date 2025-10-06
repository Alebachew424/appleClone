// =============================
// 1. Synchronous (Blocking)
// =============================
// function syncDelay(ms) {
//   const start = Date.now();
//   while (Date.now() - start < ms) {
//     // Busy wait (blocks the program)
//   }
//   console.log(" Finished blocking delay of " + ms + "ms");
// }

// // Example usage:
// console.log("Start synchronous task");
// syncDelay(3000); // 3 seconds delay (blocks everything!)
// console.log(" This prints only AFTER the 3s delay");

// =============================
// 2. Asynchronous (Non-Blocking)
// =============================
function asyncDelay(ms, callback) {
  setTimeout(() => {
    callback(" Finished non-blocking delay of " + ms + "ms");
  }, ms);
}

// Example usage:
console.log("Start asynchronous task");
asyncDelay(3000, (msg) => {
  console.log(msg);
});
console.log("This prints IMMEDIATELY, without waiting 3s");
