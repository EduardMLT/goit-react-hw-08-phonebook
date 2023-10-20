import { ErrorMessage, Formik } from 'formik';
import {
  Block,
  StyledField,
  StyledForm,
  ButtonRegForm,
} from './RegistorForm.styled';

import { useDispatch } from 'react-redux';
import { userRegistration } from 'redux/auth/operations';
import * as Yup from 'yup';

const schema = Yup.object({
  name: Yup.string().required('Must be filled'),
  email: Yup.string().email().required('Must be filled'),
  password: Yup.string().min(8).required('Must be filled'),
});

export const RegistorForm = () => {
  const dispatch = useDispatch();

  

  return (
    <Block>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          dispatch(userRegistration({ ...values }));
        }}
      >
        <StyledForm>
          <label>Name</label>
          <StyledField type="text" name="name" placeholder="Enter your name" />
          <ErrorMessage name="name" component="div" />

          <label>Email</label>
          <StyledField
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="div" />

          <label>Password</label>
          <StyledField
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="div" />

          <ButtonRegForm type="submit">Registration</ButtonRegForm>
        </StyledForm>
      </Formik>
    </Block>
  );
};
