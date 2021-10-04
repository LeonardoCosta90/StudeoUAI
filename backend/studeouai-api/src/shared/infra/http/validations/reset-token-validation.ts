import Joi from '@hapi/joi';

const resetTokenValidation = {
  token: Joi.string().required(),
};

export default Joi.object(resetTokenValidation);
