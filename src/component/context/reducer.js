export const reducer = (state, action) => {
  console.log(state,'state')
  switch (action.type) {
    case "login": {
      console.log("in reducer login  case");
      return { ...state, login: true };
    }
    case "logout": {
      console.log("in reducer logout case");
      return { ...state, login: false };
    }
    default:
      return { ...state,login:false };
  }
};
