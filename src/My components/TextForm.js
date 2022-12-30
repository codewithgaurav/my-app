import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to uppercase", "success");
  }

  const handleLoClick = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Text has been converted to lowercase", "success"); 
  }

  const handleClearClick = () => {
    let newText2 = ("");
    setText(newText2); 
    props.showAlert("Text has been cleared", "success");
  }

  const handleOnChange = (event) => {
   // console.log("onChange");
    setText(event.target.value);
  }

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied to clipboard", "success")
  }

  const [text, setText] = useState('')
  return (
    <>
    <div className = "container" style ={{color: props.mode==='dark'?'white':'#090a0b3'}}>
        <h1>{props.heading}</h1>
        <div 
            className="mb-3">
            <label htmlFor="myBox"/>  
            <textarea className="form-control" value = {text} style = {{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode==="dark"?'white':'#090a0b'}} onChange={handleOnChange}  id="myBox" rows="6"></textarea>
            <button className="btn btn-primary" onClick = {handleUpClick}> Convert to Uppercase </button>
            <button className="btn btn-primary mx-3" onClick = {handleLoClick}> Convert to Lowercase </button>
            <button className="btn btn-primary" onClick={handleClearClick}> Clear Text </button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}> Copy Text </button>

        </div>
    </div>
    <div className="container my-3" style ={{color: props.mode==='dark'?'white':'#090a0b'}}>
      <h2>Your text summary here</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div> 
    </>
  )
}

