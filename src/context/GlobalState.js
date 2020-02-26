import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import Axios from "axios";

const allEmails = [
  { id: 1, sender: "Paul", description: "haha", type: "inbox" },
  { id: 2, sender: "Jason", description: "haha", type: "inbox" },
  { id: 3, sender: "Paul", description: "I am lucky", type: "inbox" },
  { id: 4, sender: "Paul", description: "yes", type: "inbox" },
  { id: 5, sender: "Yuki", description: "Business", type: "inbox" },
  { id: 6, sender: "Paul", description: "Business", type: "inbox" },
  {
    id: 7,
    sender: "Yuki",
    description: "Looking forward to meet u",
    type: "inbox"
  },
  { id: 8, sender: "John", description: "haha", type: "inbox" },
  { id: 9, sender: "Paul", description: "I am on my way", type: "archive" }
];

const initialState = {
  mode: "inbox",
  display: "list",
  inbox: allEmails.filter(email => email.type === "inbox"),
  archive: allEmails.filter(email => email.type === "archive"),
  sent: [],
  search: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function changeMode(mode) {
    dispatch({
      type: "CHANGE_MODE",
      payload: mode
    });
  }

  function addArchive(id) {
    dispatch({
      type: "ADD_ARCHIVE",
      payload: id
    });
  }

  function addSentEmail(email) {
    dispatch({
      type: "ADD_SENT",
      payload: email
    });
  }

  function changeDisplay(display) {
    dispatch({
      type: "CHANGE_DISPLAY",
      payload: display
    });
  }

  function deleteEmail(id) {
    dispatch({
      type: "DELETE_EMAIL",
      payload: id
    });
  }

  function addToInbox(email) {
    dispatch({
      type: "ADD_TO_EMAIL",
      payload: email
    });
  }

  function setSearch(sender) {
    dispatch({
      type: "SET_SEARCH",
      payload: sender
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        inbox: state.inbox,
        archive: state.archive,
        sent: state.sent,
        mode: state.mode,
        display: state.display,
        changeMode,
        addArchive,
        addSentEmail,
        changeDisplay,
        deleteEmail,
        addToInbox,
        setSearch,
        search: state.search
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
