import { useState } from 'react';
import PropTypes from "prop-types";
import {Item, ContactInfo, ContactName, ContactTel} from "./ContactItem.styled";
// import { BiMessageAltX } from "react-icons/bi";
import {useDispatch} from 'react-redux';
import { toast } from 'react-hot-toast';
import { deleteDataContacts, editDataContacts } from "redux/Operations/operations";

import { HiUser } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import { ChangeForm } from "components/EditForm/EditForm";
 import { ButtonEdit, ButtonSave } from "components/Buttons/Buttons";

const ContactItem = ({name, number, id}) => {
     
    const [editName, setEditName] = useState(name);
    const [editNumber, setEditNumber] = useState(number);
    const [isEdit, setIsEdit] = useState(false);

    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        dispatch(deleteDataContacts(id));
        toast.success(`Deleted contact: ${name}`, {
            theme: "colored"
          });
            
    };

    const handleEditContact = (newName, newNumber) => {
        if (!isEdit) {
          setIsEdit(true);
        } else {
          setEditName(newName);
          setEditNumber(newNumber);
          setIsEdit(false);
    
          dispatch(
            editDataContacts({
              id,
              name: newName,
              number: newNumber,
            })
          );
        }
      };
    
    return (
        <Item>
          {/* if contact saved show contact info */}
    
          {!isEdit && (
             <ContactInfo>
               <ContactName>
                <HiUser />
                {editName}:
               </ContactName>
    
               <ContactTel>
                <ImPhone />
                {editNumber}
                </ContactTel>
             </ContactInfo>
          )}
    
          {/* if contact is edit show edit form */}
          {isEdit && (
            <ChangeForm
              name={editName}
              number={editNumber}
              onEditContact={handleEditContact}
            >
              <ButtonSave id={id} onDeleteContact={handleDeleteContact} />
            </ChangeForm>
          )}
    
          {!isEdit && (
            <ButtonEdit
              id={id}
              onDeleteContact={handleDeleteContact}
              onEditContact={handleEditContact}
            />
          )}
        </Item>
      );


};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string,
}

export default ContactItem;