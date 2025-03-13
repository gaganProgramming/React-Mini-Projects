import React, {useState} from "react";
import Navbar from "./component/Navbar";

const App = ()=>{
  const [count, setCount] = useState(0);

    return(
      <div>
   
       <Navbar/>
      </div>
    )
  
};
export default App;