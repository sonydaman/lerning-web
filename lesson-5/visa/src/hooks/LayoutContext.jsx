import { createContext, useContext } from 'react'
const LayoutContext = createContext();
const useLayout = useContext(LayoutContext);
const initialState = { count: 0, userProfile: {}, isLoggedIn: false };

function LayoutReducer(state, action) {
    switch (action.type) {
        case "login":
            return { initialState, isLoggedIn: true };
        case "increase":
            return { count: state.count + 1 };
        case "decrease":
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
