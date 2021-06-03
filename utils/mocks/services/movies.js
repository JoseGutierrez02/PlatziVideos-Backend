const { moviesMock } = require('../movies');

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async getMovie() {
    return Promise.resolve(moviesMock[0]);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0].id);
  }

  async updateMovie() {
    return Promise.resolve(moviesMock[0].id);
  }

  async deleteMovie() {
    return Promise.resolve(moviesMock[0].id);
  }
}

module.exports = MoviesServiceMock;
