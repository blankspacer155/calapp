
import {  useEffect, useState} from "react"
import { useHistory} from "react-router"
import Result from "./Result"

const Inputbar =() =>{ 
    const history = useHistory()


    const [isShowresult,setIsShowresult] = useState<boolean>(false)
    const inputall = document.querySelectorAll('input')
     const selectbar =document.querySelector('select')

     //when start , prevent manual go to result page
     useEffect(()=>{
       if(history.location.pathname==='/result')
       {
           history.push('/')
       }
     },[])

    //button fn
    const btnClick = () =>{
        if(inputall!==null){        
           if(inputall[0].value==='' || inputall[1].value==='' )
        {
            alert("please fill all number")
        }
        else if(selected === '')
        {
            alert("please select operator")
        }
        else{
                setIsShowresult(true)
                
                if(!isShowresult)           // case result not show yet
                {
                     history.push('/result') 
                }
        }   
        }
         
    }

    const btnReset = () =>{
        history.push('/')
        setIsShowresult(false)
        
        if(inputall!==null){
            inputall[0].value = ''
            inputall[1].value = ''
        }
        if(selectbar!==null)selectbar.value = 'none'

    }


    //input change 
    const [num,setNum] = useState<number[]>([])
    const num1Change = (ev:any) =>{
        const num1 = Number(ev.target.value)
        const [ ,num2] = num
        setNum([num1,num2])
     //result change
       resultChange()
    }
    const num2Change = (ev:any) =>{
        const num2 = Number(ev.target.value)
        const [ num1, ] = num
        setNum([num1,num2])
       //result change
        resultChange()
    }

    //result on change
    const resultChange= () =>{ 
         //set show when change
         setIsShowresult(false)
        history.push('/')
    }

    //select operator value
    const [selected,setSelected] = useState<string>('')

    return(
        <div>
            
            <input onChange={num1Change}  placeholder="first number"></input>
            <input onChange={num2Change} placeholder="second number"></input>
            <select name='operator' onChange={(ev)=>{
                setSelected(ev.target.value)
                 //result change
                resultChange()
                }} defaultValue='none'>
                <option value='none' selected disabled hidden>select option</option>
                <option value='+'>add</option>
                <option value='-'>minus</option>
            </select>
            <button onClick={btnClick}>calculate</button>
            <button onClick={btnReset}>reset</button>
            {isShowresult?<Result num1={num[0]} num2={num[1]} operator={selected} isShowed={isShowresult} />
                :<Result num1={null} num2={null} operator={null} isShowed={isShowresult} />}
        </div>
       
    )
}

export default Inputbar