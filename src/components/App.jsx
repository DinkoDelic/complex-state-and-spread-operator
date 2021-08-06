import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(event) {
    const { value, name } = event.target;

    //More concise way of writing complex state objects
    // prevValue = {fName, lName, email} and [name]
    // will replace one of them from selected input field name tag
    // and asssign the value in it
    // no need for if/else
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

    // more about why [name]:value works
    //https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable?noredirect=1&lq=1
    setContact((prevValue) => ({ ...prevValue, [name]: value }));
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={updateContact}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={updateContact}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={updateContact}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
