import { useState } from "react";

export const EmailForm = () => {

    const [email, setEmail] = useState("")

    const handleEmailSubmit = (e) => {
        console.log(e.target.value)
      }
      const handleEmailChange = (e) => {
        setEmail(e.target.value)
      }

    return (
        <div>
        <label htmlFor="#email">@: </label>
        <input id="email" type="email" placeholder="email@domain.com" value={email} onChange={(e) => handleEmailChange(e)}></input>
        <button type="submit" value={email} onClick={(e) => handleEmailSubmit(e)}>SEND</button>
      </div>
    )
}



