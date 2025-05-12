import { useDispatch } from "react-redux";
import css from "./contact.module.css";

import { deleteContactData } from "../../redux/contacts/operations";
const Contact = ({ DataItem: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.container}>
        <div>
          <p>{name}</p>
          <p>{number}</p>
        </div>
        <button
          // className={css.deleteButton}
          className="btn btn-xs btn-soft btn-primary"
          onClick={() => dispatch(deleteContactData(id))}
        >
          Delete
        </button>
        {/* <button className="btn btn-soft btn-primary">Primary</button> */}
      </div>
    </>
  );
};
export default Contact;
