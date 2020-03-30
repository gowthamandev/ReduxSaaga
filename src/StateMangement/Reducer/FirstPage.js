const initialState = {
  text: "Initial Value"
};
const FirstPage = (state = initialState, action) => {
  switch (action.type) {
    case "savethetext":
      return { ...state, text: action.data };
    default:
      return state;
  }
};

export default FirstPage;
