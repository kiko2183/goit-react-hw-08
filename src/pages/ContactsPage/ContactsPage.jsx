import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import styles from './ContactsPage.module.css';
import { fetchContacts } from '../../redux/contacts/operations'; // Імпортуйте fetchContacts
import { useDispatch } from 'react-redux'; // Імпортуйте useDispatch для виклику fetchContacts

const ContactsPage = () => {
    const dispatch = useDispatch(); // Отримайте dispatch функцію з useDispatch

    useEffect(() => {
        dispatch(fetchContacts()); // Викликайте fetchContacts під час завантаження компонента
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <h1>Contacts</h1>
            <ContactForm />
            <Filter />
            <ContactList />
        </div>
    );
};

export default ContactsPage;
