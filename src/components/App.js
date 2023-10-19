import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


import { fetchContacts } from 'redux/operations.js';
import { selectIsLoading, selectError } from 'redux/selectors.js';
import { GlobalStyle } from 'GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm.js';
import { ContactList } from './ContactList/ContactList.js';
import { Filter } from './Filter/Filter.js';

import { Wrapper } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
      <GlobalStyle />
    </Wrapper>
  );
};
