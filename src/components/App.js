import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    let App = () =>{
        var arr = ["Siblings", "Friends", "Love", "Affection","Marraige","Enemy","Please Enter Valis Input"];
        const[getrel, setRel] = useState();
        const calRelation = ()=>{
            let input1 = document.querySelector('#inputfirst').value;
            let input2 = document.querySelector('#inputlast').value;
            if(input1===""|| input2==="")
            setRel(6);
            else{
                input1 =  input1.toLowerCase();
                input2 =  input2.toLowerCase();
                function  match(str1 , str2){
                    let count =0;
                    for(let i in str1){
                        if(str2.includes(str1[i]))
                            count++;
                    }
                    return count;
                }
                const ret = match(input1,input2);
                let l1 = Number(input1.length);
                let l2 = Number(input2.length);
                let len = l1+l2 -len*2;
                setRel(n%6);
            }   
    }
 
    let clearRelation = () =>{
        document.getElementById("inputfirst").value = "";
        document.getElementById("inputlast").value = "";
        setRel("");
    }

        return(
            <div id="main">
               <label>First Name</label>
               <input type="text" data-testid="input1" id="inputfirst"/><br/><br/>
               <label>Last Name</label>
               <input type="text" data-testid="input2" id="inputlast"/><br/><br/>
               <button data-testid="calculate relationship" onClick={calRelation}>Calculate Relationship Future</button>
               <button data-testid="calculate relationship" onClick={clearRelation}>Clear inputs and relationship status</button>
               <h3 data-testid="answer" id="relation">{arr[getrel]}</h3>
            </div>
        )
    }


export default App;
