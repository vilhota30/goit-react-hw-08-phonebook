import PropTypes from 'prop-types';
import { BtnContainer, Button } from './Buttons.styled';
import { HiTrash } from 'react-icons/hi';

export const ButtonEdit = ({ id, onDeleteContact, onEditContact }) => {
  return (
    <BtnContainer>
      <Button type="button" onClick={onEditContact}>
        Edit
      </Button>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        <HiTrash />
        Delete
      </Button>
    </BtnContainer>
  );
};

export const ButtonSave = ({ id, onDeleteContact }) => {
  return (
    <BtnContainer>
      <Button type="submit">Save</Button>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        <HiTrash />
        Delete
      </Button>
    </BtnContainer>
  );
};

ButtonEdit.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  onEditContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

ButtonSave.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
