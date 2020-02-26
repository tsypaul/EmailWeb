import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const EmailContent = () => {
  const [sender, setSender] = useState("");
  const [description, setDescription] = useState("");
  const { addSentEmail, changeDisplay, changeMode } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newSentEmail = {
      id: Math.floor(Math.random() * 100000),
      sender,
      description
    };
    addSentEmail(newSentEmail);
    changeDisplay("list");
    changeMode("inbox");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="To:"
        value={sender}
        onChange={e => setSender(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email Content"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button>Sent</button>
    </form>
  );
};
