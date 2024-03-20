import { create } from 'zustand'

export const useStore = create((set) => ({
  rollbox : false,
  setroll : ()=>set((state)=>({...state, rollbox : !state.rollbox})),
  logoclick :false ,
  islogo:() => set((state)=>({ ...state , logoclick : !state.logoclick })),
  loginnow : false,
  loginsuc : (boolean)=> set((state)=>({...state, loginnow : boolean})),
  userid : 'Login',
  userSign : (value)=>set((state)=>({...state, userid : value})),
  loginstate : null,
  setloginstate : (mode)=>set((state)=>({...state, loginstate : mode})),
  mycart : [],
  setmycart: (val)=>set((state)=>({...state,mycart:[...state.mycart,val]})),
  delmycart : (id) =>set((state)=>({mycart : state.mycart.filter(item => item.id !== id)})),
  alldelcart : ()=>set((state)=>({...state, mycart :[]})),
  orderid : '',
  setorderid : (val) =>set((state)=>({...state,orderid : val})),
  isOrder : false,
  setisOrder :(boolean)=>set((state)=>({...state, isOrder : boolean})),
  review : [ 
    
  ],
  setreview : (val)=> set((state)=>({...state, review : [...state.review,val]})),
  naviscroll : false,
  setnaviscroll : (boolean) =>set((state)=>({...state, naviscroll : boolean})),
  selectblog:{  },
  setblog:(data)=>set((state)=>({...state,selectblog:{...data} })),
  locallocation : '',
  setlocation : (href)=>set((state)=>({...state, locallocation: href})),
  darkmode :false,
  setdarkmode : (mode)=>set((state)=>({...state, darkmode:mode })),
  navercode : '',
  setnavercode : (code)=>set((state)=>({...state, navercode : code})),
  naverfirst : true,
  setnaverfirst : (boolean) => set((state)=>({...state, naverfirst : boolean})),
  navertoken : '',
  setnavertoken : (token)=>set((state)=>({...state, navertoken : token})),
  kakaotoken : '',
  setkakaotoken : (token)=>set((state)=>({...state, kakaotoken : token})),
  userallinfo : [],
  setuserinfo:(data) => set((state)=>({...state, userallinfo:data})),
  accountP : {},
  setaccountP : (data) => set((state)=>({...state, accountP : data}))

})) 

