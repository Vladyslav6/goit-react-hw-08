import React, { useEffect } from "react";
import ContactFrom from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { fetchContactsData } from "../../redux/contacts/operations";

const ContactsItem = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsData());
  }, [dispatch]);
  return (
    <div className="ml-2">
      <div>
        <h1>Phonebook</h1>
        <ContactFrom />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsItem;
