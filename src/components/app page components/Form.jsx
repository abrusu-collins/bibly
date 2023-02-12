import { useState } from "react";
import { useDispatch } from "react-redux";
import {changeVerse,changeReference} from "../../features/verse/verseSlice";

function Form() {
    const [userinputs,setuserinputs] = useState({book:"",chapter:"",verse:""});
const [isSelfVerse,setIsSelfVerse] = useState(false);
const [isTopicVerse,setIsTopicVerse] = useState(false);
const [isDiscoverVerse,setIsDiscoverVerse] = useState(false);



    const dispach = useDispatch()
    const generate = (e)=>{
        e.preventDefault();
        if(isSelfVerse){
            fetch(`https://bible-api.com/${userinputs.book}%20${userinputs.chapter}:${userinputs.verse}`)
            .then((response)=>{return response.json()})
            .then((data)=>{console.log(data.text);dispach(changeVerse(data));dispach(changeReference(data))})
        }
        else if(isTopicVerse){

        }
        else{
            
        }


    }
    return ( <>

<div className="toggle-input-category">
        <div className="input-categories">
            <button>Your own verse reference</button>
            <button>Verse based on a topic</button>
            <button>Discover random verse</button>
        </div>
      </div>
    {isSelfVerse && <form >
        <input 
        type="text"
        name="book" 
        id="book" 
        placeholder="book name e.g mark, 1 thessalonians, ..." 
        value={userinputs.book} 
        onChange={(e)=>{setuserinputs({...userinputs,book:e.target.value})}}  />

        <input 
        type="text" 
        name="chapter" 
        id="chapter" 
        placeholder="chapter number e.g 1, 2, ..." 
        value={userinputs.chapter} 
        onChange={(e)=>{setuserinputs({...userinputs,chapter:e.target.value})}} />

        <input 
        type="text" 
        name="verse" 
        id="verse" 
        placeholder="verse number e.g 1, 2, ..." 
        value={userinputs.verse} 
        onChange={(e)=>{setuserinputs({...userinputs,verse:e.target.value})}} />
        
        <button type="submit" onClick={generate}>Generate verse</button>
        <br />


    </form>}
    </> );
}

export default Form;