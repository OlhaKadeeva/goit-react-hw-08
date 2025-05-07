import { selectFilteredContacts } from "../../redux/contacts/slice"; // замість selectContacts
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <div className={css.list}>
      <ul>
        {visibleContacts.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
