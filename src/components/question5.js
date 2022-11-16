


import React from 'react';
import { useState, useContext } from "react";
import { Context } from "../App";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Question5 = (props) => {
    const navigate = useNavigate();
    const [response5, setResponse5] = useState([]);
    const [msg,setMsg] =useState("")

    const value = useContext(Context);
    console.log(value.questions[2].question);
    // console.log(value.questions[0].questionoption[0].optionvalue)
    const handleClickNext = () => {
        if(response5.length>=1){
            navigate("/question6")
            setMsg("")
            props.getData(response5)
        }
        else {setMsg("you have to enter your response")}
}
    const handleClickBack = () => {
      navigate("/question4")
}

    return (
        <div className="page">
            <p>< IoMdArrowRoundBack onClick={handleClickBack}/></p>
            <p className="qsn">{value.questions[4].question}</p>
            <input style={{marginTop:20}}type="radio" value={response5} id="q1" name="qsn" onClick={() => { setResponse5(value.questions[4].questionoption[0].optionvalue) }} />
            <label htmlFor="Q1">{value.questions[4].questionoption[0].optionvalue}</label><br />
            <input style={{marginTop:20}} type="radio" value={response5} id="q1" name="qsn" onClick={() => { setResponse5(value.questions[4].questionoption[1].optionvalue) }} />
            <label htmlFor="Q1">{value.questions[4].questionoption[1].optionvalue}</label><br />
            {
                msg && <p>{msg}</p>
            }
            <button style={{marginLeft:500,marginTop:50}}onClick={handleClickNext}>Next</button>
        </div>
    )
}

export default Question5;
