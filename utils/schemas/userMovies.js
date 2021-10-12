const joi = require('@hapi/joi');

const { movieIdSchema } = require('./movies');
const { userIdSchema } = require('./users');

const userMovieIdSchema = joi.object({
  userIdSchema: joi.string().regex(/^[0-9a-fA-F]{24}$/),
});

const createUserMovieSchema = joi.object({
  userId: userIdSchema,
  movieId: movieIdSchema,
});

module.exports = {
  userMovieIdSchema,
  createUserMovieSchema,
};
