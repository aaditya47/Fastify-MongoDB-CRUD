const Note = require('../models/note');

module.exports = {
    create: async (request, reply) => {
        try {
            const note = request.body;
            const newNote = await Note.create(note);
            reply.code(201).send(newNote);
        } catch (e) {
            reply.code(500).send(e);
        }
    },

    fetch: async (request, reply) => {
        try {
            const notes = await Note.find({});
            reply.code(200).send(notes);
        } catch (e) {
            reply.code(500).send(e);
        }
    },

    get: async (request, reply) => {
        try {
            const noteId = request.params.id;
            const note = await Note.findById(noteId);
            reply.code(200).send(note);
        } catch (e) {
            reply.code(500).send(e);
        }
    },

    update: async (request, reply) => {
        try {
            const noteId = request.params.id;
            const updates = request.body;
            await Note.findByIdAndUpdate(noteId, updates);
            const noteToUpdate = await Note.findById(noteId);
            reply.code(200).send({ data: noteToUpdate });
        } catch (e) {
            reply.code(500).send(e);
        }
    },

    delete: async (request, reply) => {
        try {
            const noteId = request.params.id;
            const noteToDelete = await Note.findById(noteId);
            await Note.findByIdAndDelete(noteId);
            reply.code(200).send({ data: noteToDelete });
        } catch (e) {
            reply.code(500).send(e);
        }
    },
};