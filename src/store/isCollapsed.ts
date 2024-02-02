import { create } from "zustand"

interface CollapseState {
    isCollapsed: boolean,
    changeStatus: (value: boolean) => void
}

export const useIsCollapsed = create<CollapseState>((set) => ({
    isCollapsed: false,
    changeStatus: (value: boolean) => set(state => ({
        isCollapsed: !state.isCollapsed
    }))
}))