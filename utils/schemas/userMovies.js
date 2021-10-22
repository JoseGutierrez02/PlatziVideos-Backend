const joi = require('@hapi/joi');

const mongoObjectIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const userMovieIdSchema = joi.object({
  userMovieId: mongoObjectIdSchema,
});

const createUserMovieSchema = joi.object({
  userId: mongoObjectIdSchema.required(),
  movieId: mongoObjectIdSchema.required(),
});

module.exports = {
  userMovieIdSchema,
  createUserMovieSchema,
};
