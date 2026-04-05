import './App.css'
import Card from './component/Card'

function App() {

  let vegetables=[
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/1ec5d712-5139-43b6-b4c9-b0e2efeeeb2c.png",
      title:"Onion (Pyaz)",
      weight:"1 kg",
      price:"30",
      btn:"ADD"
    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9b4cd95e-3f9e-4305-92a0-16d9875c6b4d.png",
      title:"Grren Chilli (Lanka)",
      weight:"100 g",
      price:"16",
      btn:"ADD" 
    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/097061a9-9b7e-4d7e-88d1-4e3f58fc51e0.png",
      title:"Potato (Aloo)",
      weight:"1 KG",
      price:"20",
      btn:"ADD"
    }
  ]
  return (
    <>
    
    <div className='grid grid-cols-2 gap-5 lg:grid-cols-3 justify-items-center'>
      {
        vegetables?.map((v,i)=>(
          <Card vegetable={vegetables[i]}></Card>
        ))
      }
    </div>
    </>
  )
}

export default App
