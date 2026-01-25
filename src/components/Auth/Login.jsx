import {useState} from 'react'

const Login = ({handleLogin}) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
  const submitHandler =(e)=>{
    e.preventDefault()
      handleLogin(email,password)
      setEmail('')
      setPassword('')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600'>
               <form onSubmit={(e)=>{
                  submitHandler(e)
               }} className='flex flex-col justify-center items-center border-emerald-600 p-20'>
                  <input value={email}
                  onChange ={(e)=>{
                     setEmail(e.target.value)
                  }}
                  required className=' text-white outline-none bg-transparent border-2 rounded-full border-emerald-600 text-xl py-3 px-5 placeholder:text-grey-400' type="email" placeholder='Enter your email'/>
                  <input value={password}
                  onChange ={(e)=>{
                     setPassword(e.target.value)
                  }}
                  required className='text-white outline-none bg-transparent border-2 rounded-full border-emerald-600 text-xl py-3 px-5 placeholder:text-grey-400 mt-3' type="password" placeholder='Enter your password' />
                  <button className='text-white mt-5 outline-none border-none rounded-full bg-emerald-600 text-xl py-3 px-5 placeholder:text-white'>Login in</button>
               </form>
        </div>
    </div>
  )
}

export default Login
