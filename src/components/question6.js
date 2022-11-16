


import React from 'react';
import { useState, useContext } from "react";
import { Context } from "../App";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Question5 = (props) => {
    const navigate = useNavigate();
    const [response6, setResponse6] = useState([]);
    const [msg,setMsg] =useState("")

    console.log(response6)
    const value = useContext(Context);
    console.log(value)
    console.log(value.questions[2].question);
    // console.log(value.questions[0].questionoption[0].optionvalue)
    const handleClickNext = () => {
        if(response6.length>=1){
            navigate("/submit")
            setMsg("")
            props.getData(response6)
        }
        else {setMsg("you have to enter your response")}
}
    const handleClickBack = () => {
        navigate("/question5")
  }

    return (
        <div className="page">
            <p>< IoMdArrowRoundBack onClick={handleClickBack}/></p>
            <p className="qsn">{value.questions[5].question}</p>
            <input style={{marginTop:20}}type="radio" value={response6} id="q1" name="qsn" onClick={() => { setResponse6(value.questions[5].questionoption[0].optionvalue) }} />
            <label htmlFor="Q1">{value.questions[5].questionoption[0].optionvalue}</label><br />
            <input style={{marginTop:20}} type="radio" value={response6} id="q1" name="qsn" onClick={() => { setResponse6(value.questions[5].questionoption[1].optionvalue) }} />
            <label htmlFor="Q1">{value.questions[5].questionoption[1].optionvalue}</label><br />
            <input style={{marginTop:20}} type="radio" value={response6} id="q1" name="qsn" onClick={() => { setResponse6(value.questions[5].questionoption[2].optionvalue) }} />
            <label htmlFor="Q1">{value.questions[5].questionoption[2].optionvalue}</label><br />
            {
                msg && <p>{msg}</p>
            }
            <button style={{marginLeft:500,marginTop:50}} onClick={handleClickNext}>Submit</button>
        </div>
    )
}

export default Question5;
