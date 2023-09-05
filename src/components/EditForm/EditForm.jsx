import PropTypes from 'prop-types';
import React from 'react';
import { HiUser } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import { Formik, ErrorMessage } from 'formik';
// import { object, string } from 'yup';
import {
  EditForm,
  EditInput,
  EditLabel,
  Error,
  Wrapper,
} from './EditForm.styled';

// const phoneRegExp =
//   /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

// let userValidSchema = object({
//   number: string()
//     .matches(phoneRegExp, 'Phone number is not valid!')
//     .required(),
// });

export const ChangeForm = ({ name, number, onEditContact, children }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    onEditContact(name, number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name, number }}
    //   validationSchema={userValidSchema}
      onSubmit={handleSubmit}
    >
      <EditForm autoComplete='off'>
        <Wrapper>
          <EditLabel>
            <HiUser fill='plum' />
            <EditInput
              type='text'
              name='name'
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrorMessage component={Error} name='name' />
          </EditLabel>
          <EditLabel>
            <ImPhone fill='plum' />
            <EditInput
              type='tel'
              name='number'
              title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            />
            <ErrorMessage component={Error} name='number' />
          </EditLabel>
        </Wrapper>
        {children}
      </EditForm>
    </Formik>
  );
};

ChangeForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.node,
  onEditContact: PropTypes.func.isRequired,
};

// export default ChangeForm;