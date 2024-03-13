import { useEffect,  useState } from 'react'
import {useStore} from '../store/store'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Profile(){
    const navigate = useNavigate()
    const {accountP,setaccountP,userSign, } = useStore()
    console.log(accountP)
    const [name , setname]=useState(accountP.name)
    const [id , setid]=useState(accountP.id)
    const [pwd , setpwd]=useState(accountP.pwd)
    const [pwdcheck , setpwdcheck]=useState('')
    const [render, setrender]=useState(false)
    async function onChangeprofile(){
             if( pwd !== pwdcheck || pwd.length === 0){
                return window.alert('회원정보 변경시 비밀번호를 입력해주세요.')
             } else{
            axios.put('/edit', {
                name : name,
                uid : id,
                pwd : pwd,
                create_account : accountP.create_account
            }).then(res => {
                console.log(res)
                loginuser()
                const suc = window.alert('프로필 변경 성공!')
                navigate(-1)
            }).catch(err => console.log('서버전송 오류입니다.'))
        }
      
    }

    async function loginuser(){
        axios.post('/sign',{
          mode: 'login',
          uid : id,
          pwd : pwd
        }).then(res =>{
          if(res.data.state){
            userSign(res.data.u_name)
            setaccountP({
                name : res.data.u_name,
                id : res.data.u_id,
                create_account : res.data.create_account,
                pwd: res.data.pwd
            })
            setrender(true)
        }}).catch(err => console.log('서버전송 오류입니다.'))}

    useEffect(()=>{

    setrender(false)
    },[render])

    return(
      <div>
            <section className="p-6 bg-gray-100 text-gray-900 h-screen">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">개인정보</p>
				<p className="text-xs">여기서 개인정보 수정을 하실 수 있습니다.</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="lastname" className="text-sm">Name</label>
					<input id="lastname" type="text" value={name} onChange={(e)=>{
                        setname(e.target.value)
                    }} placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-sm">Email</label>
					<input id="email" type="email" value={id} onChange={(e)=>{
                        setid(e.target.value)
                    }} placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="Password"  className="text-sm">Password_change</label>
					<input id="Password" type="password"  value={pwd} onChange={(e)=>{
                        setpwd(e.target.value)
                    }} placeholder="password" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="passwordchenck" className="text-sm">Password-Check</label>
					<input id="passwordchenck"  value={pwdcheck} onChange={(e)=>{
                        setpwdcheck(e.target.value)
                    }} type="password" placeholder="password_check" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-600 border-gray-300 text-gray-900" />
				</div>
                <div className="col-span-full">
					<div className="flex items-center space-x-2">
						<button type="button" onClick={(e)=>{
                            e.preventDefault()
                            onChangeprofile()
                        }}
                        className="px-4 py-2 border rounded-md border-gray-800">수정하기</button>
					</div>
				</div>
			</div>
		</fieldset>

	</form>
</section>
      </div>  
    )
}