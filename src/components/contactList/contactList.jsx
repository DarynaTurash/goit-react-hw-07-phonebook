import { ListContainer, StyledList, Contact, Name, ButtonDelete, Number } from "./contactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { getFilterValue, getContacts} from "redux/selectors";
import { deleteContact } from "redux/operations";


export const ContactList = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilterValue);
    const contacts = useSelector(getContacts);
    const visibleContacts = filter ? contacts.items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())) : contacts.items;

    return (
        <ListContainer>
            <StyledList>
            {visibleContacts.map(contact => <Contact key={contact.id}>
                    <Name>{contact.name}</Name>
                    <Number>{contact.number}</Number>
                    <ButtonDelete type='button' onClick={() => dispatch(deleteContact(contact.id))}>Delete</ButtonDelete>
                </Contact>)}
            </StyledList>
        </ListContainer>
    )
};

