export const reducer = (state, action) => {
  
  switch (action.type) {
    case "login": {
    
      return { ...state, login: true };
    }
    case "logout": {
     
      return { ...state, login: false };
    }
    default:
      return { ...state};
  }
};
