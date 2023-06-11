import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const InfoStore = (set) => ({
    UserFullName: null,
    UserAddress: null,
    UserLandmark: null,
    UserPhone: null,

    AddUserFullName: (fullName) => set({ UserFullName: fullName }),
    AddUserAddress: (address) => set({ UserAddress: address }),
    AddUserLandmark: (landmark) => set({ UserLandmark: landmark }),
    AddUserPhone: (phone) => set({ UserPhone: phone }),

})

const UseInfoStore = create(
    persist(InfoStore, {
        name: 'Information'
    })
)

export default UseInfoStore;