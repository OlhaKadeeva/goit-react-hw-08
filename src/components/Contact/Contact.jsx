import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";
import { IoCall } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.list}>
      <div className={css.contacts}>
        <div className={css.inform}>
          <p>
            <RiContactsFill className={css.icon} size={20} />
            {name}
          </p>
          <p>
            <IoCall className={css.icon} size={20} />
            {number}
          </p>
        </div>
        <div className={css.delete}>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default Contact;
