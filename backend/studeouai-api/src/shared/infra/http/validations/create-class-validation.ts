import Joi from '@hapi/joi';

const createClassValidation = {
  category_id: Joi.string().required(),
  description: Joi.string().required(),
  name: Joi.string().required(),
};

export default Joi.object(createClassValidation);
