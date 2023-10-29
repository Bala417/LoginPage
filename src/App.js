import { React, useState } from "react";
import Create from "./Component/Create";
import Edit from "./Component/Edit";
import "./App.css";
export default function App() {
  const [contactList, setContactList] = useState([]);
  const [selectedContact, setSelectedContact] = useState();

  const [editFieldIsOpen, setEditFieldIsOpen] = useState(false);
  const [isCreateFormOpen, setIsCreateFormOpen] = useState();

  function handleUpdatedData({ updatedData, createForm }) {
    setContactList([...contactList, updatedData]);
  }

  function handleDelete(del) {
    setContactList((preContactList) => {
      const updatedList = preContactList.filter(
        (contact) => contact.id !== del.id
      );
      return updatedList;
    });
  }
  function handleEdit(updatedContact) {
    setContactList((preContactList) => {
      const updatedList = preContactList.map((contact) => {
        return updatedContact.id === contact.id
          ? {
              ...contact,
              name: updatedContact.name,
              email: updatedContact.email,
              number: updatedContact.number,
            }
          : contact;
      });

      return updatedList;
    });
  }

  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <table>
        <thead>
          <tr>
            <th>Profile Pic</th>
            <th>Name</th>
            <th>Mobile No.</th>
            <th>Email id</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contactList &&
            contactList.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pic} alt={contact.name} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.number}</td>
                  <td>{contact.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        setSelectedContact(contact);
                        setEditFieldIsOpen(!editFieldIsOpen);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        // setDel(contact);

                        handleDelete(contact);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Create
        handleUpdatedData={handleUpdatedData}
        editFieldIsOpen={editFieldIsOpen}
      />
      <Edit
        selectedContact={selectedContact}
        handleEdit={handleEdit}
        editFieldIsOpen={editFieldIsOpen}
        setEditFieldIsOpen={setEditFieldIsOpen}
      />
    </div>
  );
}
