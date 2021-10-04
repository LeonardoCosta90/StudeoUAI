import Joi from '@hapi/joi';

const createUserValidation = {
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export default Joi.object(createUserValidation);
