import React from 'react';
import { useState, useContext } from "react";
import { Context } from "../App";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Question1 = (prop) => {
    const navigate = useNavigate();
    const [response1, setResponse1] = useState([]);
    const [msg,setMsg] = useState("");
    console.log(response1)
    const value = useContext(Context);
    // console.log(value)
    // console.log(value.questions[0].questionoption[0].optionvalue)
    const handleClickNext = () => {
            if(response1.length>=1){
                navigate("/question2")
                setMsg("")
                prop.getData(response1)
            }
            else {setMsg("you have to enter your response")}
    }
    return (
        <div className="page">
            <p className="qsn">{value.questions[0].question}</p>
            <input style={{marginTop:20}}type="radio" value={response1} id="q1" name="qsn" onClick={() => { setResponse1(value.questions[0].questionoption[0].optionvalue) }} />
            <label htmlFor="Q1">{value.questions[0].questionoption[0].optionvalue}</label><br />
            <input style={{marginTop:20}} type="radio" value={response1} id="q1" name="qsn" onClick={() => { setResponse1(value.questions[0].questionoption[1].optionvalue) }} />
            <label htmlFor="Q1">{value.questions[0].questionoption[1].optionvalue}</label><br />
            <input style={{marginTop:20}} type="radio" value={response1} id="q1" name="qsn" onClick={() => { setResponse1(value.questions[0].questionoption[2].optionvalue) }} />
            <label htmlFor="Q1">{value.questions[0].questionoption[2].optionvalue}</label><br/>
            {
                msg && <p>{msg}</p>
            }
            <button style={{marginLeft:500,marginTop:50}}onClick={handleClickNext}>Next</button>
        </div>
    )
}

export default Question1;
