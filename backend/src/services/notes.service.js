const { Note } = require("../models");

class Service {
  async getNotes() {
    return await Note.find();
  }

  async getNote(id) {
    return await Note.findById(id);
  }

  async createNote(body) {
    return await Note.create({ ...body });
  }

  async updateNote(id, body) {
    return await Note.findByIdAndUpdate(id, body, {
      returnOriginal: false,
    });
  }

  async deleteNote(id) {
    return await Note.findByIdAndDelete(id);
  }
}

module.exports = Service;
