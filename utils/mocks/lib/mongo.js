const sinon = require('sinon');

const { moviesMock } = require('../movies');

const getAllStub = sinon.stub().resolves(moviesMock);
const getStub = sinon.stub().resolves(moviesMock[0]);
const createStub = sinon.stub().resolves(moviesMock[0].id);
const updateStub = sinon.stub().resolves(moviesMock[0].id);
const deleteStub = sinon.stub().resolves(moviesMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  get(collection, id) {
    return getStub(collection, id);
  }

  create(collection, data) {
    return createStub(collection, data);
  }

  update(collection, id, data) {
    return updateStub(collection, id, data);
  }

  delete(collection, id) {
    return deleteStub(collection, id);
  }
}

module.exports = {
  getAllStub,
  getStub,
  createStub,
  updateStub,
  deleteStub,
  MongoLibMock,
};
