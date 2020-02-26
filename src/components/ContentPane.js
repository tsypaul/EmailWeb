import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { EmailList } from "./EmailList";
import { EmailContent } from "./EmailContent";
import Axios from "axios";

export const ContentPane = () => {
  const { display } = useContext(GlobalContext);

  return <div>{display === "list" ? <EmailList /> : <EmailContent />}</div>;
};
