import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Navbar = () => {
  const { changeMode, changeDisplay, addToInbox } = useContext(GlobalContext);
  const newEmail = {
    id: Math.floor(Math.random() * 10000),
    sender: "Paul",
    description: "New Mail"
  };
  return (
    <div>
      <button
        onClick={() => {
          changeMode("inbox");
          changeDisplay("list");
        }}
      >
        Inbox
      </button>
      <button
        onClick={() => {
          changeMode("sent");
          changeDisplay("list");
        }}
      >
        Sent
      </button>
      <button
        onClick={() => {
          changeMode("archive");
          changeDisplay("list");
        }}
      >
        Archive
      </button>
      <button
        onClick={() => {
          changeDisplay("new");
        }}
      >
        New
      </button>
      <button
        onClick={() => {
          addToInbox(newEmail);
        }}
      >
        Receive
      </button>
    </div>
  );
};
