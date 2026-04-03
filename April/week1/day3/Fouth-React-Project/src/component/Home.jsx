import React from 'react'

function Home(props) {
  return (
    <div>
        Home
        object value:<br/>
        name:{props?.obj?.name} <br />
        age:{props?.obj?.age}
        {props.func()}
    </div>
  )
}

export default Home