import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../src/redux/contactsOps";
import ContactList from "../src/components/ContactList/ContactList";
import ContactForm from "../src/components/ContactForm/ContactForm";
import SearchBox from "../src/components/SearchBox/SearchBox";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
