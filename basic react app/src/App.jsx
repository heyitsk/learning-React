
import Func from "./Func"


function App() {
  const username = "kusahgra";
  return(
    <>
    <p>this is the username {username}</p> 
    {/* this {username} is called as evaluated exp and you cannot write js in it. Here we write the final output */}
    <h1>chai aur react with vite </h1>
    <Func/>
    </>
    
  )
}

export default App
