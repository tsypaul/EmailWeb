import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const EmailItem = ({ email, mode }) => {
  const { addArchive, deleteEmail } = useContext(GlobalContext);
  return (
    <li>
      <div>From: {email.sender}</div>
      <div>{email.description}</div>
      {mode === "archive" || mode === "sent" ? (
        <></>
      ) : (
        <button
          onClick={() => {
            addArchive(email.id);
          }}
        >
          archive
        </button>
      )}
      <button
        onClick={() => {
          deleteEmail(email.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
