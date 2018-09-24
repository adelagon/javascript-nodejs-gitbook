# Number Operations

## Basic Operations

```javascript
a = b + c; // addition
a = b - c; // subtraction
a = b * c; // multiplication
a = b / c; // division
a = b % c; // modulus (division remainder)
```

You can also group expressions by parenthesis:

```javascript
a = ((b + c) - (d - e))/100
```

{% exercise %}
Given the initial values of variables. Create a variable 'x' which will be the sum of 'a' & 'b' multiplied by 3.14 and divided by c;

{% initial %}
let a = 10;
let b = 25;
let c = 6.022;

let x = 

{% solution %}
let a = 10;
let b = 25;
let c = 6.022;

let x = ((a + b) * 3.14) / c;
{% validation %}
assert(x === 18.249750913317836);
{% endexercise %}



## Advanced Operations

```javascript
// increment
let a = 5;
let b = a++; // increment after assigning to b
let c = ++a; // increment before assigning to c

// decrement
let a = 5;
let b = a--; // decrement after assigning to b
let c = --a; // increment before assigning to c

// assignment operations
let x = 5;
let x += 5; // add 5 to the value of x. (x = x + 5)
let x -= 5; // subtract 5 to the value of x. (x = x - 5)
let x *= 5; // multiply 5 to the value of x. (x = x * 5)
let x /= 5; // divide 5 to the value of x. (x = x / 5)
let x %= 5; // division remainder of 5 to the value of x (x = x % 5)
```

{% exercise %}
Put the value of 'b' on 'x' and the value of 'c' on 'y'

{% initial %}
let a = 10;
let b = a++;
let c = ++a;

let x =
let y =

{% solution %}
let a = 10;
let b = a++;
let c = ++a;

let x = 10;
let y = 12;

{% validation %}
assert(x === b && y === c);
{% endexercise %}