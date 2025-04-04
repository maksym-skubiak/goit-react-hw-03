import css from "./Contact.module.css";
const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.item} key={id}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button className={css.button} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
export default Contact;
