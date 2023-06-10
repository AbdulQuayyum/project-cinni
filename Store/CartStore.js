import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const CartStore = (set) => ({
    UserCart: null,
    UserTotalPrice: null,
    UserTotalQuantities: null,

    AddCartItems: (CartItems) => set({ UserCart: CartItems }),
    AddTotalPrice: (TotalPrice) => set({ UserTotalPrice: TotalPrice }),
    AddTotalQuantities: (TotalQuantities) => set({ UserTotalQuantities: TotalQuantities })

})

const UseCartStore = create(
    persist(CartStore, {
        name: 'Cart'
    })
)

export default UseCartStore;