//your JS code here. If required.
const form = document.getElementById("form");
const age = document.getElementById("age");
const name = document.getElementById("name");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const userAge = age.value.trim();
  const userName = name.value.trim();

  // Validation
  if (userAge === "" || userName === "") {
    alert("Please enter valid details.");
    return;
  }

  // Promise
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Number(userAge) > 18) {
        resolve(`Welcome, ${userName}. You can vote.`);
      } else {
        reject(`Oh sorry ${userName}. You aren't old enough.`);
      }
    }, 4000);
  });

  promise
    .then(function (message) {
      alert(message);
    })
    .catch(function (message) {
      alert(message);
    });
});
