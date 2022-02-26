interface User {
    id: string
    name: string
    age: number
}

export interface AuthState {
    user: User | null

}