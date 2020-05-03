import React, {useState} from 'react';
import {useOnclick} from "modules/module/hooks/use-get-count";

function FirstContainer(props) {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    const useOnclickHandler = useOnclick(count);
    function onclickHandler () {
        useOnclickHandler(setCount);
    }
    function onClickNumber () {
        setNumber((prevNumber) => prevNumber + 1)
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={onclickHandler}>
                Count
            </button>
            <div>{number}</div>
            <button onClick={onClickNumber}>
                Number
            </button>
        </div>
    )
}

export {FirstContainer}
