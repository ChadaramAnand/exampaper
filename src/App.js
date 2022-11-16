import './App.css';
import React,{createContext,useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Question1 from "./components/question1";
import Question2 from "./components/question2";
import Question3 from "./components/question3";
import Question4 from "./components/question4";
import Question5 from "./components/question5";
import Question6 from "./components/question6";
import Submit from "./components/submit";
import Result from "./result";

import Data from "./data";


export const Context = createContext()

function App() {
const [result,setResult] = useState([])
  function getData(props){
       setResult([...result,props])
  }
  return (
      <Context.Provider value={Data}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Question1 getData={getData}/>}/>
          <Route path="/question2" element={<Question2 getData={getData}/>}/>
          <Route path="/question3" element={<Question3 getData={getData}/>}/>
          <Route path="/question4" element={<Question4 getData={getData}/>}/>
          <Route path="/question5" element={<Question5 getData={getData}/>}/>
          <Route path="/question6" element={<Question6 getData={getData}/>}/>
          <Route path="/submit" element={<Submit />}/>
          <Route path="/result" element={<Result result={result}/>} />
        </Routes>
        </BrowserRouter>
      </Context.Provider>
  );
}

export default App;
