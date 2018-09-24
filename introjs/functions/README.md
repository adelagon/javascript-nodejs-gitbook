# Functions

Functions are quite essential in most of software engineering in terms to code reduce/reuse, abstraction, and organization. 

Declaring functions in javascript is a simple as this:

```javascript
function name(args1, args2, argsN) {
}
```

Functions may or may not have a name depending on its usage. 

{% runkit %}
function plus10(val) {
    return val + 10;
}

[0,1,2,3,4,5].map(plus10);
[0,1,2,3,4,5].map(function(val) { return val + 10 });
{% endrunkit %}

You don't need to name functions if they are injected directly into context. The example above demonstrates this.

Functions may or may not have arguments. Arguments are lists of input to the function. There's two types of arguments: a Required argument and an Optional argument. Optional arguments have default values:

```javascript
function myFunction(param1, param2 = 1) {
}
```

Optional arguments are useful if you want to have a default behavior of your function that can be overriden by its users for example:

{% runkit %}
function maskPAN(val, mask = "*") {
    return val.replace(/[0-9]{16}/g, mask.repeat(16));
}

console.log(maskPAN("PAN1: 1234567812345678"));
console.log(maskPAN("PAN1: 1234567812345678", "+"));
{% endrunkit %}

Adding a second argument which is the mask character overrides the default masking character "*".

{% exercise %}
Create a function named isEmail that returns true if the given string is in a valid email format. You may use this regex: /([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi

{% initial %}
// Create your function here.

let email = isEmail("me@adelagon.com");

{% solution %}
function isEmail(val) {
    if (val.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi).length === 1) {
        return true;
    } else {
        return false;
    }
}

let email = isEmail("me@adelagon.com");

{% validation %}
assert(email === true);
{% endexercise %}