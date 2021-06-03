const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock } = require('../utils/mocks/movies');
const MoviesServiceMock = require('../utils/mocks/services/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', () => {
  const route = proxyquire('../routes/movies', {
    '../services/movies': MoviesServiceMock,
  });
  const request = testServer(route);

  describe('GET /movies', () => {
    it('should respond with status 200', (done) => {
      request.get('/api/movies').expect(200, done);
    });

    it('should respond with the list of movies', (done) => {
      request.get('/api/movies').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock,
          message: 'movies listed',
        });

        done();
      });
    });
  });

  describe('GET /movies/movieId', () => {
    it('should respond with status 200', (done) => {
      request.get('/api/movies/507f191e810c19729de860ea').expect(200, done);
    });

    it('should respond with one movie', (done) => {
      request.get('/api/movies/507f191e810c19729de860ea').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock[0],
          message: 'movie retrieved',
        });

        done();
      });
    });
  });

  describe('POST /movies', () => {
    it('should respond with status 201', (done) => {
      request.post('/api/movies').expect(201, done);
    });

    it('should respond with an id', (done) => {
      request.post('/api/movies').send({title: 'aaaa'}).end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock[0].id,
          message: 'movie created',
        });

        done();
      });
    });
  });

  describe('PUT /movies/movieId', () => {
    it('should respond with status 200', (done) => {
      request.put('/api/movies/507f191e810c19729de860ea').expect(200, done);
    });

    it('should respond with an id', (done) => {
      request.put('/api/movies/507f191e810c19729de860ea').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock[0].id,
          message: 'movie updated',
        });

        done();
      });
    });
  });

  describe('DELETE /movies/movieId', () => {
    it('should respond with status 200', (done) => {
      request.delete('/api/movies/507f191e810c19729de860ea').expect(200, done);
    });

    it('should respond with an id', (done) => {
      request.delete('/api/movies/507f191e810c19729de860ea').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          data: moviesMock[0].id,
          message: 'movie deleted',
        });

        done();
      });
    });
  });
});