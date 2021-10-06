import Joi from '@hapi/joi';

const IdValidation = {
  id: Joi.string().required(),
};

export default Joi.object(IdValidation);
