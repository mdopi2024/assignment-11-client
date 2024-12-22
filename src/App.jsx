
import useAuth from "./hooks/useAuth"


function App() {
 
const {name}= useAuth()
console.log({name})
  return (
    <>
      
      <h1 className="text-blue-400 text-center">Vite + React</h1>
     
    </>
  )
}

export default App
