const db = require('../data/db.config')

function getCharacters() {
    return db('characters')
};

function findById(id) {
    return db('characters')
        .where({id})
};

function add(post) {
    return db('characters')
        .insert(post)
};

function update(changes, id) {
    return db('characters')
        .where({id})
        .update(changes)
}

function remove(id) {
    return db('characters')
        .where({id})
        .delete()
};

module.exports = {
    getCharacters,
    findById,
    add,
    update,
    remove
};