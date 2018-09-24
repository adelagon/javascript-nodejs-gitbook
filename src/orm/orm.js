let Sequelize = require('sequelize');
//let Authors = require('./models/authors');
//let Books = require('./models/books');

async function main() {
    let config = {
        host: "localhost",
        dialect: "mysql",
        database: "training",
        username: "dbuser",
        password: "p455w0rd_",

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    }

    sequelize = new Sequelize(config);

    // Check connection
    try {
        await sequelize.authenticate();
    } catch (e) {
        console.log(e);
    }

    let Authors = sequelize.import('./models/authors');
    let Books = sequelize.import('./models/books');

    // Querying All
    try {
        let authors = await Authors.findAll();
        authors.forEach(
            function (author) {
                console.log(author.first_name, author.last_name);
            });
    }
    catch (e) {
        console.log(e);
    }

    // Query Filtering
    try {
        let book = await Books.findOne({
            where: {
                title: "The Adventures of Tom Sawyer"
            }
        });
        console.log(book);
    }
    catch (e) {
        console.log(e);
    }

    // Making use of Associations
    Authors.hasMany(Books, {foreignKey: 'author_id'});
    try {
        let author = await Authors.findOne({
                where: {
                    first_name: "Mark",
                    last_name: "Twain"
                },
                include: [
                    { model: Books }
                ]
            });
        console.log(author.first_name, author.last_name, author.books);
    } catch (e) {
        console.log(e);
    }

    // Inserting
    try {
        var new_author = Authors.build({
            "first_name": "Alvin",
            "last_name": "Delagon"
        });
        await new_author.save()
    } catch (e) {
        console.log(e);
    }

    // Updating
    try {
        new_author.first_name = "Wella Marie"
        await new_author.save()
    } catch (e) {
        console.log(e);
    }

    // Deleting
    try {
        await new_author.destroy()
    } catch (e) {
        console.log(e);
    }

    sequelize.close();
}

main();


