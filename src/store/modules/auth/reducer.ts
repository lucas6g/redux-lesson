import { Reducer } from "redux"
import { AuthState } from "./types"

const INITIAL_STATE: AuthState = {
    user: null
}

export const auth: Reducer<AuthState> = () => {
    return INITIAL_STATE
}

