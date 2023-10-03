"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"

type Props = {
    className?: string,
    callBackUrl? : string
}

const LogIn = (props: Props) => {
  const [username,setUsername] = useState<string>("")
  const [password,setPassword] = useState<string>("")

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setUsername(event.target.value)
  }

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(event.target.value)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      await signIn('credentials', {
        username: username,
        password: password,
        redirect: true,
        callbackUrl: props.callBackUrl ?? "http://localhost:3000"
      })
  }


  return (
    <div className={props.className}>
      <div className="g-gradient-to-b from-slate-50 to-slate-200 p-2 text-center">
        LogIn Form
      </div>

      <form onSubmit={onSubmit} className="p-2 flex flex-col gap-3">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" value={username} onChange={handleChangeUsername} />

        <label htmlFor="password">Username</label>
        <input type="password" id="password" placeholder="Password" value={password} onChange={handleChangePassword} />

        <button type="submit" className="w-28" >
          SignIn
        </button>
      </form>

    </div>
  )
}

export default LogIn