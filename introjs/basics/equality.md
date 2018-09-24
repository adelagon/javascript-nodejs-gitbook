# Equality

* "=" is for assigning variables
* "==" is used to determine if the values are equal
* "===" is used to determine if the values are equal and has the same data type

{% runkit %}
let a = 1; // assigns 1 to variable a
1 == 1;    // true
1 == "1";  // true
1 === 1;   // true
1 === "1"; // false
{% endrunkit %}

**[IMPORTANT NOTE]** it is always safer to use the '===' equality operator most of the time. 