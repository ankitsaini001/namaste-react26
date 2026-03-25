import { createContext } from "react";

const UserContext = createContext({
    user: "",
    setUserName: () => {},
});

export default UserContext;