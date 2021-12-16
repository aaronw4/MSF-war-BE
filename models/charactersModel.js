const db = require('../data/db.config')

function getCharacters() {
    return db('characters')
};

function add(post) {
    return db('characters')
        .insert(post)
};

function remove(id) {
    return db('characters')
        .where({id})
        .delete()
}

module.exports = {
    getCharacters,
    add,
    remove
}