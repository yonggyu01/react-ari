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
  delmycart : (id) =>set((state)=>({mycart : state.mycart.filter(item => item !== id)})),
  review : [ 
    {user : '',
    header : '아리 악수권 구매후기',
    body : '아리 실물을 영접하는 순간 제 암이 나았습니다, 악수를 하고 나니 돈이 아깝지 않네요 또 구매하려구요',
    id: '아이디1'
  },
    {user : '',
    header : '사진교환권', 
    body : '10장 샀습니다. 너무 귀엽네요 다음달 월급받으면 추가구매 하려구요   ',
    id:'아이디2'
  },
  ],
  setreview : (val)=> set((state)=>({...state, review : [...state.review,val]})),
}))

