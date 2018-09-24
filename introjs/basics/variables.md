# Variables

Declaring variables in Javascript can be done in three ways:

{% runkit %}
var a = 1;
let b = 2;
c = "foo";
{% endrunkit %}

One way of displaying the contents of a variable is by using **console.log** function:

{% runkit %}
var a = 1;
let b = 2;
c = "foo";

console.log(a);
console.log(b);
console.log(c);
{% endrunkit %}

**[IMPORTANT NOTE]** The biggest difference between the two is that when you declare the variable with a "var" or "let" prefix, it enforces the scope of the variable within its execution context. When you don't use "var"  or "let", the scope of the variable is **global** meaning the variable can be accessed anywhere during the lifetime of the execution:

{% runkit %}
function x() {
  y = 1;   // Throws a ReferenceError in strict mode
  var z = 2;
}

x();

console.log(y); // logs "1" 
console.log(z); // Throws a ReferenceError: z is not defined outside x
{% endrunkit %}

## var vs let

It might be pretty confusing that between the two. They serve the same purpose in preventing you from creating accidental global variables. The key differences between the two are:

(1) var allows re-declaration while let doesn't.

{% runkit %}
var a = "foo";
var a = "bar";
let a = "baz";
{% endrunkit %}

(2) scope of a var variable is the entire enclosing function. Refer to: https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable-in-jav. This can be easiliy understood by this snippet:

{% runkit %}
{
  var a = 2;
}

{
  let b = 3;
}

console.log(a);
console.log(b); // will fail with ReferenceError as 'b' has been accessed outside its scope
{% endrunkit %}


## To "strict" or not to "strict"?

As you may have noticed, it is pretty easy for forget adding "var" and making your variables to have a global scope without your intentions. In ES5, "strict mode" has been introduced. One of the biggest effects on strict mode is to prevent this mistake. This can be turned on optionally:

```javascript
"use strict";
var a = 1;
var b = "foo";
```

I recommend that everyone turn this on as ES6 will have strict mode by default. For more reading about strict mode, [Click Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

> Do NOT create global variables unless you intend to.
>
> Your global variables (or functions) can overwrite window variables (or functions).
>
> Any function, including the window object, can overwrite your global variables and functions.

## Variable Declaration Standard?

We recommend to use **let** and **var** and **turn on strict mode** for safer coding. You may opt for other methods if only if deemed necessary.



