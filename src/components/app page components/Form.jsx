import { useState } from "react";

function Form() {
    const [userinputs,setuserinputs] = useState({book:"",chapter:"",verse:""});
    const generate = (e)=>{
        e.preventDefault();
    }
    return ( <>
    <form >
        <input type="text" name="book" id="book" placeholder="book name e.g mark, luke..." value={userinputs.book} onChange={(e)=>{setuserinputs({...userinputs,book:e.target.value})}}  />
        <input type="text" name="chapter" id="chapter" placeholder="chapter number e.g 1, 2..." value={userinputs.chapter} onChange={(e)=>{setuserinputs({...userinputs,chapter:e.target.value})}} />
        <input type="text" name="verse" id="verse" placeholder="verse number e.g 1, 2..." value={userinputs.verse} onChange={(e)=>{setuserinputs({...userinputs,verse:e.target.value})}} />
        <button type="submit" onClick={generate}>Generate verse</button>
    </form>
    </> );
}

export default Form;