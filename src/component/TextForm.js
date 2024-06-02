import React,{useState} from 'react';

export default function TextForm(props) {
    const[text,setText] = useState('');

    const handleupclick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert("Converted to uppercase","success")
       
        //setText("you have clicked on uppercase button");
    }
    const handlelowclick = ()=>{
        let lowertext = text.toLowerCase();
        setText(lowertext)
        props.showalert("Converted to lowercase","success")
    }
    const handleclear = ()=>{
        let clear = '';
        setText(clear);
        props.showalert("text is cleared","success")
    }
    const handleonchange = (event)=>{
       
        setText(event.target.value)
    }
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handlelowclick}>Convert to lowercase</button>
    
            <button className="btn btn-primary mx-2 my-1" onClick={handleclear}>Clear text</button>


        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summery</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text boc to preview it here"}</p>

        </div>
    </>   
  );
}
