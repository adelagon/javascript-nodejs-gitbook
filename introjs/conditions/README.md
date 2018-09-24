# Conditions

## if-statement

The if-statement is easiest condition statement that follows this syntax:

```
if (condition) { do something... }
```

**[IMPORTANT NOTE]** As long the condition interprets to **true** any **non-null** value the <do something> is executed.

{% runkit %}
// conditions are met
if (true) { console.log("foo") }
if ("something") { console.log("bar") }

// conditions are not met
if (false) { console.log("abc") }
if (null) { console.log("xyz") }
{% endrunkit %}

And of course If-statements can be nested.

{% exercise %}
What should be the values of the variables 'a' & 'b' so that the 'c' will be equal to "Yes"?

{% initial %}
var a =
var b =
var c = null;

if (a === "foo") {
    if (b === "bar") {
        c = "Yes";
    }
    if (b === "xyz") {
        c = "No";
    }
}

{% solution %}
var a = "foo";
var b = "bar";
var c = null;

if (a === "foo") {
    if (b === "bar") {
        c = "Yes";
    }
    if (b === "xyz") {
        c = "No";
    }
}

{% validation %}
assert(c === "Yes");
{% endexercise %}



## else-statement

You may use the **else** and **else if** statement if you want to create multiple conditions. 

```
if (condition1) {
    // statement 1
} else if (condition 2) {
    // statement 2
} else if (condition N) {
    // statement N
} else (condition default) {
    // executes if all conditions was not met
}
```

For example:

{% runkit %}
let a = "foo";

if (a === "abc") {
    console.log("abc");
} else if (a === "xyz") {
    console.log("xyz");
} else {
    console.log("foo");
}
{% endrunkit %}

## Comparators and Chaining Conditions

Javascript supports the following comparators:

| Operator | What it does                   |
| -------- | ------------------------------ |
| ==       | equal to                       |
| ===      | equal to & equal type          |
| !=       | not equal to                   |
| !===     | not equal to or not equal type |
| >        | greater than                   |
| <        | less than                      |
| >=       | greater than or equal to       |
| <=       | less than or equal to          |

You may also chain conditions **and (&&)** and **or (||)**. Some examples:

{% runkit %}
let age = "18";

if (age < 18) {
    console.log("minor");
} else if (age >= 18 && age < 60) {
    console.log("legal");
} else {
    console.log("senior");
}
{% endrunkit %}

{% exercise %}
Add the second condition below so that the status will be "legal" if the age is greater than or equal to 18 and less than 65?

{% initial %}
let age = 34;
let status = null;

if (age < 18) {
    status = "minor";
} else if (place your Answer here...) {
    status = "legal";
} else {
    status = "senior";
}

{% solution %}
let age = 34;
let status = null;

if (age < 18) {
    status = "minor";
} else if (age >= 18 && age < 65) {
    status = "legal";
} else {
    status = "senior";
}

{% validation %}
assert(status === "legal");
{% endexercise %}





