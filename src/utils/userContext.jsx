import { createContext } from "react";

const userContext = createContext({
    user: "Guest"
    }
);

export default userContext;