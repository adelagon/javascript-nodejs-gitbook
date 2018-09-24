# Loops

## for loop

This is the most common loop functions that follows this syntax:

```javascript
for(init condition; stop condition; iterator) {
    <code block>
}
```

There's three parts of the for loop:

- **init condition** - is where you specify the initial values, this is executed only once and before the code block is executed.
- **stop condition** - the loop will stop once this condition is met.
- **iterator** - is where you make changes that affects the iteration, this is executed every loop and after the block is executed.

{% runkit %}
// print 1 to 10
for(let i = 1; i &lt;= 10; i = i + 1){
    console.log(i);
}
{% endrunkit %}

## while loop

While can be used to execute a block of code as long as the condition is true:

```javascript
while(condition) {
    <code block>
}
```

For example:

{% runkit %}
// print 1 to 10
let i = 1;
while (i &lt; 10) {
    console.log(i);
    i = i + 1;
}
{% endrunkit %}

# do while loop

Is pretty similar to while loop except that the code block is executed before the condition is interpreted. 

```javascript
do {
    code block
} while(condition)
```

**[IMPORTANT NOTE]** even though the condition is false, the code block is still executed once. 

{% runkit %}
// print 1 to 10
let i = 1;
do {
    console.log(i);
    i = i + 1;
} while (i < 10);
{% endrunkit %}

{% exercise %}
Given the initial values if variables 'i' and 'v'. Using any kind of loop ten times and iterate 'i' by 1. For every loop add the value of 'i' to the current value of 'v'. Expected value of 'v' after the loop stops should be 55 = 1+2+3+4+5+6+7+8+9+10.

{% initial %}
let i = 0;
let v = 0;

place your loop here...

{% solution %}
let i = 0;
let v = 0;
do {
    v = v + i;
    i = i + 1;
} while (i &lt;= 10);

{% validation %}
assert(v === 55);
{% endexercise %}