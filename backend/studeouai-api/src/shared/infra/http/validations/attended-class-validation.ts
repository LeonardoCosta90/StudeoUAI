import Joi from '@hapi/joi';

const attendedClassValidation = {
  class_id: Joi.string().required(),
  user_id: Joi.string().required(),
};

export default Joi.object(attendedClassValidation);
