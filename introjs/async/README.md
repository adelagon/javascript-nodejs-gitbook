# Asynchronous Programming

Javascript is **asynchronous** in nature. Unlike other programming languages like python, the javascript's execution of code may not be sequential. 

## Callback Functions

You may have noticed that functions in javascript are treated as a primitive types, meaning, you can use functions as arguments to another function. These are typically called **callback functions**. Callback functions may be executed synchronously:

{% runkit %}
function greet(name) {
    console.log("Hello, " + name);
}

function setName(name, cb) {
    return cb(name);
}

setName("Ada", greet);
{% endrunkit %}

Callbacks functions can also be executed asynchronously:

{% runkit %}
// Helper function for delaying execution
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// initial value of 'a'
let a = "foo";

// change value of 'a' after 5 seconds
setTimeout(function() { a = "bar" }, 5000);

// This line of code immediately executes without waiting for setTimeout to finish
console.log("'a' value is: " + a);

// Say for example after 5 seconds we check the value of 'a'
await sleep(5001);
console.log("'a' value after 5~ seconds is: " + a);
{% endrunkit %}

On the example above, the setTimeout will trigger the anonymous callback function that was provided to it after 5000 milliseconds. The javascript interpreter will not await for 5000 milliseconds to execute the piece of code right after it.

There's is also no limit on how many callback functions you can provide. One example of this are some popular third-party libraries such as **jQuery ajax library**

```javascript
$.ajax({
    url: "http://google.com",
    success: successCallback,
    complete: completeCallback,
    error: errorCallback
});
```

**success** will execute when it receives successful response from the web. **complete** will execute after the successCallback has finished. **error** may or may not execute depending on the response.

## Callback Hell

Callbacks are nice but they have one big disadvantage. Chaining callbacks can cause a lot of confusion and makes your code unbearable to read. Say for example:

{% runkit %}
var request = require('request');

request('http://google.com', function (error, response, body) { 
    request('http://yahoo.com', function (error, response, body) {
        request('http://facebook.com', function (error, response, body) {
            request('http://instagram.com', function (error, response, body) {
                console.log("I finally visited them all!!!");
                });
            });
        });
    });
{% endrunkit %}

The example above gets more hairer say for example if you want to store the results in a database.

Dealing with callback hell has been tackled many times by javascript developers and to the point that popular async frameworks has been invented to make it bearable.

One of the popular libraries we have used is **async.js** (https://caolan.github.io/async/)

##  Promises

ES6 introduced a native ways of dealing with Callback Hell. One of the key additions are **Promises**.

Promises simplifies asynchronous programming by making the code look synchronous. A promise is a container for a future value. Here's the format:

```javascript
var promise = new Promise(function (resolve, reject) {
    // do an asynchronous operation

    if (/* is successful */) {
    	resolve("It worked!");
	} else {
        // if unsuccessful
		reject("It failed!");
    }
});
```

Promise takes a function with two parameters: **resolve & reject** which are functions themselves. If the operation is successful the value is sent back using the resolve function. If the operation is unsuccessful the value is sent back using the reject function. A good analogy to further understand the concept:

> If you borrow money to somebody, you return to him a promise to pay your debt later the next day. The promise at the current time is unknown yet and your integrity to pay back is around 50%. After a day if you pay back your debt, your promise is **resolved**, if you don't pay back your debt, your promise is **rejected**. 

The concept above can be written this way:
{% runkit %}
let promise = new Promise(function (resolve, reject) {
    // simulate 1 day (5000ms)
    setTimeout(function() {
        if (Math.floor(Math.random() * 2) === 0) {
            reject("Sorry, I can't pay yet.");
        } else {
            resolve("Here's my your money, thanks!");
        }
    }, 5000);
});

promise.then(function(result) { console.log("He Paid!") },
             function(err) { console.log("Awww... man...") });

{% endrunkit %}

Using Promises are quite simple. You just need to know **then** & **catch** methods. The then methods takes two functions as arguments:

```javascript
promise.then(successHandler, errorHandler)
```

The successHandler will execute if the promise has been resolved, the errorHandler will execute if the promise has been rejected or there was an exception.

You may also chain promises at will:

```javascript
first_promise()
    .then(function() { return second_promise(); })
    .then(function() { return third_promise();  })
        ...
    .then(function() { return nth_promise();    });
```

For example:

{% runkit %}
var promise1 = new Promise(function (resolve, reject) {
        setTimeout(function () { 
                       console.log("First Promise");
                       resolve(1);
                   }, 1000);
     });

var promise2 = new Promise(function (resolve, reject) {
        setTimeout(function () { 
                       console.log("Second Promise");
                       resolve(2);
                   }, 2000);
     });
     
var promise3 = new Promise(function (resolve, reject) {
        setTimeout(function () { 
                       console.log("Third Promise");
                       resolve(3);
                   }, 3000);
     });

var log = function (arg) {
      console.log("yey!");    
}

promise1
     .then(promise2)
     .then(promise3)
     .then(log);
{% endrunkit %}

Chaining promises will be very useful when using asynchronous libraries such as **request-promise**

{% runkit %}
require('request');
let request = require('request-promise-native');

function visitRootApi() {
    console.log("Visiting Root");
    return request({
        "method": "GET",
        "uri": "https://api.github.com/",
        "json": true,
        "headers": {
            "User-Agent": "My little demo app"
        },
    });
}

function visitUserApi(args) {
    console.log("Visiting User" + args);
    return request({
        "method": "GET",
        "uri": "https://api.github.com/users/adelagon",
        "json": true,
        "headers": {
            "User-Agent": "My little demo app"
        },
    });
}

visitRootApi().then(visitUserApi).then(console.log);
{% endrunkit %}

Running parallel promises is also possible by using the **Promise.all** function:

{% runkit %}
require('request');
let request = require('request-promise-native');

function visitGoogle() {
    console.log("Visiting Google");
    return request({
        "method": "GET",
        "uri": "http://google.com",
    });
}

function visitFacebook() {
    console.log("Visiting Facebook");
    return request({
        "method": "GET",
        "uri": "http://facebook.com",
    });
}

function visitInstagram() {
    console.log("Visiting Instagram");
    return request({
        "method": "GET",
        "uri": "http://instagram.com",
    });
}

function printResult(results) {
    console.log("Done browsing!");
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);

}
Promise.all([visitGoogle(), visitFacebook(), visitInstagram()]).then(printResult);
{% endrunkit %}

## Async and Await

Although Promises are a nice way of resolving the callback hell, you'll still have to use the **then** and **catch** methods in order to resume the process once the Promise has been resolved/rejected. It also gets quite confusing when you chain your Promises.

The latest version of ES introduced a much better way dealing with Promises by introducing the **async** and **await** statements. These statements basically allows you to use Promises as if they are synchronous code. The code snippet below demonstrates this:

{% runkit %}
async function sleep5() {
    return new Promise(function (resolve, reject) {
                           setTimeout(function() { resolve () }, 5000)
                       });
}

async function main() {
    sleep5();
    console.log("No waiting");
    await sleep5();
    console.log("With await");
}

main();
{% endrunkit %}

When sleep5 function was first called without await, you'll notice that the line of code next to it was executed as sleep5 returns a Promise.

When we put await before the sleep5 function, it will execute the next line of code only if the Promise has been resolved.

**[IMPORTANT NOTE]** if you use await on a Promise that has been rejected, the execution of the code will stall just like in synchronous programming.

Here's another example:

{% runkit %}
// Using then & catch
require('request');
var request = require('request-promise-native');

request.get({"uri": "https://jsonplaceholder.typicode.com/todos/1",
             "method": "GET",
             "json": true})
           .then(function(body) { console.log(body) })
           .catch(console.log);

// Using async/await
async function getTodos() {
    let body = await request.get({"uri": "https://jsonplaceholder.typicode.com/todos/1",
                                  "method": "GET",
                                  "json": true});
    return body;
}

async function main() {
    let todos = await getTodos();
    console.log(todos);
}

main();
{% endrunkit %}

