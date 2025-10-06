// =============================
// 1. Function that returns a Promise
// =============================
function delayWithPromise(ms) {
  // Return a new Promise object
  // A Promise represents a value that may be available now, later, or never
  return new Promise((resolve, reject) => {
    // setTimeout simulates an asynchronous operation (like fetching data)
    setTimeout(() => {
      // After ms milliseconds, we "resolve" the Promise with a message
      resolve(`⏳ Finished non-blocking delay of ${ms}ms (Promise)`);

      // Note: reject() can be used to simulate an error
      // Example: reject("Something went wrong");
    }, ms); // Delay in milliseconds
  });
}

// =============================
// 2. Button Event Listener
// =============================
document.getElementById("promiseBtn").addEventListener("click", () => {
  // This runs immediately when button is clicked
  console.log("Start async task using Promise");

  // Call the function that returns a Promise
  // delayWithPromise does not block; it schedules the callback for later
  delayWithPromise(3000)
    .then((message) => {
      // .then() runs **after the Promise is resolved**
      // The callback receives the resolved value (message)
      console.log(message); // Logs after 3 seconds
    })
    .catch((error) => {
      // .catch() runs if the Promise is rejected (error occurs)
      console.error("❌ Error:", error);
    });

  // This line runs immediately **without waiting** for the Promise
  // Demonstrates the non-blocking behavior of Promises
  console.log("✅ This prints IMMEDIATELY, Promise runs in background");
});
