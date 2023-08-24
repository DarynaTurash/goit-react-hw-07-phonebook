import  { React, useEffect } from 'react';
import { ContactList } from './contactList/contactList';
import { ContactForm } from './contactForm/contactForm';
import { Layout } from './layout/layout';
import { Filter } from './filter/filter';
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { Loader } from './loader/loader';


export const App = () => {
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector(getContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

return (
    <Layout>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    {isLoading && <Loader />}
    {items && !isLoading && <ContactList />}
    {error && <p>Error</p>}
    </Layout>
    );
}
