import { create } from 'zustand'

export const useStore = create((set) => ({
  rollbox : false,
  setroll : ()=>set((state)=>({...state, rollbox : !state.rollbox})),
  logoclick :false ,
  islogo:() => set((state)=>({ ...state , logoclick : !state.logoclick })),
  loginnow : false,
  loginsuc : ()=> set((state)=>({...state, loginnow : !state.loginnow})),
  userid : '로그인아이디',
  userSign : (value)=>set((state)=>({...state, userid : value})),
  mycart : [],
  setmycart: (val)=>set((state)=>({...state,mycart:[...state.mycart,val]})),
  delmycart : (id) =>set((state)=>({mycart : state.mycart.filter(item => item !== id)}))
}))

