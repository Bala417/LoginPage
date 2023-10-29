import { React, useState, useEffect } from "react";
import "../App.css";

export default function Edit({
  selectedContact,
  handleEdit,
  editFieldIsOpen,
  setEditFieldIsOpen,
}) {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    setName(selectedContact?.name);
    setNumber(selectedContact?.number);
    setEmail(selectedContact?.email);
  }, [selectedContact]);

  function handleUpdate(e) {
    e.preventDefault();
    const updatedContact = {
      name,
      number,
      email,
      id: selectedContact.id,
      pic: selectedContact.pic,
    };
    handleEdit(updatedContact);
    setName("");
    setNumber("");
    setEmail("");
    setEditFieldIsOpen(!editFieldIsOpen);
  }

  return (
    <form onSubmit={handleUpdate}>
      {editFieldIsOpen && (
        <fieldset>
          <legend>Update Contact</legend>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="number">
            Mobile No.
            <input
              type="tel"
              id="number"
              minLength="10"
              placeholder="Your Number"
              required
              value={number}
              onChange={(e) => setNumber(Number(e.target.value))}
            />
          </label>
          <label htmlFor="email">
            Email Id
            <input
              type="email"
              id="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button>Update</button>
        </fieldset>
      )}
    </form>
  );
}
