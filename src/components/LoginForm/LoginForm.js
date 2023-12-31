import { ErrorMessage, Formik } from 'formik';
import {
  Block,
  StyledField,
  StyledForm,
  ButtonLoginForm,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { userLogIn } from 'redux/auth/operations';

const schema = Yup.object({
  email: Yup.string().email().required('Must be filled'),
  password: Yup.string().min(8).required('Must be filled'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Block>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          dispatch(userLogIn({ ...values }));
        }}
      >
        <StyledForm>
          <label>Email</label>
          <StyledField
            type="email"
            name="email"
            placeholder="Enter your e-mail"
          />
          <ErrorMessage name="email" component="div" />

          <label>Password</label>
          <StyledField
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="div" />

          <ButtonLoginForm type="submit">Log In</ButtonLoginForm>
        </StyledForm>
      </Formik>
    </Block>
  );
};
