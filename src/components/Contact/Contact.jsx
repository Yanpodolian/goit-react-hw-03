import css from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => (
  <li className={css.contact}>
    <p>
      {name}: {number}
    </p>
    <button onClick={onDelete}>Delete</button>
  </li>
);

export default Contact;
