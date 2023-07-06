import * as yup from 'yup';

export const courseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  places_limit: yup.number().integer().required(),
  company_id: yup.string().nullable(),
});
