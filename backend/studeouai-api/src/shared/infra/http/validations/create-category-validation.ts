import Joi from '@hapi/joi';

const createCategoryValidation = {
  name: Joi.string().required(),
  description: Joi.string().required(),
};

export default Joi.object(createCategoryValidation);
