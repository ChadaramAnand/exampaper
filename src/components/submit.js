
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Submit = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate("/result")
    }
    
  return (
    <div>
        <button style={{marginLeft:200,marginTop:200}} onClick={handleSubmit}>click here to check your respone</button>
    </div>
  )
}

export default Submit;