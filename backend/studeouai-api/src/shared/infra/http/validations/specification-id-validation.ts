import Joi from '@hapi/joi';

const SpecificationIdValidation = {
  specifications_id: Joi.string().required(),
};

export default Joi.object(SpecificationIdValidation);
