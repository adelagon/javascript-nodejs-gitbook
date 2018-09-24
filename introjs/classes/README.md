# Classes

Classes are essential in software development. 

## Defining Classes

ES6 introduced an elegant way of defining classes. For this training, we will be basing on this. If you want to see the old ways of defining classes, you may refer here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

Defining a class looks like this:

```javascript
class Car {
    constructor(params, paramsN, ...) {
        this.params = params;
        this.paramsN = paramsN;
    }
}
```

The **constructor** is a an optional method that is executed whenever a the object is created from the Car class. Usually this is where to set the initial values of the class properties. Here's an example:

{% runkit %}
class Car {
    constructor(manufacturer, type, model, year, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.color = color
    }

    print() {
        console.log(`
        Manufacturer: ${this.manufacturer}
        Model: ${this.model}
        Year: ${this.year}
        Color: ${this.color}
        `)
    }
    
    honk() {
        console.log("honk! honk!");
    }
}
{% endrunkit %}

## Instantiating Classes

You can instantiate a new object class using the **new** keyword.

{% runkit %}
class Car {
    constructor(manufacturer, model, year, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.color = color
    }

    print() {
        console.log(`
        Manufacturer: ${this.manufacturer}
        Model: ${this.model}
        Year: ${this.year}
        Color: ${this.color}
        `)
    }
    
    honk() {
        console.log("honk! honk!");
    }
}

let car = new Car("Mitsubishi", "Lancer EX", 2013, "black");
car;
{% endrunkit %}



## Extending Classes

One key feature in object-oriented programming is the ability to extend (or subclass) an existing object in order to add/override properties and methods. This is done by using the **extends** keyword. The example below demostrates this where a new class named **SUV** extended the base class **Car**.

{% runkit %}
class Car {
    constructor(manufacturer, type, model, year, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    print() {
        console.log(`
        Manufacturer: ${this.manufacturer}
        Model: ${this.model}
        Year: ${this.year}
        Color: ${this.color}
        `);
    }
    
    honk() {
        console.log("...");
    }
}


class SUV extends Car {
    constructor(manufacturer, type, model, year, color, engine_type) {
        super(manufacturer, type, model, year, color);
        this.body_type = "suv";
        this.engine_type = engine_type;
    }
    
    honk() { // overrides the honk() method from Car
        console.log("honk! honk!");
    }
    
    orig_honk() { // exposes the original honk() method from Car
        super.honk();
    }
}

let car = new Car("Mitsubishi",  "Lancer EX", 2013, "black");
car.honk();

let suv = new SUV("Mitsubishi",  "Monterosport", 2017, "dark blue", "diesel");
suv.honk();
suv.orig_honk();
{% endrunkit %}

You might be wondering what is the **super()** keyword is for. Since the new SUV class requires additional parameters (ie. engine_type) in its constructor. You need to call the contructor of SUV's base class in order to pass the Car parameters to it. You may also use super within the extending class to refer to the base class properties or methods (see. orig_honk function).



