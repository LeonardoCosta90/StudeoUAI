import Joi from '@hapi/joi';

const getEmailValidation = {
  email: Joi.string().email().required(),
};

export default Joi.object(getEmailValidation);
