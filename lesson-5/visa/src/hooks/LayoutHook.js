import { createContext, useContext } from "react";
// const initialData = { theme: "green" };
const LayoutContext = createContext();
const useLayout = () => useContext(LayoutContext);
const initialState = { count: 0, userProfile: {}, isLoggedIn: false };

function LayoutReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "loggedIn":
      // state.isLoggedIn = true;
      // return state;
      return { ...state, isLoggedIn: true };
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
}

const LayoutProvider = LayoutContext.Provider;

export {
  LayoutContext,
  LayoutProvider,
  useLayout,
  LayoutReducer,
  initialState,
};
