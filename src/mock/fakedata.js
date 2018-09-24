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

