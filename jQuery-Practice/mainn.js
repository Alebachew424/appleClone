// mainn.js
// ===============================
// jQuery Practice
// ===============================

$(document).ready(function () {
  // This runs only after the HTML page is fully loaded
  console.log("jQuery Testing ..."); // Test to check script is connected

  // ===============================
  // QUESTION 1
  // ===============================

  // 1.1 Select element with id="sample1" and store it in a variable
  let sample1 = $("#sample1");

  // 1.2 Print the entire element (the <div> and its contents) to the console
  console.log("Element with id sample1:", sample1);

  // 1.3 Print only the content (inner HTML) of #sample1
  console.log("Content inside #sample1:", sample1.html());

  // ===============================
  // QUESTION 2
  // ===============================

  // 2.1 Select the <ul> element with id="techCompanies"
  let techCompanies = $("#techCompanies");
  console.log("Tech Companies ul:", techCompanies);

  // 2.2 Count how many <li> items are inside the ul#techCompanies
  let companiesCount = $("#techCompanies li").length;
  console.log("Number of tech companies:", companiesCount);

  // 2.3 Select all <li> elements with class="red"
  // let redCompaniess = $(".red").first();
  // let redCompanies = $(".red").eq(0);
  //let others = $(".red").not(":first");
  let redCompanies = $("techCompanies .red");
  console.log("Companies that has class red:", redCompanies);

  // 2.4 Create a new <li> element with text "Facebook"
  let newCompany = $("<li>Facebook</li>");
  console.log(" created element:", newCompany);

  // 2.5 Add class="blue" to the new <li> element
  newCompany.addClass("blue");

  // 2.6 Insert the new <li> after the existing <li> that contains "Sony"
  $("#techCompanies li:contains('Sony')").after(newCompany);

  // // 2.7 Count how many <li> elements have class="blue"
  // let blueCount = $("#techCompanies li.blue").length;

  // // Append the result to the #blueCompanies div
  // $("#blueCompanies").append(
  //   `<p>Total number of blue companies: ${blueCount}</p>`
  // );

  // console.log("Number of blue companies:", blueCount);


  //=======
  let blueCount = $("#techCompanies li").filter(".blue").length;

$("#blueCompanies").append(
  $("<p>").text(`Total number of blue companies: ${blueCount}`)
);

console.log("Number of blue companies:", blueCount);


//====3rd ways 
// let blueCount = $("#techCompanies").find("li.blue").length;

// $("#blueCompanies").append(`<p>Total number of blue companies: ${blueCount}</p>`);
// console.log(`Number of blue companies: ${blueCount}`);



  // ===============================
  // QUESTION 3
  // ===============================

  // Add event listener for the FIRST form (the sum/average form)

  //$("form").eq(0).on("submit", function (e)
  $("form")
    .first() // Select the first form on the page (sum & average form)
    .on("submit", function (e) {
      e.preventDefault(); // Stop the form from reloading the page on submit

      // ===============================
      // Get the input values and remove extra spaces
      // ===============================
      let val1 = $("#in1").val().trim(); // Get value of first input and trim spaces
      let val2 = $("#in2").val().trim(); // Get value of second input and trim spaces

      // ===============================
      // Check if both input values are numeric
      // ===============================
      if ($.isNumeric(val1) && $.isNumeric(val2)) {
        // Both inputs are numbers, so proceed with calculations

        // Convert string inputs to numbers (float)
        let num1 = parseFloat(val1);
        let num2 = parseFloat(val2);

        // Calculate sum and average
        let sum = num1 + num2;
        let avg = sum / 2;

        // ===============================
        // Display results
        // ===============================
        console.log("Sum:", sum, "Average:", avg); // Print to console for debugging
        $("#dsum").text(sum); // Show sum in the span with id 'dsum'
        $("#davg").text(avg); // Show average in the span with id 'davg'

        // ===============================
        // Clear previous error messages and reset field styles
        // ===============================
        $(".err").text(""); // Remove any existing error messages
        $("#in1, #in2").css("border", ""); // Reset input borders to default
      } else {
        // ===============================
        // Handle non-numeric input
        // ===============================

        // Display general error message
        $(".err").text(" Please enter numerical values only");

        // invalid fields in red
        if (!$.isNumeric(val1)) $("#in1").css("border", "2px solid red"); // Red border if val1 invalid
        if (!$.isNumeric(val2)) $("#in2").css("border", "2px solid red"); // Red border if val2 invalid

        // Clear previous results so no outdated values are shown
        $("#dsum").text("");
        $("#davg").text("");
      }

      // ===============================
      // Optional: add animation for error message
      // ===============================
      // $(".err").fadeIn(300).delay(2000).fadeOut(300); // Uncomment for fade-in/fade-out effect
    });

  // ===============================
  // Optional: remove error and red border when user starts typing
  // ===============================
  $("#in1, #in2").on("input", function () {
    $(this).css("border", ""); // Reset border when user types
    $(".err").text(""); // Remove error message
  });

  // ===============================
  // QUESTION 4
  // ===============================

  // Add event listener for the SECOND form (name/email form)
  //$("form").eq(1).on("submit", function (e)====Select the first form on the page and attach a submit event handler
  // $("form")
  //   .last()
  //   .on("submit", function (e) {
  //     e.preventDefault(); // Prevent page reload

  //     // Get values from input fields
  //     let first = $("#forF").val().trim(); // First Name
  //     let last = $("#forL").val().trim(); // Last Name
  //     let email = $("#email").val().trim(); // Email

  //     // Check if any of the required fields are empty
  //     if (!first || !last || !email) {
  //       // Show error message above the form
  //       $(".err").text("⚠️ Please fill all required fields before submitting.");
  //       return; // Stop execution here
  //     }

  //     // If all values are provided:
  //     $(".err").text(""); // Clear any error message
  //     $(this).hide(); // Hide the form completely

  //     // Display the submitted values in the .result span
  //     $(".result").html(`
  //     <h3>Submitted Information</h3>
  //     <p><strong>First Name:</strong> ${first}</p>
  //     <p><strong>Last Name:</strong> ${last}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //   `);
  //   });

  //===2nd ways
  // $("form")
  //   .last() // Select the last form on the page (user info form)
  //   .on("submit", function (e) {
  //     e.preventDefault(); // Prevent the default form submission which reloads the page

  //     // ===============================
  //     // Collect input values dynamically using jQuery
  //     // ===============================
  //     let formData = $(this) // 'this' refers to the current form
  //       .find("input") // Find all input fields inside this form
  //       .map(function () {
  //         // Iterate through each input element
  //         return $(this).val().trim(); // Get its value and remove extra spaces
  //       })
  //       .get(); // Convert the jQuery object into a normal array
  //     // formData now contains [firstName, lastName, email]

  //     // Destructure array into separate variables for easier use
  //     let [first, last, email] = formData;

  //     // ===============================
  //     // Validate inputs: check if any field is empty
  //     // ===============================
  //     if (formData.some((val) => !val)) {
  //       // formData.some() checks if at least one element is empty
  //       $(".err")
  //         .text(" Please fill all required fields before submitting.") // Set error text
  //         .fadeIn(400) // Smoothly show the error message
  //         .delay(2000) // Keep it visible for 2 seconds
  //         .fadeOut(400); // Then fade out smoothly
  //       return; // Stop execution here because the form is invalid
  //     }

  //     // ===============================
  //     // If all fields are valid
  //     // ===============================
  //     $(".err").text(""); // Clear any previous error message
  //     $(this).slideUp(500); // Hide the form with a sliding animation

  //     // Prepare the HTML content to display submitted data
  //     let resultHtml = `
  //     <h3>Submitted Information</h3>
  //     <p><strong>First Name:</strong> ${first}</p>
  //     <p><strong>Last Name:</strong> ${last}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //   `;

  //     // ===============================
  //     // Display the submitted data with animation
  //     // ===============================
  //     $(".result")
  //       .html(resultHtml) // Insert the prepared HTML into the result container
  //       .hide() // Start hidden (so we can animate it)
  //       .fadeIn(800); // Fade in smoothly over 0.8 seconds

  //     // ===============================
  //     // Optional: highlight the result briefly for visual effect
  //     // ===============================
  //     $(".result")
  //       .css("background-color", "#e0f7fa") // Set initial highlight color
  //       .animate({ backgroundColor: "#ffffff" }, 1500);
  //     // Animate the background back to white over 1.5 seconds
  //   });

  //=====3rd ways

  // ===============================
  // Handle the last form (User Info Form)
  // ===============================

  $("form") // Select all <form> elements on the page
    .last() // Narrow down to the LAST form (the one with First/Last/Email)
    .on("submit", function (e) {
      // Attach a "submit" event listener to this form
      e.preventDefault(); // Stop the form from reloading the page after submit

      // ===============================
      // Reset previous errors and styles
      // ===============================
      $(".err").remove(); // Remove all previous <span class="err"> error messages
      $("input").css("border", ""); // Reset borders of all input fields back to default

      // ===============================
      // Get values from each input field
      // ===============================
      let first = $("#forF").val().trim(); // Get "First Name" value and trim spaces
      let last = $("#forL").val().trim(); // Get "Last Name" value and trim spaces
      let email = $("#email").val().trim(); // Get "Email" value and trim spaces

      // ===============================
      // Validation flag
      // ===============================
      let isValid = true; // Assume the form is valid at the start. Will flip to false if any field fails.

      // ===============================
      // Check FIRST NAME field
      // ===============================
      if (!first) {
        // If the field is empty
        isValid = false; // Mark form as invalid
        $("#forF").after(
          // Insert an error message immediately after the First Name input
          '<span class="err" style="color:red"> First Name is required</span>'
        );
        $("#forF").css("border", "2px solid red"); // Add red border around the field
      }

      // ===============================
      // Check LAST NAME field
      // ===============================
      if (!last) {
        isValid = false;
        $("#forL").after(
          '<span class="err" style="color:red"> Last Name is required</span>'
        );
        $("#forL").css("border", "2px solid red"); // Highlight field with red border
      }

      // ===============================
      // Check EMAIL field
      // ===============================
      if (!email) {
        isValid = false;
        $("#email").after(
          '<span class="err" style="color:red"> Email is required</span>'
        );
        $("#email").css("border", "2px solid red");
      }

      // ===============================
      // Stop if validation failed
      // ===============================
      if (!isValid) {
        return; // Exit the function, don't process form further
      }

      // ===============================
      // If all fields are valid
      // ===============================
      $(this).slideUp(500); // Hide the form with a smooth sliding animation (500ms)

      // Insert the submitted values into the .result container
      $(".result")
        .html(
          // Replace content of .result with formatted HTML showing submitted data
          `
        <h3>Submitted Information</h3>
        <p><strong>First Name:</strong> ${first}</p>
        <p><strong>Last Name:</strong> ${last}</p>
        <p><strong>Email:</strong> ${email}</p>
      `
        )
        .hide() // Start hidden (so we can animate it in)
        .fadeIn(800); // Fade in smoothly over 800ms

      // ===============================
      // Optional:  result visually
      // ===============================
      $(".result")
        .css("background-color", "#e0f7fa") // Start with a light blue background
        .animate({ backgroundColor: "#ffffff" }, 1500); // Animate back to white over 1.5s
    });

  // ===============================
  // Extra feature: live validation while typing
  // ===============================
  $("input").on("input", function () {
    $(this).next(".err").remove(); // Remove the error message right next to THIS input
    $(this).css("border", ""); // Reset THIS input’s border to default
  });
});
