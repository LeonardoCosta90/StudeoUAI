import Joi from '@hapi/joi';

const resetPassValidation = {
  password: Joi.string().required(),
};

export default Joi.object(resetPassValidation);
