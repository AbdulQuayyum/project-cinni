import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const InfoStore = (set) => ({
    UserInformation: null,

    AddInfo: (CartInfo) => set({ UserInformation: CartInfo }),
})

const UseInfoStore = create(
    persist(InfoStore, {
        name: 'Information'
    })
)

export default UseInfoStore;