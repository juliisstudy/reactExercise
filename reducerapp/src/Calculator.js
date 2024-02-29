import {
    useState,
    useRef
}from "react"


const Calculator=()=>{

    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const  [result,setResult] = useState(0);

    function plus(e){
        e.preventDefault();
        setResult((result)=>result+Number(inputRef.current.value));
    }
    function minus(e){
        e.preventDefault();
        setResult((result)=>result-Number(inputRef.current.value));
    }
    function times(e){
        e.preventDefault();
        setResult((result)=>result*Number(inputRef.current.value));
    }
    function divide(e){
        e.preventDefault();
        setResult((result)=>result/Number(inputRef.current.value));
    }
    function resetInput(e){
        e.preventDefault();
        inputRef.current.value = 0;
    }
    function resetResult(e){
        e.preventDefault();
        setResult("");
    }
    return (
        <>
            <form>
                <p ref ={resultRef}>
                    {result}
                </p>
                <input pattern = "[0-9]" 
                       ref={inputRef}
                       type = "number"
                       placeholder="Type a number"/>
                <button onClick={plus}>add</button>
                <button onClick={minus}>minus</button>
                <button onClick={times}>times</button>
                <button onClick={divide}>divide</button>
                <button onClick={resetInput}>resetInput</button>
                <button onClick={resetResult}>resetResult</button>

            </form>
        </>
    )
}

export default Calculator