import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { EmailItem } from "./EmailItem";

export const EmailList = () => {
  const { inbox, mode, archive, sent, setSearch, search } = useContext(
    GlobalContext
  );
  const [sender, setSender] = useState("");
  const emails =
    mode === "inbox"
      ? inbox
      : mode === "sent"
      ? sent
      : mode === "search"
      ? search
      : archive;

  const onSubmit = e => {
    e.preventDefault();
    setSearch(sender);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="search">Search by sender</label>
        <input
          type="text"
          placeholder="Enter sender"
          value={sender}
          onChange={e => {
            setSender(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
      <ul>
        {emails.map(email => (
          <EmailItem email={email} mode={mode} key={email.id} />
        ))}
      </ul>
    </div>
  );
};
