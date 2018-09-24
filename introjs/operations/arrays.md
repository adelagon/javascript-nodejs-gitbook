# Array Operations

Arrays are collections of objects:

```javascript
let languages = ["javascript", "python", "c", "java", ...]
```

They can be accessed by specifying the **index**. Do take note that indexes start at 0 as the first item. On the example above if you want to get "javascript", you access it by: languages[0].

{% exercise %}
Given the array below, specify the indices of the 

{% initial %}
let languages = ["javascript", "python", "c", "java", "groovy"];

let groovy = 
let java = 
let javascript = 
let python = 
let c = 
{% solution %}
let languages = ["javascript", "python", "c", "java", "groovy"];

let groovy = 4
let java = 3
let javascript = 0
let python = 1
let c = 2
{% validation %}
assert(javascript === 0 && python === 1 && c === 2 && java === 3 && groovy === 4);
{% endexercise %}

## Looping through Arrays

Looping through Arrays can be done via traditional for-loop:

{% runkit %}
let languages = ["javascript", "python", "c", "java", "groovy"];

for (let i = 0; i &lt; languages.length ; i++) {
    console.log(languages[i]);
}
{% endrunkit %}

Or through the Array built-in method **.forEach** that follows this format:

```javascript
[].forEach(function (currentValue, index, arr) { statement})
```

The forEach method requires you to provide a function with the following parameters:

- currentValue - the value of the current element
- index - the current index (optional)
- arr - the array object itself (optional)

{% runkit %}
[0,1,2,3,4,5].forEach(function(s) { console.log(s) })
{% endrunkit %}

There's also another interesting option called **.map** which is similar to forEach but it also returns the an array of results of the function provided.

{% runkit %}
function plus10(val) {
    return val + 10;
}

[0,1,2,3,4,5].map(plus10);
{% endrunkit %}

This is pretty useful if you want to make operations on a given array.

{% exercise %}
Using the Array.map method, complete the function below that will return true

{% initial %}
function isOdd(val) {
    // Complete the function
}

let array = [0,1,2,3,4,5,6,7,8,9].map(); // Complete this statement

{% solution %}
function isOdd(val) {
    if (val % 2 === 1) {
        return true;
    } else {
        return false;
    }
}

let array = [0,1,2,3,4,5,6,7,8,9].map(isOdd);

{% validation %}
assert(array.toString() === [false, true, false, true, false, true, false, true, false, true].toString());
{% endexercise %}







