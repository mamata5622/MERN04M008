import { createContext } from 'react'
import './App.css'
import Child from './Child'
import Home from './Home'

// for creating the context object
const stdContext=createContext()
const empContext=createContext({})

function App() {

  // create the context object
  // add the provider to particular component
  // add the value to the provider
  // export the context object
  
  // how to access the context object in child component
  // use the hook (useContext) and get the value
  return (
    <>
    <h1>Welcome page</h1>

    <stdContext.Provider value={20}>
      <empContext.Provider value={{name:"hello",age:90,email:"bye@gmail.com"}}>
        <Child/>
      </empContext.Provider>
      
    </stdContext.Provider>
    <Home/>
    </>
  )
}

export {stdContext,empContext}
export default App
