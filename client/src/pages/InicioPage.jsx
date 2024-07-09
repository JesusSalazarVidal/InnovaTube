import React, { useEffect } from 'react'
import { useInnova } from '../Context/InnovaContext'
import { useNavigate } from 'react-router-dom'
import YouTubeInicio from '../Components/YouTubeInicio'

function Inicio() {
  const {Usuario} = useInnova()
  const navigate = useNavigate()  
  const {logout} =useInnova()

  useEffect(()=>{
    if(Usuario && Usuario.length !== 0){
      navigate("/inicio")
    }else{
      navigate("/login")
    }
  },[Usuario])

  return (
    <div>
      <YouTubeInicio Usuario={Usuario.user}/>
    </div>
  )
}

export default Inicio