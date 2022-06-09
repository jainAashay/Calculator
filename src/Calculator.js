
import React, { useState } from 'react';
export default function Calculator() {
  
    const txtchange=(event)=>{
        setCount(count+event.target.innerText);
        //event.target.value=count;
       
     }
     const clfunc=(event)=>{
      setCount("");
      //event.target.value=count;
     
   }
   const ans=(event)=>{
      setCount(eval(count));
      //event.target.value=count;
     
   }
     const inputchange=(event)=>{
      setCount(event.target.value);
     
   }

     const [count, setCount] = useState("");
  return (
     
    <div className="container" style={{width:'75%' , height:800, }}>
       <input type="text" style={{width:'100%', height:70,backgroundColor:'yellow',color:'red', fontSize:30}}className="form-control my-5" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={count} onChange={inputchange} id="inp"/>
       <div className='row' >
          <div className='col'>
             <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='1' style={{width:'100%', height:110, fontSize:40}} onClick={txtchange}>1</button>
          </div>
          <div className='col'>
             <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='2' style={{width:'100%', height:110,fontSize:40 }} onClick={txtchange}>2</button>
          </div>
          <div className='col'>
             <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='3' style={{width:'100%', height:110, fontSize:40}} onClick={txtchange}>3</button>
          </div>
          <div className='col'>
             <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='AC' style={{width:'100%', height:110, fontSize:40,backgroundColor:"magenta"}} onClick={clfunc}>AC</button>
          </div>
          
       </div>
       <div className='row'>
          <div className='col'>
             <button type="button" className="btn btn-primary btn-lg my-1 mx-1"  style={{width:'100%', height:110, fontSize:40}} id='4' onClick={txtchange}>4</button>
          </div>
          <div className='col'>
             <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='5' style={{width:'100%', height:110,fontSize:40 }} onClick={txtchange}>5</button>
          </div>
          <div className='col'>
             <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='6' style={{width:'100%', height:110,fontSize:40 }} onClick={txtchange}>6</button>
          </div>
          <div className='col'>
          <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='/' style={{width:'100%', height:110,fontSize:40, backgroundColor:"OrangeRed"}} onClick={txtchange}>/</button>
          </div>
          
       </div>
       <div className='row'>
          <div className='col'>
             <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='7' style={{width:'100%', height:110, fontSize:40}} onClick={txtchange}>7</button>
          </div>
          <div className='col'>
             <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='8' style={{width:'100%', height:110,fontSize:40 }} onClick={txtchange}>8</button>
          </div>
          <div className='col'>
             <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='9' style={{width:'100%', height:110,fontSize:40 }} onClick={txtchange}>9</button>
          </div>
          <div className='col'>
             <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='-' style={{width:'100%', height:110, fontSize:40,backgroundColor:"OrangeRed" }} onClick={txtchange}>-</button>
          </div>
          
       </div>
       <div className='row'>
          <div className='col'>
          <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='+' style={{width:'100%', height:110, fontSize:40, backgroundColor:"OrangeRed"}} onClick={txtchange}>+</button>
             
          </div>
          <div className='col'>
             <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='0' style={{width:'100%', height:110, fontSize:40}} onClick={txtchange}>0</button>
          </div>
          <div className='col'>
             <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='*' style={{width:'100%', height:110, fontSize:40,backgroundColor:"OrangeRed" }} onClick={txtchange}>*</button>
          </div>
          <div className='col'>
          <button type="button" className="btn btn-primary btn-lg my-1 mx-1" id='=' style={{width:'100%', height:110,fontSize:40, backgroundColor:"green" }} onClick={ans}>=</button>
             
          </div>
          
       </div>
       
    </div>
    );
  
}
