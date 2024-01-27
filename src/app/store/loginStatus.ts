import { create } from 'zustand'

interface LoginState {
  isLoggedIn: boolean
  onChangeStatus: (value: boolean) => void
}

export const useLoginStatus = create<LoginState>((set) => ({
  isLoggedIn: false,
  onChangeStatus: (value: boolean) =>
    set((state) => ({
      isLoggedIn: value,
    })),
}))
