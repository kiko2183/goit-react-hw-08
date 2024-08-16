import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit" className={css.button}>Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
