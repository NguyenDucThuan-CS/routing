import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Child from './Child';

export default function HooksPage() {
    const listUser = ["Nguyen", "Si", "Thanh"];
    const [number, setNumber]= useState(0);
    // dc tong hop boi DidMount va DidUpdate
    useEffect(() => {
       
    },[]);

    useEffect(()=>{},[number])

    useEffect(()=>{
        const interval = setInterval(()=>{console.log("hello")},1000);
       return () => {
           clearInterval(interval);
        };
    },[])

    const showNumber = () => {
        console.log("show number");
    }

    const showNumberCallback = useCallback(showNumber,[]);

    //const listUserMemo = useMemo(listUser,[]);

    const numberUp = () => {
        let i = 0;
        while(i<1000) i++;
        return i;
    }
    return (
        <div>
            <h1>Number: {number}</h1>
            <button className='btn btn-success' onClick = {() => {
                setNumber(number + 1);
            }}>Increment</button>

            <Child showNumber = {showNumberCallback}/>

            <h1>Number up: {numberUp()}</h1>
        </div>
    )
}
