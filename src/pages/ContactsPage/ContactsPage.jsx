import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import styles from './ContactsPage.module.css';
import { fetchContacts } from '../../redux/contacts/operations'; 
import { useDispatch } from 'react-redux'; 
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(fetchContacts()); 
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <h1>Contacts</h1>
            <ContactForm />

            <SearchBox />
            <ContactList />
        </div>
    );
};

export default ContactsPage;
