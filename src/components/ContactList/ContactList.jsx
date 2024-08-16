import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;
