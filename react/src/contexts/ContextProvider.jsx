import { createContext } from "react";

const StateContext = createContext({
    currentUser: null,
    token:null
});

export const ContextProvider  = ({children}) => {
    const [user, setUser] = useState(initialState: {});
    const [token, _setToken] = useState(null);
    const setToken = (token) => {
        _setToken(token)
        if(token)
        {
            localStorage.setItem('ACCESS_TOKEN', token);
        }
    }
    return (
        <StateContext.Provider value={{

        }}>

        </StateContext.Provider>
    )
}
