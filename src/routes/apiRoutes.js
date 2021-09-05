const controller = require('../controllers/apiController');

module.exports = (app) => {
    // POST /create : creates a note
    app.post('/create', controller.create);

    // GET /read : returns a list of all notes from the database
    app.get('/read', controller.fetch);

    // GET /read/:id : returns a note from the database queried by id
    app.get('/read/:id', controller.get);

    // PUT /update/:id : updates a note in the database queried by id
    app.put('/update/:id', controller.update);

    // DELETE /delete/:id : deletes a note from the database by id
    app.delete('/delete/:id', controller.delete);
};