import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { ButtonDel } from './ContactListCard.styled';

export const ContactListCard = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {name}: {number}
      <ButtonDel onClick={handleDelete}>Delete</ButtonDel>
    </>
  );
};




