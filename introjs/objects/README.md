# Objects

As you may have noticed in Javascript there are only few primitive data types: **Number**, **Strings**, **Boolean**, **null**, and **undefined**. Anything else is considered an object. Objects are characterized by having property Key and Values.

As a QE, you'll be dealing with a lot of JSON objects specially when you are testing RESTFul API's. So it is imperative that you understand on how to work with objects.

## Accessing Objects

Object properties often accessed by **dot notation** or **bracket notation**:

{% runkit %}
let name = {"first_name": "Juan", "last_name": "Dela Cruz"};
typeof(name);
console.log(name.first_name); // dot notation
console.log(name["last_name"]); // bracket notation
console["log"]("Hello, world!"); // console is an object too, you can use bracket notation when accessing its built-in methods.
{% endrunkit %}

**[IMPORTANT NOTE]** it is often recommended to use dot notation instead. It is easier to type and read.

Object properties may also be nested. In order to access them, you just have to do a chained dot notation.

{% runkit %}
let user = {"name": {
                "first_name": "Juan",
                "last_name": "Dela Cruz"},
            "age": 26,
            "ids": [
                "sss",
                "postal",
                "voter's"]
            };

console.log(user.name.first_name);
console.log(user.ids);
console.log(user.ids[0]);
{% endrunkit %}

## Creating Objects

Objects can just be easily created in these ways:

{% runkit %}
// Literal Method
let user = {};
user.first_name = "Juan";
user.last_name = "Dela Cruz";

// or
let another_user = {"first_name": "Juan", "last_name": "Dela Cruz"};
{% endrunkit %}

Objects may also contain methods as well:

{% runkit %}
let user = {"name": {
                "first_name": "Juan",
                "last_name": "Dela Cruz"},
            "age": 26,
            "ids": [
                "sss",
                "postal",
                "voter's"],
            "printName": function() { console.log(this.name.first_name + " " + this.name.last_name) }
            };

user.printName();
{% endrunkit %}

Do take note the the **this** keyword refers to the object itself.

## Changing Objects

Objects can be changed during run time. You can assign new values to existing properties or even add/delete properties.

{% runkit %}
let user = {"name": {
                "first_name": "Juan",
                "last_name": "Dela Cruz"},
            "age": 26,
            "ids": [
                "sss",
                "postal",
                "voter's"]
            };

// Add new property
user.likes = ["adobo", "tinapa"];

// Change property
user.name.first_name = "Juliana";

// Delete property
delete user.ids;
user;
{% endrunkit %}

## Referencing Objects

**[IMPORTANT NOTE]** Objects are never copied. If you assign an object to a new variable, the new variable will only store the reference on it. . This is coined as **Pass by reference**.

{% runkit %}
let obj = {"first_name": "Juan", "last_name": "Dela Cruz"};
// Assign obj to a new variable
let new_obj = obj;

// Now let's try to change the original obj
obj.first_name = "William";

// You might assume that the another_obj still has the original "first_name" value of "Juan"
console.log("obj: " + obj.first_name + " " + obj.last_name);
console.log("new_obj: " + new_obj.first_name + " " + new_obj.last_name);

// This also applies to functions too
function changeLastName(user, value) {
    user.last_name = value;
}

changeLastName(new_obj, "Jennings");

// You might assume that the another_obj still has the original "first_name" value of "Juan"
console.log("obj: " + obj.first_name + " " + obj.last_name);
console.log("new_obj: " + new_obj.first_name + " " + new_obj.last_name);

{% endrunkit %}

## Object prototype

All objects in javascript inherits properties from **Object.prototype** as documented here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype. Built-in methods such as **.toString()** are inherited from this:

{% runkit %}
let obj = {"first_name": "Juan", "last_name": "Dela Cruz"};
obj.toString();
obj;
{% endrunkit %}

We will discuss this in more detail in the Classes section.



