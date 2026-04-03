
import './App.css'
import About from './component/About'
import Card from './component/Card'
import Home from './component/Home'
import Navbar from './component/Navbar'

function App() {

  function fun(){
    console.log("this is a new function")
  }

  let animals=[

    {
      img:"https://img.freepik.com/free-photo/shallow-focus-vertical-shot-cute-golden-retriever-puppy-sitting-grass-ground_181624-27259.jpg",
      title:"Dog image",
      desc:"This is pet animal",
      btn:"View dog"
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/250px-African_Bush_Elephant.jpg",
      title:"Elephant image",
      desc:"This is largest animal",
      btn:"View elephant"
    },
    {
     img:"https://images.pexels.com/photos/28924821/pexels-photo-28924821.jpeg?cs=srgb&dl=pexels-bharath-kumar-venkatesh-1417371218-28924821.jpg&fm=jpg",
     title:"Lion image",
     desc:"This is wild animal",
     btn:"View lion" 
    }
  ]
  return (
   <>
   <h1>this is app page</h1>
   <About/>
   <Navbar/>
   
   <Home obj={{name:"shyam",age:50}} func={fun}/>
   {/* <About/> */}
   <div className='grid grid-cols-2 gap-5 lg:grid-cols-3 justify-items-center '>
    {
      animals?.map((v,i)=>(
        <Card animal={animals[i]}></Card>
      ))
    }
   </div>
   </>
  )
}

export default App
