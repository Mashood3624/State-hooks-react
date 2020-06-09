import React, { useState} from 'react';
import './Buttonn.css';

function Buttonn() {
  const [islit,setlit]= useState(true);
  const bright = islit? "lit":"dark";
  const [tem,settem]= useState(22);
  return (
    <div className={"room "+ (bright)}>
            <button onClick={() => setlit(true)} >light On</button>
            <button onClick={() => setlit(false)}>light Off</button>
            <br />
            <br />
            <p className={islit? "black":"white"}>TEMPERATURE = {tem}</p>
             <button onClick={() => settem(tem+1)} >+</button>
            <button onClick={() => settem(tem-1)}>-</button>
    </div>
  );
}

export default Buttonn;
