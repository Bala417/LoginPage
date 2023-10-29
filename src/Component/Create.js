import { React, useState } from "react";
import "../App.css";

export default function Create({ handleUpdatedData, editFieldIsOpen }) {
  const [createForm, setCreateForm] = useState(false);
  const [submitForm, setSubmitForm] = useState(null);
  const [url, setUrl] = useState("https://i.pravatar.cc/48");

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  function create() {
    setCreateForm(!createForm);
  }

  function submit(e) {
    e.preventDefault();
    setSubmitForm(!submitForm);
    let randomId = crypto.randomUUID();

    const updatedData = {
      name,
      number,
      email,
      id: randomId,
      pic: `${url}?u=${randomId}`,
    };
    handleUpdatedData({ updatedData, createForm });
    setName("");
    setNumber("");
    setEmail("");
    setCreateForm(false);
  }
  return (
    <>
      <button className="create-button" onClick={create}>
        {createForm ? "Close" : "Create"}
      </button>
      {createForm && (
        <form onSubmit={submit}>
          <fieldset>
            <legend>Create Contact</legend>
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(() => e.target.value)}
              />
            </label>
            <label htmlFor="number">
              Mobile No.
              <input
                type="tel"
                minLength="10"
                id="number"
                placeholder="Your Number"
                required
                value={number}
                onChange={(e) => setNumber(() => Number(e.target.value))}
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
                onChange={(e) => setEmail(() => e.target.value)}
              />
            </label>
          </fieldset>
          <input className="submit-button" type="submit"></input>
        </form>
      )}
    </>
  );
}
