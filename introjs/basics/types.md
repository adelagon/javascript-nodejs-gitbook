# Data Types

The common data types in javascript are are:

- **Numbers** 

  - **Float**
  - **Integer**

  [IMPORTANT NOTE]  javascript doesn't have float and integer primitives. In javascript numbers are treated as **double**, ie. 1 and 1.0 is treated as a same value:

  {% runkit %}
  1 === 1.0
  {% endrunkit %}

- **String**: arrays of characters

- **Boolean**: either **true** or **false**

- **Arrays**: a collection of objects that can be any data type

- **Objects**: a collection of values in dictonary format (key/value) that can be any data type.

- **null**: an "empty" representation.

- **undefined**: the undefined value is obtained whenever an undeclared variable is accessed.

Here's some interactive examples:

{% runkit %}
let float = 3.14;
let integer = 100;
let string = "foobar";
let boolean = true;
let arrays = [1, 2.5, "three", boolean];
let objects = {"first_name": "Juan", "last_name": "Dela Cruz", "age": 25};
let empty = null;
console.log(typeof(float));
{% endrunkit %}

**[IMPORTANT NOTE]** Javascript is a "loosely-typed" language which means that you don't have to declare the Data Type when creating variables. One way to know what Data Type of a variable during runtime is using the **typeof** function just like on the last line above.

{% exercise %} Traversing Objects 1: Create a new variable named "x" and store the value of the of the second object in the provided array:{% initial %} let array = [1, 2.5, "three", false]; {% solution %} let x = array[1]; {% validation %} assert(x === 2.5); {% endexercise %}


{% exercise %} Traversing Objects 2: Create a new variable named "x" and store the value of the "first_name" on the provided objects variables {% initial %} let objects = {"first_name": "Juan", "last_name": "Dela Cruz", "age": 25}; {% solution %} let x = objects.first_name; {% validation %} assert(x === "Juan"); {% endexercise %}

