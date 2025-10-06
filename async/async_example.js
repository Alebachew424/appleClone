// // // Declare an async function
// // async function getPost(postId) {
// //   try {
// //     // await waits for the fetch to complete
// //     let response = await fetch(
// //       `https://jsonplaceholder.typicode.com/posts/${postId}`
// //     );

// //     // await again waits for JSON parsing
// //     let post = await response.json();

// //     // Log the result
// //     console.log("Post title:", post.title);
// //   } catch (error) {
// //     // Handle errors with try...catch
// //     console.log("Error:", error);
// //   }
// // }

// // // Call the async function
// // getPost(1);

// //===example two

// // //  Synchronous (blocking simulation)
// // console.log("Synchronous: Start");
// // function fetchUserSync() {
// //   // Blocks for 2 sec (simulating fetch)
// //   let start = Date.now();
// //   while (Date.now() - start < 2000) {}
// //   return { name: "Leanne Graham" };
// // }
// // let userSync = fetchUserSync();
// // console.log("Synchronous: User:", userSync.name);
// // console.log("Synchronous: End");

// //  Asynchronous
// // console.log("Asynchronous: Start");
// // async function fetchUserAsync() {
// //   let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
// //   let user = await response.json();
// //   console.log("Asynchronous: User:", user.name);
// // }
// // fetchUserAsync();
// // console.log("Asynchronous: End");
// // Sync → Blocks 2s, nothing else runs.

// // Async → Prints "End" before user data arrives.

// //=============3rd examples
// // Synchronous
// // console.log("Synchronous: Start");
// // try {
// //   throw new Error("File not found");
// // } catch (err) {
// //   console.error("Synchronous Error:", err.message);
// // }
// // console.log("Synchronous: End");

// // // ✅ Asynchronous
// // console.log("Asynchronous: Start");
// // async function fetchWithErrorAsync() {
// //   try {
// //     let response = await fetch("https://wrong-url.com/data");
// //     let data = await response.json();
// //     console.log("Asynchronous:", data);
// //   } catch (err) {
// //     console.error("Asynchronous Error:", err.message);
// //   }
// // }
// // fetchWithErrorAsync();
// // console.log("Asynchronous: End");

// //====4th Examples

// //  Synchronous version
// console.log("Synchronous: Start");
// // Prints immediately to the console: "Synchronous: Start"

// function loginSync(user, pass) {
//   // Defines a synchronous login function
//   let start = Date.now();
//   while (Date.now() - start < 1000) {}
//   // Busy-wait for 1 second (1000ms) — this blocks the entire program
//   // Nothing else can run during this time (UI freeze in browser)

//   if (user === "admin" && pass === "1234") return "Login successful";
//   // If credentials match, return success immediately
//   else throw "Invalid credentials";
//   // If credentials don’t match, throw an error
// }

// try {
//   let result = loginSync("admin", "1234");
//   // Call the synchronous login function
//   // Program waits here for 1 second because of busy-wait
//   console.log("Synchronous:", result);
//   // Prints: "Synchronous: Login successful"
// } catch (e) {
//   console.error("Synchronous:", e);
//   // If loginSync throws an error, catch it and print
// }

// console.log("Synchronous: End");
// // Prints last, after everything else has completed

// // ✅ Asynchronous version
// console.log("Asynchronous: Start");
// // Prints immediately: "Asynchronous: Start"

// function login(user, pass) {
//   // Returns a Promise so we can use async/await
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Simulate async operation (like network request)
//       if (user === "admin" && pass === "1234") resolve("Login successful");
//       // Call resolve if login successful
//       else reject("Invalid credentials");
//       // Call reject if login fails
//     }, 1000);
//     // Wait for 1 second before resolving or rejecting
//     // Non-blocking: JS can run other code in the meantime
//   });
// }

// async function authenticateAsync() {
//   // Async function allows us to use `await` inside
//   try {
//     let result = await login("admin", "1234");
//     // Wait until the Promise returned by login() resolves
//     // During this 1 second, other code continues running
//     console.log("Asynchronous:", result);
//     // Prints "Asynchronous: Login successful" after 1 second
//   } catch (e) {
//     console.error("Asynchronous:", e);
//     // If Promise is rejected, catch and print the error
//   }
// }

// authenticateAsync();
// // Call the async function
// // Returns immediately (does NOT block) and continues executing the next line

// console.log("Asynchronous: End");
// // Prints immediately: "Asynchronous: End"
// // Happens BEFORE the Promise resolves because async function is non-blocking

// //====notes
// // async/await does not block the main thread.

// // await pauses only the async function, not the entire program.

// // We need a Promise because await only works on Promises.

// // The non-blocking behavior allows other operations (like UI updates) to continue.

// //=====Example Five

// console.log("Synchronous: Start");
// // Prints immediately: "Synchronous: Start"

// function fetchParallelSync() {
//   // Synchronous function that simulates fetching data sequentially

//   let start = Date.now();
//   while (Date.now() - start < 2000) {}
//   // Busy-wait for 2 seconds (simulating first data fetch)
//   // ⚠️ During this time, nothing else runs (blocking)

//   let user = { name: "Leanne Graham" };
//   // Create a fake user object after 2 sec

//   while (Date.now() - start < 4000) {}
//   // Busy-wait another 2 seconds (simulating second data fetch)
//   // Total wait: 4 seconds from start

//   let todos = new Array(200);
//   // Create fake todos array

//   return { user, todos };
//   // Return both user and todos after total 4 seconds
// }

// let parallelSync = fetchParallelSync();
// // Call the synchronous function
// // Program is blocked for 4 seconds while function runs

// console.log("Synchronous: User:", parallelSync.user.name);
// // Prints: "Synchronous: User: Leanne Graham"

// console.log("Synchronous: Todos:", parallelSync.todos.length);
// // Prints: "Synchronous: Todos: 200"

// console.log("Synchronous: End");
// // Prints last

// console.log("Asynchronous: Start");
// // Prints immediately: "Asynchronous: Start"

// async function fetchParallelAsync() {
//   // Async function to fetch multiple resources in parallel

//   let [user, todos] = await Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
//       res.json()
//     ),
//     fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
//       res.json()
//     ),
//   ]);
//   // Promise.all runs both fetches **in parallel**
//   // Waits until **both** Promises are resolved
//   // Much faster than sequential fetches

//   console.log("Asynchronous: User:", user.name);
//   // Prints the fetched user's name

//   console.log("Asynchronous: Todos:", todos.length);
//   // Prints the number of todos fetched
// }

// fetchParallelAsync();
// // Start async function
// // Execution continues immediately without waiting

// console.log("Asynchronous: End");
// // Prints immediately: "Asynchronous: End"
// // Happens before fetches are complete

// //===================--------usages of Async/wait,,,,,with our promise and natural promises

// // When used with a function that already returns a Promise (like fetch)

// // When used with a function that does not return a Promise (needs new Promise)

// // I’ll also give example scenarios for each.

// // 1️⃣ Usage with functions that already return a Promise
// // Explanation

// // Some built-in APIs or libraries already return Promises (like fetch, axios, or database queries in Node.js).

// // You can use await directly without wrapping them in new Promise().

// // The code becomes linear, readable, and easy to handle errors with try/catch.

// // Scenario Code: Fetching user data from an API
// async function getUser() {
//   try {
//     // fetch() returns a Promise, await pauses until resolved
//     let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let user = await response.json(); // json() also returns a Promise
//     console.log("User name:", user.name);
//   } catch (err) {
//     console.error("Error fetching user:", err.message);
//   }
// }
// getUser();
// console.log("This prints before user data is fetched");

// // ✅ Explanation

// // fetch() returns a Promise → can be awaited directly.

// // console.log("This prints…") runs immediately because async is non-blocking.

// // Errors are caught in try/catch.

// // 2️⃣ Usage with functions that do NOT return a Promise
// // Explanation

// // Some asynchronous operations (timers, callback-based functions) don’t return Promises.

// // You need to wrap them in a Promise to use await.

// // Scenario Code: Delay / Timer
// function delay(ms) {
//   // Wrap setTimeout in a Promise
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function runTask() {
//   console.log("Task started");
//   await delay(2000); // Wait for 2 seconds
//   console.log("Task finished after 2 seconds");
// }

// runTask();
// console.log("This prints immediately, without waiting for delay");

// //  Explanation

// // setTimeout is callback-based → cannot be awaited directly.

// // Wrapping in Promise allows await to pause the async function without blocking the main thread.

// // 3️⃣ Key Comparison Table
// // Feature	Already Returns Promise	Does Not Return Promise
// // Example	fetch(), axios(), DB queries	setTimeout(), Node fs callbacks
// // await usage	Can use directly	Must wrap in new Promise()
// // Error handling	try/catch works naturally	try/catch works after wrapping
// // Code readability	Linear, simple	Slightly more code but still readable

// // =========sequntial vereses Parallel

// // Sequential Fetch Requests
// async function sequentialFetch() {
//   console.log("Sequential Fetch: Start");

//   // Fetch user first
//   const userResponse = await fetch(
//     "https://jsonplaceholder.typicode.com/users/1"
//   );
//   const user = await userResponse.json(); // wait for JSON parsing
//   console.log("Sequential Fetch: User:", user.name);

//   // Fetch todos next
//   const todosResponse = await fetch(
//     "https://jsonplaceholder.typicode.com/todos"
//   );
//   const todos = await todosResponse.json();
//   console.log("Sequential Fetch: Todos count:", todos.length);

//   console.log("Sequential Fetch: End");
// }

// sequentialFetch();

// // Output order & timing
// // Sequential Fetch: Start
// // (wait ~1s)
// // Sequential Fetch: User: Leanne Graham
// // (wait ~1s)
// // Sequential Fetch: Todos count: 200
// // Sequential Fetch: End

// // Total time: ~2 seconds (sum of both requests)

// // Explanation: Each fetch waits for the previous one to complete → sequential execution.

// // 2️⃣ Parallel Fetch Requests using Promise.all
// async function parallelFetch() {
//   console.log("Parallel Fetch: Start");

//   // Run both fetches at the same time
//   const [userResponse, todosResponse] = await Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users/1"),
//     fetch("https://jsonplaceholder.typicode.com/todos"),
//   ]);

//   // Parse JSON
//   const user = await userResponse.json();
//   const todos = await todosResponse.json();

//   console.log("Parallel Fetch: User:", user.name);
//   console.log("Parallel Fetch: Todos count:", todos.length);

//   console.log("Parallel Fetch: End");
// }

// parallelFetch();

// // Output order & timing
// // Parallel Fetch: Start
// // (wait ~1s)
// // Parallel Fetch: User: Leanne Graham
// // Parallel Fetch: Todos count: 200
// // Parallel Fetch: End

// // Total time: ~1 second (maximum of both requests)

// // Explanation: Both fetches run in parallel, finishing together → faster.

// // ===================Example 2 on sequntial verses paallel

// // Sequential await (runs one after another)
// function delay(ms, value) {
//   return new Promise((resolve) => setTimeout(() => resolve(value), ms));
// }

// async function sequentialTasks() {
//   console.log("Sequential: Start");

//   const user = await delay(2000, { name: "Leanne Graham" });
//   // waits 2 seconds before continuing
//   console.log("Sequential: User:", user.name);

//   const todos = await delay(2000, new Array(200));
//   // waits another 2 seconds
//   console.log("Sequential: Todos count:", todos.length);

//   console.log("Sequential: End");
// }

// sequentialTasks();

// // Output & timing
// // Sequential: Start
// // (wait 2s)
// // Sequential: User: Leanne Graham
// // (wait 2s)
// // Sequential: Todos count: 200
// // Sequential: End

// // Total time: ~4 seconds
// // ✅ Explanation: Each await pauses execution until the previous task finishes.

// // 2️⃣ Parallel await using Promise.all (runs together)
// async function parallelTasks() {
//   console.log("Parallel: Start");

//   const [user, todos] = await Promise.all([
//     delay(2000, { name: "Leanne Graham" }),
//     delay(2000, new Array(200)),
//   ]);
//   // Both delays run **in parallel**, wait until both finish

//   console.log("Parallel: User:", user.name);
//   console.log("Parallel: Todos count:", todos.length);

//   console.log("Parallel: End");
// }

// parallelTasks();

// // Output & timing
// // Parallel: Start
// // (wait ~2s)
// // Parallel: User: Leanne Graham
// // Parallel: Todos count: 200
// // Parallel: End

// // Total time: ~2 seconds
// //  Explanation: Both tasks run simultaneously → total time = max delay, not sum of delays.


function job(state) {
 return new Promise(function (resolve, reject) {
 if (state) {
 resolve("success");
 } else {
 reject("error");
 }
 });
 }
 let promise = job(true);
 promise
 .then(function (data) {
 console.log(data);
 return job(false);
 })
 .catch(function (error) {
 console.log(error);
 return "Error caught";
 })
 .then(function (data) {
 console.log(data);
 return job(true);
 })
 .catch(function (error) {
 console.log(error);
 })