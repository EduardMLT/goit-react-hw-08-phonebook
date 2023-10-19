import { useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/selectors';
import { ContactListCard } from 'components/ContactListCard/ContactListCard.js';
import { List } from './ContactList.styled';


export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(item => (
        <li key={item.id}>
          <ContactListCard item={item} />
        </li>
      ))}
    </List>
  );
};