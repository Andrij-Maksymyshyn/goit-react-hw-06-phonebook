import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { UlContacts } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(({ contacts }) => contacts.filter);
  const normalizedFilter = filter.toLowerCase();

 
  const contacts = useSelector(({ contacts }) => contacts.items);
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

  
  return (
    <UlContacts>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
        />
      ))}
    </UlContacts>
  )
};

export default ContactList;

