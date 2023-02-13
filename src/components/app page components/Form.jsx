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
    const [topic, setTopic]= useState("");



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
            .then((data)=>{dispach(changeVerse(data));dispach(changeReference(data))})
        }
        else if(isTopicVerse){
            openai.createCompletion({
                model: "text-davinci-003",
                prompt: `give me a bible verse reference that teaches on the topic (${topic}).
                The refrence should be in this form ("mattew 2:22" or "mattew 5:27-28"),
                never ever let your answer end with : or -
                please don't add anything to it, just give me the reference`,
                temperature: 1,
                max_tokens: 7,
              })
              .then((res)=>{return res})
              .then((data)=>{
                const verseResponse = data.data.choices[0].text;
                const verseArray = verseResponse.split("");
                //chatGPT response ends with :
                if(verseArray[verseArray.length-1]===':'){
                    verseArray.push("1");
                    const newVerse = verseArray.join("");
                    console.log("chatGPT response ends with :");

                fetch(`https://bible-api.com/${newVerse}`)
                .then((response)=>{return response.json()})
                .then((data)=>{dispach(changeVerse(data));dispach(changeReference(data))})
                }
                 //chatGPT response doesn't contain :
                else if(!verseArray.includes(':')){
                    verseArray.push(":","1");
                    const newVerse = verseArray.join("");
                    console.log(verseResponse);

                fetch(`https://bible-api.com/${newVerse}`)
                .then((response)=>{return response.json()})
                .then((data)=>{dispach(changeVerse(data));dispach(changeReference(data))})
                }
                 //chatGPT gives a perfect response
                else{
                    fetch(`https://bible-api.com/${verseResponse}`)
                    .then((response)=>{return response.json()})
                    .then((data)=>{dispach(changeVerse(data));dispach(changeReference(data))})
                }            
            });
        }
        else{
            //random verse enerator
            openai.createCompletion({
                model: "text-davinci-003",
                prompt: `give me a random bible verse reference.
                The refrence should be in this form "mattew 2:22", 
                please don't add anything to it, just give me the reference
                and also never give me "John 3:16"
                `,
                temperature: 1,
                max_tokens: 7,
              })
              .then((res)=>{return res})
              .then((data)=>{
                fetch(`https://bible-api.com/${data.data.choices[0].text}`)
                .then((response)=>{return response.json()})
                .then((data)=>{console.log(data.text);dispach(changeVerse(data));dispach(changeReference(data))})
                
                console.log(data.data.choices[0].text);});
        }
    }
    return ( <>

        <div className="input-categories">
            <button onClick={activateSelfVerse} className={isSelfVerse && "is-active"}>Your own verse reference</button>
            <button onClick={activateTopicVerse} className={isTopicVerse && "is-active"}>Verse based on a topic</button>
            <button onClick={activateDiscoverVerse} className={isDiscoverVerse && "is-active"}>Discover random verse</button>
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

    </form>
    }


    {isTopicVerse && <form className="topic-verse">
        <input 
        type="text"
        placeholder="Enter your topic here. e.g. lust, baptism, faith"
        onChange={(e)=>{setTopic(e.currentTarget.value)}} />
        <button type="submit" onClick={generate}> Generate verse</button>
        </form>
    }


    {isDiscoverVerse && <form className="discover-verse">
        <p className="discover-title">
            Just click on the "Discover verse" button below to generate a random verse
        </p>
        <button type="submit" onClick={generate}>Discover Verse</button>
        </form>
    }

    </> );
}

export default Form;