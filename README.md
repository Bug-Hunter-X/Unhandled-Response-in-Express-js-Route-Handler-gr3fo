# Unhandled Response in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: a route handler that doesn't send a response to the client.  The server starts successfully but fails to respond to incoming requests.

## Bug Description
The `bug.js` file contains an Express.js server that listens for requests on the root path ('/'). However, the route handler only logs a message to the console; it lacks a crucial `res.send()` or similar call to send a response back to the client.  Consequently, clients making requests to the server will experience a timeout or other connection issues.

## Solution
The `bugSolution.js` file corrects the problem by adding a `res.send()` call within the route handler. This ensures that a response is sent to the client, resolving the issue.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js`. Observe that the server starts but doesn't respond to requests.
4. Run `node bugSolution.js`.  The server will now respond correctly.