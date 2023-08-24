import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, ErrorMessage, FormField, FieldInput, SubmitButton } from './contactForm.styled';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';




const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan'
      )
      .required('Name is required'),
      number: Yup.string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Phone number is required'),
  });

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    
  

    return (
        <Formik initialValues={{
                    name: '', 
                    number: '',
                }}
                validationSchema={validationSchema}
                
                onSubmit={(values, action) => {
                const contactExist = contacts.items.some(contact => contact.name.toLowerCase().includes(values.name));
                const newContact = { ...values };

                if(contactExist) {
                  alert(`Sorry, contact name ${values.name} already exist`);
                } else {
                  dispatch(addContact(newContact));
                  action.resetForm();
                }
                }}>
        <Form>
        <FormField>
        Name
        <FieldInput type="text" name="name" placeholder="Jacob Nillson"  />
        <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
        Number
        <FieldInput type="tel" name="number" placeholder="11-22-33-44" />
        <ErrorMessage name="number" component="div" />
        </FormField>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Formik>
    );
};






