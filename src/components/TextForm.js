import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const Upcase = () => {
        // console.log("Upper case is clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success")
    }

    const Lowcase = () => {
        // console.log("Lower case is clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success")
    }

    const clear = () =>{
        setText("")
        props.showAlert("Text Cleared","success")
    }

    const handleOnchange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className=" container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#f6f1f1' : 'white' ,color : props.mode === 'dark' ? 'white' : 'black'}} id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnchange}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={Upcase}>Convert to Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={Lowcase}>Convert to Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clear}>Clear Text</button>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length>0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length>0 }).length} Minutes</p>
                <h2>Text Preview</h2>
                <p>{text.length >0 ? text : "No text to preview"} </p>
            </div>
        </>
    )
}
