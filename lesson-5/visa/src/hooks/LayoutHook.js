import { createContext, useContext } from "react";
// const initialData = { theme: "green" };
const LayoutContext = createContext();
const useLayout = () => useContext(LayoutContext);

const initialState = { count: 0 };

function LayoutReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
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
