# Handling Asynchronous Operations in TypeScript with async/await

In JavaScript and TypeScript, asynchronous operations can be handled in different ways. Initially, callbacks were common, followed by promises, and now async/await offers a cleaner, more readable syntax. Here’s a quick guide with code example.

### Why Use async/await Over Callbacks and Promises?

- Readability: async/await makes asynchronous code look synchronous, which is easier to read and understand.

- Error Handling: With try/catch, error handling is simpler than with callbacks or .catch() in promises.

- Debugging: async/await reduces the complexity of asynchronous code and makes debugging easier.

### Basic Example Using Callbacks.

Consider a function that fetches user data with a callback:

```
function getUserData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("User data");
  }, 1000);
}

getUserData((data) => {
  console.log(data); // Output: User data
});

```

### Using Promises

Promises improve on callbacks by allowing chaining and handling errors more flexibly:

```
function getUserData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data");
    }, 1000);
  });
}

getUserData()
  .then((data) => console.log(data)) // Output: User data
  .catch((error) => console.error(error));

```

### Using async/await

With async/await, the code is cleaner and looks synchronous:

```
async function getUserData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data");
    }, 1000);
  });
}

async function displayUserData() {
  try {
    const data = await getUserData();
    console.log(data); // Output: User data
  } catch (error) {
    console.error(error);
  }
}

displayUserData();

```


In this example:

- await getUserData() pauses the displayUserData function until getUserData resolves, making the flow easier to understand.

- The try/catch block is used to handle any potential errors, making error handling straightforward.


### Summary

Using async/await in TypeScript improves readability and makes it easier to handle errors in asynchronous code. It’s now a preferred method over callbacks and promises for handling asynchronous operations.

