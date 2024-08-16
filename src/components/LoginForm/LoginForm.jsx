import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label>
          Email
          <Field type="email" name="email" required />
        </label>
        <label>
          Password
          <Field type="password" name="password" required />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
