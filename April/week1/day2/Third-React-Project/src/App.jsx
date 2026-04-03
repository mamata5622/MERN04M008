
import About from './About'
import './App.css'
import Home from './Home'

function App() {
  
  return (
    <>
    <h1>Hello</h1>
    <Home arr={[10,20,30]}>
      <About/>
    </Home>
    
    </>
  )
}

export default App;
