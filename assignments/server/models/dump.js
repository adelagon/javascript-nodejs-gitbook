let models = require("./index");

async function main() {
    // Initialize
    await models.sequelize.sync({force: true});
    await models.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await models.Books.destroy({truncate: true, cascade: true});
    await models.Authors.destroy({truncate: true, cascade: true});
    await models.Publishers.destroy({truncate: true});
    await models.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");

    // Create Authors
    let a1 = await models.Authors.build({
        "first_name": "Charles",
        "last_name": "Dickens"
    }).save();
    let a2 = await models.Authors.build({
        "first_name": "F. Scott",
        "last_name": "Fitzgerald"
    }).save();
    let a3 = await models.Authors.build({
        "first_name": "Mark",
        "last_name": "Twain"
    }).save();
    let a4 = await models.Authors.build({
        "first_name": "Jane",
        "last_name": "Austen"
    }).save();
    let a5 = await models.Authors.build({
        "first_name": "H.G.",
        "last_name": "Wells"
    }).save();

    // Create Publishers
    let p1 = await models.Publishers.build({
        "name": "Penguin Publishing",
        "email": "sales@penguin.com",
        "website": "http://penguin.com"
    }).save();
    let p2 = await models.Publishers.build({
        "name": "Simon & Schuster",
        "email": "sales@simonandschuster.com",
        "website": "http://www.simonandschuster.com"
    }).save();

    // Create Books
    await models.Books.build({
        "title": "A Chrismas Carol",
        "copyright": 1844,
        "author_id": a1.id,
        "publisher_id": p1.id
    }).save();
    await models.Books.build({
        "title": "A Tale of Two Cities",
        "copyright": 1859,
        "author_id": a1.id,
        "publisher_id": p2.id
    }).save();
    await models.Books.build({
        "title": "The Great Gatsby",
        "copyright": 1925,
        "author_id": a2.id,
        "publisher_id": p2.id
    }).save();
    await models.Books.build({
        "title": "Sense & Sensibiity",
        "copyright": 1877,
        "author_id": a3.id,
        "publisher_id": p1.id
    }).save();
    await models.Books.build({
        "title": "War of the Worlds",
        "copyright": 1931,
        "author_id": a4.id,
        "publisher_id": p2.id
    }).save();
    await models.Books.build({
        "title": "The Time Machine",
        "copyright": 1940,
        "author_id": a1.id,
        "publisher_id": p2.id
    }).save();

    models.sequelize.close();

}

main();