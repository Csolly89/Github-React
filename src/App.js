import { useState, useEffect } from "react";
import Input from "./Components/Input";
import Display from "./Components/Display"


function App() {
  const [user,setUser] = useState(null)

  // will run once auto when the function loads if 2nd array is empty."dependency array"
  // tricky with async await.. make function inside for async and call after the main effect syntax
  // if stateful variable in the dependency array, will run every time the variable changes..can be multiple variables

  // useEffect(() => {
  //   const fetchData = async () => {
  //   const userName="Csolly89"
  //   const url = encodeURI (`https://api.github.com/users/${userName}`)
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   setUser(data)

  // return() => {
    // clearInterval(variable)  cleanup function inside of useEffect to cancel 
  // }
  //   }
  //   fetchData()
  // }, [ ])


  const display = user && <Display user={user} />

  return (
    <div>
      <h1>Github api practice</h1>
      <Input setUser={setUser} />
      {display}
    </div>
  );
}

export default App;

// step 1 get data
  // state,input,form,funcionality to retrieve the data
// step 2 display data

// components:
// input -> username
// display -> naked...no stateful variable.. userData as a prop
// wrapper-app itself -> userdata

// stateful variables:
// userData 
// userName

//  conditonal rendering, dont render unless user exists