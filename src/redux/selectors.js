import { createSelector } from 'reselect';

export const getContacts = state => state.contacts;
export const getFilterValue = state => state.filter;
export const getVisibleContacts = createSelector(
    [getContacts, getFilterValue],
    (contacts, filter) => {
      if (filter) {
        return contacts.items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
      }
      return contacts.items;
    }
  );


