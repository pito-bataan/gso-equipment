"use client"
import { useState } from "react"

type Props = {
    className?: string
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


  return (
    <div className={props.className}>
      <div className="g-gradient-to-b from-slate-50 to-slate-200 p-2 text-center">
        LogIn Form
      </div>

      <form className="p-2 flex flex-col gap-3">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" value={username} onChange={handleChangeUsername} />

        <label htmlFor="password">Username</label>
        <input type="password" id="password" placeholder="Password" value={password} onChange={handleChangePassword} />

        <button type="submit" className="w-28">
          SignIn
        </button>
      </form>

    </div>
  )
}
export default LogIn