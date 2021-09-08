import { useEffect, useState } from "react"

type Resultprops = {
    num1:number | null;
    num2:number | null;
    operator: string | null;
    isShowed:boolean;
}

const Result =({num1,num2,operator,isShowed}:Resultprops) =>{

     const [result,setResult] = useState<number>(NaN)

     //set show state
    useEffect(()=>{
      if(isShowed){     //recieve show command as prop
           Calculate()
      }
      else{
          console.log("result not show")
      }

    },[isShowed])
  
    //set result 
    const Calculate = () =>{
         if(num1!==null && num2!==null)
          switch(operator){
        case '+' : setResult(num1+num2 )
                    break;
        case '-' : setResult(num1-num2 )
                    break;
        default : 
         }
    }
  
   
   

    return(
        <div>
                 {isShowed?<p>Result = {result}</p>:null} 
        </div>
    )
}

export default Result