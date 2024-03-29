const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', () => {
  describe('when recieves an entity and an action', () => {
    it('should return the respective message', () => {
      const result = buildMessage('movie', 'create');
      const expected = 'movie created';
      assert.strictEqual(result, expected);
    });
  });

  describe('when receives an entity and an action and is a list', () => {
    it('should return the respective message with the entity in plural', () => {
      const result = buildMessage('movie', 'list');
      const expected = 'movies listed';
      assert.strictEqual(result, expected);
    });
  });
});
