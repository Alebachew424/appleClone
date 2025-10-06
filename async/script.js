// Select output element
const output = document.getElementById("output");
const btnSync = document.getElementById("btnSync");
const btnAsync = document.getElementById("btnAsync");

// =============================
// 1. Synchronous Example
// =============================
btnSync.addEventListener("click", () => {
  output.textContent = "Start Synchronous Task...\n";

  // This loop blocks everything for ~3 seconds
  let start = Date.now();
  while (Date.now() - start < 3000) {
    // Busy waiting (blocking)
  }

  output.textContent += "Task finished!\n";
  output.textContent += "End of function.";
});

// =============================
// 2. Asynchronous Example
// =============================
btnAsync.addEventListener("click", () => {
  output.textContent = "Start Asynchronous Task...\n";

  // Non-blocking task using setTimeout
  setTimeout(() => {
    output.textContent += "Task finished after 3 seconds!\n";
  }, 3000);

  output.textContent += "End of function (runs immediately).\n";
});
