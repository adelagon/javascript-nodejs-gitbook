# String Operations

## Concatenation

Combinining strings can be done through "+" operator.

{% runkit %}
let first_name = "Juan";
let last_name = "Dela Cruz";
let name = first_name + " " + last_name;
console.log(name);

// You may also use the assignment operator
name += ", have a nice day!";
console.log(name);
{% endrunkit %}

## Length

You may use the **.length** attribute of the string object.

{% runkit %}
let name = "Juan Dela Cruz";
console.log("Juan Dela Cruz".length);
console.log(name.length);
{% endrunkit %}

## Splitting strings

On cases you want to split strings by a specific character, you may use the **.split()** method of the string object which returns an array.

{% runkit %}
let name = "Juan Dela Cruz";
console.log(name.split(" ")); // split by space " "
{% endrunkit %}

## More methods

The javascript string object has more methods such as **.split()** that was tackled in the previous section. Take some time to explore here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

Some cool examples are:

{% runkit %}
let string = "  Lorem ipsum dolor sit amet.  ";

// Trim whitespaces on both start and end of string
console.log(string.trim());

// Convert string to Uppercase
console.log(string.toUpperCase());

// Remove first 5 characters in string
console.log(string.slice(5));

// Get only the last 5 characters in string
console.log(string.slice(-5));

// Get the 5 chracters in string starting from the first character
console.log(string.substring(0, 5));

// You may also chain methods at will
console.log(string.trim().toUpperCase().substring(0, 5));
{% endrunkit %}



## Regular Expressions

Most of the time, you'll be asked to do a piece of code that should look for specific patterns in given string. Luckily, javascript already has a built-in String object methods for that such as: **.match()** and **.search()**

Regular expressions follow this format:

```javascript
/pattern/flags
```

Say for example, you need to get all strings in a given paragraph that could be a proper credit card number and email. Which has these following attributes

- Credit card numbers Should only contain numeric characters
- Credit card numbers Should only have a length of 16 characters 

{% runkit %}
let paragraph = `
username: alvinator
firstname: Alvin
lastname: Delagon
PAN1: 1234567812345678
PAN2: 4147123456789019
Mobile: 09191234567
Backup Mobile: 09171234567
Email: me@adelagon.com
`;

console.log("Card Numbers: " + paragraph.match(/[0-9]{16}/g));
console.log("Index of 1st Occurance: " + paragraph.match(/[0-9]{16}/g));
console.log("Emails: " + paragraph.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi));
{% endrunkit %}

The Card Number match returns any substrings that matches the regular expression. The regular expression above has three parts:

- **[0-9]** pertains to the range of characters that match should find. In this case it matches only strings from numbers 0 to 9.
- **{16}** pertains to the length of consecutive matched characters. In this case it will find consecutive strings of numbers 0 to 9 that has a length of 16.
- **/g** is a flag that pertains to global. It means it will continue searching even though it finds a match.

The subject about regular expressions is quite huge and is beyond the scope of this training. For more details make sure you take some time to visit the Regular Expression docs:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags

{% exercise %}
Create a regular expression that will count all occurances of vowel letters.

{% initial %}
let paragraph = "The quick brown fox jumps over the lazy dog"

let vowels = paragraph.match(Put answer here).length

{% solution %}
let paragraph = "The quick brown fox jumps over the lazy dog";

let vowels = paragraph.match(/[aeiou]/gi).length;
{% validation %}
assert(vowels === 11);
{% endexercise %}



