import { celebrate, Joi, Segments } from 'celebrate';

const getUserValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
});

export default getUserValidation;
