import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const InfoStore = (set) => ({
    UserFullName: null,
    UserAlias: null,
    UserAddress: null,
    UserLandmark: null,
    UserPhone: null,

    AddUserFullName: (fullName) => set({ UserFullName: fullName }),
    AddUserAddress: (address) => set({ UserAddress: address }),
    AddUserLandmark: (landmark) => set({ UserLandmark: landmark }),
    AddUserPhone: (phone) => set({ UserPhone: phone }),
    AddUserAlias: (alias) => set({ UserAlias: alias }),
})

const UseInfoStore = create(
    persist(InfoStore, {
        name: 'Information'
    })
)

export default UseInfoStore;