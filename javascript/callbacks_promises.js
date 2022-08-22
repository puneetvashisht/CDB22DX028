// Using callbacks to deal with asynchronous operation:

function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ]);
  }, 4000);
}

function findUser(username, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.username === username); // This returns a user with the matched username.

    callback(user);
  });
}

findUser("john", console.log);

// Understanding promises:

// Following are the multiple states of the 'promise' object.
// 1. pending (When request takes time to execute)
// 2. fulfilled (when successfull data is fetched)
// 3. rejected. (when data fetching is not successful or the call is failed for some reason.)

// A promise is an object that encapsulates the result of an asynchronous operation.

// Example: Creating promises using 'Promise constructor';

// const promise = new Promise((resolve, reject) => {
//   // 'resolve' and 'reject' are the functions references.
// });
// console.log(promise);

// 2nd Example of promise:-

// const promise = new Promise((resolve, reject) => {
//   const data = 6;
//   const error = "Operation was unsuccessful";

//   let success = true;
//   if (success) {
//     resolve(data); // resolved with data
//   } else {
//     reject(error); // rejected with a reason
//   }
// });

// console.log(promise);

// Practical example of promises:-

const success = true;
function getUsers() {
  return new Promise((resolve, reject) => {
    // reject("Failed to get the user list because of down server"); // Reason could be anything for the rejection.
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject("Failed to get the user list because of down server"); // Reason could be anything for the rejection.
      }
    }, 4000);
  });
}

const promise = getUsers(); // Will return a promise.

// console.log(promise);

// For getting the data we need to use .then() method. And for catching the errors, we need to use .catch() method on the promise object..

promise.then((response) => {
  console.log("userList", response);
});
promise.catch((error) => {
  console.log("error of rejection of promise", error);
});
