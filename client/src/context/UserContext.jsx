import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
    const seed = Math.floor(Math.random() * (100 - 0) + 0);

    const [user, setUser] = useState({
        "id": seed,
        "username": "Usuário-" + seed
    })

    return (
        <UserContext.Provider value={{ user }}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }