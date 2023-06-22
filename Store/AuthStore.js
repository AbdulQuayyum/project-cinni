import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const AuthStore = (set) => ({
    UserProfile: null,

    AddUser: (User) => set({ UserProfile: User }),
    RemoveUser: () => set({ UserProfile: null }),
})

const UseAuthStore = create(
    persist(AuthStore, {
        name: 'Auth',
    }),
)

export default UseAuthStore;
