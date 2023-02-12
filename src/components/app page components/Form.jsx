import { useState } from "react";
import { useDispatch } from "react-redux";
import {changeVerse,changeReference} from "../../features/verse/verseSlice";

import { Configuration, OpenAIApi }  from "openai";
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function Form() {
    const [userinputs,setuserinputs] = useState({book:"",chapter:"",verse:""});
    const [isSelfVerse,setIsSelfVerse] = useState(true);
    const [isTopicVerse,setIsTopicVerse] = useState(false);
    const [isDiscoverVerse,setIsDiscoverVerse] = useState(false);



    const dispach = useDispatch();
    const activateSelfVerse = (e)=>{
        setIsSelfVerse(true)
        setIsTopicVerse(false);
        setIsDiscoverVerse(false);
    }
    const activateTopicVerse = (e)=>{
        setIsSelfVerse(false)
        setIsTopicVerse(true);
        setIsDiscoverVerse(false);
    }
    const activateDiscoverVerse = (e)=>{
        setIsSelfVerse(false)
        setIsTopicVerse(false);
        setIsDiscoverVerse(true);
    }
    const generate = (e)=>{
        e.preventDefault();
        if(isSelfVerse){
            fetch(`https://bible-api.com/${userinputs.book}%20${userinputs.chapter}:${userinputs.verse}`)
            .then((response)=>{return response.json()})
            .then((data)=>{console.log(data.text);dispach(changeVerse(data));dispach(changeReference(data))})
        }
        else if(isTopicVerse){
            openai.createCompletion({
                model: "text-davinci-003",
                prompt: "Say this is a test",
                temperature: 0,
                max_tokens: 7,
              }).then((res)=>{return res}).then((data)=>{console.log(data);});
        }
        else{
            
        }
    }
    return ( <>

<div className="toggle-input-category">
        <div className="input-categories">
            <button onClick={activateSelfVerse}>Your own verse reference</button>
            <button onClick={activateTopicVerse}>Verse based on a topic</button>
            <button onClick={activateDiscoverVerse}>Discover random verse</button>
        </div>
      </div>
      
    {isSelfVerse && <form  className="self-verse">
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


    {isTopicVerse && <form className="topic-verse">
        <input type="text" name="" id="" />
        <button type="submit" onClick={generate}> Generate verse</button>
        </form>}


    {isDiscoverVerse && <form className="discover-verse">
        <p className="discover-title">
            Just click on the "Discover verse" button below to generate a random verse
        </p>
        <button type="submit" onClick={generate}>Discover Verse</button>
        </form>}

    </> );
}

export default Form;