import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { LayoutContact } from 'components/LayoutContact/LayoutContact';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet>
        <title>Your contacts</title>
      </Helmet> */}

      <LayoutContact
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          color: '#010101',
        }}
      >
        {/* <h1>Phonebook</h1> */}
        <ContactForm />
        <br />
        {/* <h2>Contacts</h2> */}
        <Filter />
        <ContactList />
      </LayoutContact>
    </>
  );
}
