

import React from 'react';
import { useState, useContext } from "react";
import { Context } from "../App";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Question4 = (props) => {
    const navigate = useNavigate();
    const [response4, setResponse4] = useState([]);
    const [msg,setMsg] =useState("")

    const value = useContext(Context);
    console.log(value)
    console.log(value.questions[2].question);
    // console.log(value.questions[0].questionoption[0].optionvalue)
    const handleClickNext = () => {
        if(response4.length>=1){
            navigate("/question5")
            setMsg("")
            props.getData(response4)
        }
        else {setMsg("you have to enter your response")}
}
    const handleClickBack = () => {
      navigate("/question3")
}

    return (
        <div className="page">
            <p>< IoMdArrowRoundBack onClick={handleClickBack}/></p>
            <p className="qsn">{value.questions[3].question}</p>
            <input style={{marginTop:20}}type="radio" value={response4} id="q1" name="qsn" onClick={() => { setResponse4(value.questions[3].questionoption[0].optionvalue) }} />
            <label htmlFor="Q1">{value.questions[3].questionoption[0].optionvalue}</label><br />
            <input style={{marginTop:20}} type="radio" value={response4} id="q1" name="qsn" onClick={() => { setResponse4(value.questions[3].questionoption[1].optionvalue) }} />
            <label htmlFor="Q1">{value.questions[3].questionoption[1].optionvalue}</label><br />
            <input style={{marginTop:20}} type="radio" value={response4} id="q1" name="qsn" onClick={() => { setResponse4(value.questions[3].questionoption[2].optionvalue) }} />
            <label htmlFor="Q1">{value.questions[3].questionoption[2].optionvalue}</label><br />
            {
                msg && <p>{msg}</p>
            }
            <button style={{marginLeft:500,marginTop:50}}onClick={handleClickNext}>Next</button>
        </div>
    )
}

export default Question4;
