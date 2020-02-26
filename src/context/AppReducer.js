export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case "CHANGE_MODE":
      return {
        ...state,
        mode: action.payload
      };
    case "ADD_ARCHIVE":
      return {
        ...state,
        inbox: state.inbox.filter(email => email.id !== action.payload),
        archive: [
          state.inbox.find(email => email.id === action.payload),
          ...state.archive
        ]
      };
    case "ADD_SENT":
      return {
        ...state,
        sent: [action.payload, ...state.sent]
      };
    case "CHANGE_DISPLAY":
      return {
        ...state,
        display: action.payload
      };
    case "DELETE_EMAIL":
      return {
        ...state,
        inbox: state.inbox.filter(email => email.id !== action.payload),
        sent: state.sent.filter(email => email.id !== action.payload),
        archive: state.archive.filter(email => email.id !== action.payload)
      };
    case "ADD_TO_EMAIL":
      return {
        ...state,
        inbox: [action.payload, ...state.inbox]
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: state.inbox.filter(email => email.sender === action.payload)
      };
  }
};
