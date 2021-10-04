import Joi from '@hapi/joi';

const getUserValidation = {
  id: Joi.string().required(),
};

export default Joi.object(getUserValidation);
