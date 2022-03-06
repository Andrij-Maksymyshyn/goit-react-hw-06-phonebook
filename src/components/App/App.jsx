import { useSelector } from 'react-redux';
import { getItems } from 'redux/selectors';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container } from './App.styled';


function App() {
  const contacts = useSelector(getItems);

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
