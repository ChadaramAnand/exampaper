
import React from 'react'

const Result = (props) => {
    console.log(props.result)
  return (
    <div>
        <p>your response is...</p>
        {
            props.result && props.result.map((res,i)=>{
                return (
                    <p key={i}>{i+1}.{res}</p>
                )
            })
        }
    </div>
  )
}

export default Result;