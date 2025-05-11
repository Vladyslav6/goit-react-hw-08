import React from "react";
import ContactFrom from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsItem = () => {
  return (
    <div>
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
