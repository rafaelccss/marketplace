import { createContext, useState, ReactNode } from "react";

import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
    user: UserDTO
    signIn: (email: string, password: string) => Promise<void>
    signOut: () => void
}

type AuthContextProviderProps = {
    children: ReactNode;
}
  
export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

export function AuthContexProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserDTO>({} as UserDTO);

    async function signIn(email: string, password: string) {
        // TODO: inserir o usuário no user defaults 
        
        setUser({
            id: "id",
            name: "Rafael",
            email: email,
            avatar: "avatar"
        } as UserDTO)
    }

    function signOut() {
        // TODO: limpar o usuário do user defaults 
        setUser({} as UserDTO)
    }

    return (
        <AuthContext.Provider value={{
            user,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}