import Joi from '@hapi/joi';

const CreateSpecificationValidation = {
  description: Joi.string().required(),
  name: Joi.string().required(),
};

export default Joi.object(CreateSpecificationValidation);
