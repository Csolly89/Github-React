import { useState } from "react"


function Input({ setUser }) {
    const [userName, setUserName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = encodeURI (`https://api.github.com/users/${userName}`)
        const response = await fetch(url)
        const data = await response.json()
        setUser(data)
        setUserName('')
    }

    const clear = () => {
        setUserName('')
        setUser(null)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username"/>
            <input type="submit"/>
        </form>
        {/* <p>UserName: {userName} </p> */}
        <button onClick={clear}>Clear</button>
        </div>
    )
}
export default Input 
