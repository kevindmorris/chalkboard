const { NotesService } = require("../services");

const service = new NotesService();

class Controller {
  async getNotes(req, res) {
    try {
      const response = await service.getNotes();
      return res.json(response);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  async getNote(req, res) {
    try {
      const { id } = req.params;
      const response = await service.getNote(id);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  async createNote(req, res) {
    try {
      const response = await service.createNote(req.body);
      return res.status(201).json(response);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async updateNote(req, res) {
    try {
      const { id } = req.params;
      const response = await service.updateNote(id, req.body);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  async deleteNote(req, res) {
    try {
      const { id } = req.params;
      const response = await service.deleteNote(id);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}

module.exports = Controller;
