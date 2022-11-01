import React from 'react'

const notifikationer = () => {
  const handleNotifikationChange = () => {
    const notifikationer = ["sod", "fair", "aggressiv", "truende"];
    const int = Math.floor(Math.random() * 4);
    return notifikationer[int]
    

  }

  const handleClick = () => {
    console.log("trykket")
     }

   const handleClick2 = (notifikationer) => {
    console.log(`${notifikationer} var trykket`)
     }

      //const [erVist, setErVist] = useState(false);
  

  return (

    
    <div className='notifikation-container'>
        <h3>Notifikationer</h3>
       
        <div className='notif-picker'>
            <p className='selected' onClick={handleClick}
            >Sød😘</p>
            <p onClick={() =>{handleClick2("fair")}}>Fair🕊</p>
            <p>Aggressiv😈</p>
            <p>Truende🤬</p> 
        </div>
        <div className='theme-show-box'>
 <p>
         {handleNotifikationChange()}
        </p>
        </div>
    </div>
  )
}

export default notifikationer