import { create } from 'zustand'

export const useStore = create((set) => ({
  username : [{name : '김김김'}],
  namechange:(value) => set((state)=>({ username : state.username, content: value}))
  
}))

