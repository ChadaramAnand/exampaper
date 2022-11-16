
import React from 'react';
import { useState, useContext } from "react";
import { Context } from "../App";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Question2 = (props) => {
    const navigate = useNavigate();
    const [response2, setResponse2] = useState([]);
    const [msg,setMsg] =useState("")
    const value = useContext(Context);
    console.log(value)
    console.log(value.questions[2].question);
    // console.log(value.questions[0].questionoption[0].optionvalue)
    const handleClickNext = () => {
        if(response2.length>=1){
            navigate("/question3")
            setMsg("")
            props.getData(response2)
            console.log(response2)
        }
        else {setMsg("you have to enter your response")}
}
    const handleClickBack = () => {
      navigate("/")
}

    return (
        <div className="page">
            <p>< IoMdArrowRoundBack onClick={handleClickBack}/></p>
            <p className="qsn">{value.questions[1].question}</p>
            <input style={{marginTop:20}}type="radio" value={response2} id="q1" name="qsn" onClick={() => { setResponse2(value.questions[1].questionoption[0].optionvalue) }} />
            <label htmlFor="Q1">{value.questions[1].questionoption[0].optionvalue}</label><br />
            <input style={{marginTop:20}} type="radio" value={response2} id="q1" name="qsn" onClick={() => { setResponse2(value.questions[1].questionoption[1].optionvalue) }} />
            <label htmlFor="Q1">{value.questions[1].questionoption[1].optionvalue}</label><br />
            {
                msg && <p>{msg}</p>
            }
            <button style={{marginLeft:500,marginTop:50}}onClick={handleClickNext}>Next</button>
        </div>
    )
}

export default Question2;
