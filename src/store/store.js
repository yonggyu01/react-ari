import { create } from 'zustand'

export const useStore = create((set) => ({
  rollbox : false,
  setroll : ()=>set((state)=>({...state, rollbox : !state.rollbox})),
  logoclick :false ,
  islogo:() => set((state)=>({ ...state , logoclick : !state.logoclick })),
  loginnow : false,
  loginsuc : (boolean)=> set((state)=>({...state, loginnow : boolean})),
  userid : '로그인아이디',
  userSign : (value)=>set((state)=>({...state, userid : value})),
  loginstate : '',
  setloginstate : (mode)=>set((state)=>({...state,loginstate : mode})),
  mycart : [],
  setmycart: (val)=>set((state)=>({...state,mycart:[...state.mycart,val]})),
  delmycart : (id) =>set((state)=>({mycart : state.mycart.filter(item => item.id !== id)})),
  review : [ 
    {user : '',
    header : '아리 악수권 구매후기',
    body : '아리 실물을 영접하는 순간 제 암이 나았습니다, 악수를 하고 나니 돈이 아깝지 않네요 또 구매하려구요',
    id: '아이디1',
    star : 5,
    totalstar : 5
  },
    {user : '',
    header : '사진교환권', 
    body : '10장 샀습니다. 너무 귀엽네요 다음달 월급받으면 추가구매 하려구요   ',
    id:'아이디2',
    star : 5,
    totalstar : 5
  },
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
  naverfirst : false,
  setnaverfirst : (boolean) => set((state)=>({...state, naverfirst : boolean})),
  navertoken : '',
  setnavertoken : (token)=>set((state)=>({...state, navertoken : token})),
  kakaotoken : '',
  setkakaotoken : (token)=>set((state)=>({...state, kakaotoken : token}))
}))

