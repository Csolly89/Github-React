import { useState } from "react";
import Input from "./Components/Input";
import Display from "./Components/Display"


function App() {
  const [user,setUser] = useState(null)

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