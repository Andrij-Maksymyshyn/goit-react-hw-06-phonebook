import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container } from './App.styled';


function App() {
  const contacts = useSelector(({ contacts }) => contacts.items);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>

          <Filter />
          <ContactList />
         </>
      )}
    </Container>
  );
}

export default App;
