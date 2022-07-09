let init = {
  users: [
    "Jonathan Joestar",
    "Joseph Joestar",
    "Jotaro Kujo",
    "Giorno Giovanna",
    "Jolyne Cujoh",
    "Josuke Higashikata",
    "Yoshikage Kira",
  ],
  cards: [],
  temp:[]
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case "USER":
      return { ...state, users: action.users };
      case "CARDS":
        return { ...state, cards: [...state.cards, action.cards] };
        case "TEMP":
        return { ...state, temp: [...state.temp, action.temp] };
    default:
      return state;
  }
};
