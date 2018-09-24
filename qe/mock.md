# Creating API Mockups

On some cases where you want to develop automated testing scripts, the API's to be tested is not available yet, blocking your progress. This section will teach you how to create your own RESTFul API server that will serve as a mock-server of a future API.

## json-server

**json-server** (https://github.com/typicode/jsonplaceholder) is one of the popular mock servers available in node.js. It is very possible that you can create your own mock server writing only very little code:

To install do:

```bash
npm install -g json-server
```

Go to **src/mock** folder and you should see a file named **db.json** with the following contents:

```json
{
    "authors": [
        {
            "id": 1,
            "first_name": "Mark", 
            "last_name": "Twain"
        },
        {
            "id": 2,
            "first_name": "Leo", 
            "last_name": "Tolstoy"
        },
        {
            "id": 3,
            "first_name": "Charles",
            "last_name": "Dickens"
        },
        {
            "id": 4,
            "first_name": "Jane",
            "last_name": "Austen"
        },
        {
            "id": 5,
            "first_name": "F. Scott",
            "last_name": "Fitzgerald"
        }
    ],

    "books": [
        {
            "id": 1,
            "title": "The Adventures of Tom Sawyer",
            "author_id": 1,
            "copyright": 1876
        },
        {
            "id": 2,
            "title": "Adventures of Hucklyberry Finn",
            "author_id": 1,
            "copyright": 1884
        },
        {
            "id": 3,
            "title": "War and Peace",
            "author_id": 2,
            "copyright": 1869
        },
        {
            "id": 4,
            "title": "A Christmas Carol",
            "author_id": 3,
            "copyright": 1843
        },
        {
            "id": 5,
            "title": "A Tale of Two Cities",
            "author_id": 3,
            "copyright": 1859
        },
        {
            "id": 6,
            "title": "Sense and Sensibility",
            "author_id": 4,
            "copyright": 1811
        },
        {
            "id": 7,
            "title": "The Great Gatsby",
            "author_id": 5,
            "copyright": 1925
        }
    ]
}
```

json-server will automatically create a API server that will expose a CRUD interface on authors and books resources. To run json-server just do:

```bash
json-server --watch db.json
```

This will create an API server running on http://localhost:3000/

## Making Custom Routes

On cases where you want to reate a custom route/url for your mock api, you can add a file called **routes.js** that will contain the custom routes. For example we want to make the api url to prefix **/api/v1/***:

```javascript
{
    "/api/v1/*": "/$1"
}
```

To command json-server to use the custom route do this:

```bash
json-server --routes routes.js db.json
```

## Creating Mock Data

Another useful tool for creating mocks is **faker** (https://github.com/Marak/Faker.js). You can use faker to create mock data for your json-server. You can also use this to generate fake input when you are doing automated testing. To install:

```bash
npm install faker
```

If you go to **src/mock** folder, you should see a file named **fakedata.js**

```javascript
let faker = require("faker");

function generateBooks() {
    let books = [];
    for (let id = 1; id < 50; id++) {
        books.push({
            id: id,
            title: faker.random.words(),
            copyright: faker.date.past().getFullYear(),
            author_id: faker.random.number({"min": 1, "max": 50})
        });
    }
    return books;;
}

function generateAuthors() {
    let authors = [];
    for (let id = 1; id < 50; id++) {
        authors.push({
            id: id,
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName()
        });
    }
    return authors;
}

function generateFakeData() {
    return {
        "books": generateBooks(),
        "authors": generateAuthors()
    }
}

module.exports = generateFakeData;
```

The code above automatically create fake data for authors and books. You can ask json-server to use this instead of using db.json.

```bash
json-server fakedata.js --routes routes.js
```

